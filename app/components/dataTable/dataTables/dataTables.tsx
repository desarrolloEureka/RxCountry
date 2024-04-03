import {
    ExportProps,
    TableDataItemOld,
    UploadDataButtonModalProps,
    UploadDataModalProps,
} from "@/types/tables";
import differenceBy from "lodash/differenceBy";
import dynamic from "next/dynamic";
import React, { MouseEvent } from "react";
import { Button, Card } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import Swal from "sweetalert2";

// import DataTableExtensions from 'react-data-table-component-extensions';

createTheme(
    "solarized",
    {
        text: {
            primary: "#268bd2",
            secondary: "#2aa198",
        },
        background: {
            default: "#f0f8ff",
        },
        context: {
            background: "#BBDEFB",
            text: "#000000",
        },
        divider: {
            default: "#778899",
        },
        // action: {
        //     button: "rgba(0,0,0,.54)",
        //     hover: "#rgba(0,0,0,.08)",
        //     disabled: "rgba(0,0,0,.12)",
        // },
    },
    "dark",
);

const DataTableExtensions: any = dynamic(
    () => import("react-data-table-component-extensions"),
    { ssr: false },
);

function convertArrayOfObjectsToCSV(array: object[]): string {
    let result: string;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(array[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item: any) => {
        let ctr = 0;
        keys.forEach((key: string) => {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];

            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(array: any[]) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
        csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
}

const Export = ({ onExport }: ExportProps) => (
    <Button
        onClick={(e: MouseEvent<HTMLButtonElement>) =>
            onExport(e.currentTarget.value)
        }
    >
        Exportar
    </Button>
);

const UploadDataCsvModal = ({
    onUploadDataModalCsv,
}: UploadDataButtonModalProps) => (
    <Button onClick={onUploadDataModalCsv}>Subir Csv</Button>
);

const SalesModal = ({ onSalesModal }: UploadDataButtonModalProps) => (
    <Button onClick={onSalesModal}>Nuevo</Button>
);

const UploadDataPdfModal = ({
    onUploadDataModalPdf,
}: UploadDataButtonModalProps) => (
    <Button onClick={onUploadDataModalPdf}>Subir multiples Pdf</Button>
);

const NoDataCard = () => (
    <div className="">
        <Card className="custom-card tw-mt-4">
            <Card.Body>
                <div className="card-text">
                    <p className="mb-0">No hay Datos por mostrar</p>
                </div>
            </Card.Body>
        </Card>
    </div>
);

export const ExportCSV = ({
    onUploadDataModalCsv,
    onUploadDataModalPdf,
    onSalesModal,
    data,
    // tableData,
    columns,
    // noHeader = false,
    tableTitle,
}: UploadDataModalProps) => {
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);
    const [dataTable, setDataTable] = React.useState(data);

    const actionsMemo = React.useMemo(() => {
        return (
            <>
                {onUploadDataModalCsv && (
                    <UploadDataCsvModal
                        onUploadDataModalCsv={onUploadDataModalCsv}
                    />
                )}
                {onUploadDataModalPdf && (
                    <UploadDataPdfModal
                        onUploadDataModalPdf={onUploadDataModalPdf}
                    />
                )}
                {onSalesModal && <SalesModal onSalesModal={onSalesModal} />}
                {dataTable.length !== 0 && (
                    <Export onExport={() => downloadCSV(dataTable)} />
                )}
            </>
        );
    }, [dataTable, onSalesModal, onUploadDataModalCsv, onUploadDataModalPdf]);

    const handleRowSelected = React.useCallback((state: any) => {
        setSelectedRows(state.selectedRows);
    }, []);

    const handleRowEdit = (row: any, event: any) => {
        console.log(row.id);
    };

    const contextActionsMemo = React.useMemo(() => {
        const handleDelete = () => {
            Swal.fire({
                title: `Are you sure you want to delete:\r ${selectedRows.map(
                    (r: TableDataItemOld) => r.SNO,
                )}?`,
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                // confirmButtonColor: "#3085d6",
                // cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success",
                    );
                    setToggleCleared(!toggleCleared);
                    setDataTable(differenceBy(dataTable, selectedRows, "SNO"));
                } else {
                    setToggleCleared(!toggleCleared);
                }
            });
        };

        return (
            <Button key="delete" onClick={handleDelete}>
                Delete
            </Button>
        );
    }, [dataTable, selectedRows, toggleCleared]);

    // return (
    //   <DataTable columns={columns} data={data} actions={actionsMemo} pagination />
    // );

    const tableDatas = {
        columns,
        data: dataTable,
    };

    return (
        <DataTableExtensions
            export={false}
            print={false}
            {...tableDatas}
            filterPlaceholder="Buscar"
        >
            <DataTable
                onSelectedRowsChange={handleRowSelected}
                selectableRows
                contextActions={contextActionsMemo}
                clearSelectedRows={toggleCleared}
                noDataComponent={<NoDataCard />}
                onRowClicked={handleRowEdit}
                pointerOnHover
                defaultSortFieldId={2}
                columns={columns}
                data={dataTable}
                actions={actionsMemo}
                pagination
                highlightOnHover
                title={tableTitle}
                progressPending={dataTable ? false : true}
                theme="solarized"
            />
        </DataTableExtensions>
    );
};
