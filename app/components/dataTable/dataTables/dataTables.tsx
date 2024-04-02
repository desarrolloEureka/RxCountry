import React, { MouseEvent } from "react";
import DataTable, { createTheme } from "react-data-table-component";
// import DataTableExtensions from 'react-data-table-component-extensions';

createTheme(
    "solarized",
    {
        text: {
            primary: "#268bd2",
            secondary: "#2aa198",
        },
        background: {
            default: "#002b36",
        },
        context: {
            background: "#cb4b16",
            text: "#FFFFFF",
        },
        divider: {
            default: "#073642",
        },
        action: {
            button: "rgba(0,0,0,.54)",
            hover: "rgba(0,0,0,.08)",
            disabled: "rgba(0,0,0,.12)",
        },
    },
    "dark",
);

const DataTableExtensions: any = dynamic(
    () => import("react-data-table-component-extensions"),
    { ssr: false },
);
import { Button } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import dynamic from "next/dynamic";
import {
    ExportProps,
    UploadDataButtonModalProps,
    UploadDataModalProps,
} from "@/types/tables";

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
    <Button onClick={onSalesModal}>Ingresar</Button>
);

const UploadDataPdfModal = ({
    onUploadDataModalPdf,
}: UploadDataButtonModalProps) => (
    <Button onClick={onUploadDataModalPdf}>Subir multiples Pdf</Button>
);

export const ExportCSV = ({
    onUploadDataModalCsv,
    onUploadDataModalPdf,
    onSalesModal,
    data,
    tableData,
    columns,
    noHeader = false,
    tableTitle,
}: UploadDataModalProps) => {
    const actionsMemo = React.useMemo(() => {
        return (
            <>
                <UploadDataCsvModal
                    onUploadDataModalCsv={onUploadDataModalCsv}
                />
                {onUploadDataModalPdf && (
                    <UploadDataPdfModal
                        onUploadDataModalPdf={onUploadDataModalPdf}
                    />
                )}
                {onSalesModal && <SalesModal onSalesModal={onSalesModal} />}
                <Export onExport={() => downloadCSV(data)} />
            </>
        );
    }, [data, onSalesModal, onUploadDataModalCsv, onUploadDataModalPdf]);

    // return (
    //   <DataTable columns={columns} data={data} actions={actionsMemo} pagination />
    // );

    return (
        <DataTableExtensions {...tableData} filterPlaceholder="Buscar">
            <DataTable
                // noHeader={noHeader}
                defaultSortFieldId={2}
                columns={columns}
                data={data}
                actions={actionsMemo}
                pagination
                highlightOnHover
                title={tableTitle}
                progressPending={data ? false : true}
                theme="solarized"
            />
        </DataTableExtensions>
    );
};
