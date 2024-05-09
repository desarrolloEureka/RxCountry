"use client";
import { exportTableData, basicTableData } from "@/data/tables";
import { getAllDocumentsQuery } from "@/queries/documentsQueries";
import { DataObject } from "@/types/documents";
import { setDataTable } from "@/types/tables";
import { useCallback, useEffect, useState } from "react";

const CustomTitle = ({ row }: any) => (
    <div data-tag="allowRowEvents">
        <span
            className={`status ${row.isActive ? "bg-success" : "bg-danger"} `}
        ></span>
        {row.isActive ? "Activo" : "Inactivo"}
    </div>
);

interface ColumnNamesToDisplay {
    [key: string]: string;
}


const DataTablesHook = (reference: string) => {
    const [handleShowCsv, setHandleShowCsv] = useState(false);
    const [handleShowPdf, setHandleShowPdf] = useState(false);
    const [handleShowMainForm, setHandleShowMainForm] = useState(false);
    const [handleShowMainFormEdit, setHandleShowMainFormEdit] = useState(false);
    const [getDocuments, setGetDocuments] = useState<DataObject[] | any[]>();
    const [dataTable, setDataTable] = useState<setDataTable>();
    const [columns, setColumns] = useState<any[]>();
    const [editData, setEditData] = useState<any>();

    const getAllDocuments = useCallback(async () => {
        const documents = await getAllDocumentsQuery(reference);

        if (documents.length > 0) {
            const cols: any[] = [];

            // const entries = Object.entries(documents[0]);

            const entries2 = Object.keys(documents[0]);

            const columnNamesToDisplay: ColumnNamesToDisplay = {
                // uid:"uid",
                name: "Nombre",
                lastName: "Apellido",
                idType: "Tipo",
                id: "Documento",
                phone: "Teléfono",
                phone2: "Teléfono fijo",
                email: "Correo",
                address: "Dirección",
                description: "Descripción",
                age: "Edad",
                discount: "Descuento(%)",
                // "birthDate",
                // "country",
                // "state",
                // "city",
                // "password",
                // "confirmPassword",
                // "specialty",
                // "contract",
                rol: "Rol",
                // "campus",
                // "area",
                // "urlPhoto",
                // "timestamp",
                isActive: "Estado",
                // "isDeleted",
            };

            const omittedColumns = Object.keys(columnNamesToDisplay);

            // entries.sort(function (a, b) {
            //     if (a[0] > b[0]) {
            //         return 1;
            //     }
            //     if (a[0] < b[0]) {
            //         return -1;
            //     }
            //     // a must be equal to b
            //     return 0;
            // });

            entries2.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });

            // const ordenamiento: any = {
            //     name: 1,
            //     lastName: 2,
            //     idType: 3,
            //     id: 4,
            //     phone: 5,
            //     email: 6,
            //     isActive: 7,
            // };

            // entries2.sort((a, b) => {
            //     if (ordenamiento[a] > ordenamiento[b]) {
            //         return 1;
            //     }
            //     if (ordenamiento[a] < ordenamiento[b]) {
            //         return -1;
            //     }
            //     // a must be equal to b
            //     return 0;
            // });

            // entries2.sort((a, b): any => {
            //     ordenamiento[a] - ordenamiento[b];
            //     // console.log(ordenamiento[a] - ordenamiento[b]);
            // });

            // console.log(entries2);

            // entries.forEach((val, key) => {
            entries2.forEach((val) => {
                const columnsData = {
                    name: columnNamesToDisplay[val],
                    selector: (row: any) =>
                        val === "isActive" ? (
                            <CustomTitle row={row} />
                        ) : (
                            [row[val]]
                        ),
                    sortable: true,
                    // grow: val === "email" || val === "address" ? 2 : 1,
                    width:
                        val === "email" || val === "address"
                            ? "250px"
                            : undefined,
                    omit: !omittedColumns.includes(val),
                };
                cols.push(columnsData);
            });

            const currentData = {
                columns: cols,
                data: documents,
            };

            // console.log("cols", cols);
            // console.log("currentData", currentData);
            // console.log("documents", documents);

            setColumns(cols);
            setDataTable(currentData); //obtain dataTable
            documents && setGetDocuments(currentData.data); //obtain data
        } else {
            // console.log("dddddd");
            const currentData = {
                columns: [],
                data: [],
            };
            setColumns([]);
            setDataTable(currentData); //obtain dataTable
            setGetDocuments(currentData.data); //obtain data
        }
    }, [reference]);

    const onUploadDataModalCsv = () => setHandleShowCsv(true);

    const onUploadDataModalPdf = () => setHandleShowPdf(true);

    const onMainFormModal = () => setHandleShowMainForm(true);

    const onMainFormModalEdit = (row: any) => {
        setHandleShowMainFormEdit(true);
        setEditData(row);
        // console.log(row);
    };

    // console.log("Rendering");

    useEffect(() => {
        getAllDocuments();
    }, [getAllDocuments]);

    useEffect(() => {
        if (!handleShowMainForm || !handleShowMainFormEdit) {
            getAllDocuments();
        }
    }, [getAllDocuments, handleShowMainForm, handleShowMainFormEdit]);

    // useEffect(() => {
    //     if (!handleShowMainFormEdit) {
    //         getAllDocuments();
    //     }
    // }, [getAllDocuments, handleShowMainFormEdit]);

    return {
        columns,
        data: getDocuments,
        handleShowCsv,
        handleShowPdf,
        handleShowMainForm,
        setHandleShowCsv,
        setHandleShowPdf,
        setHandleShowMainForm,
        setHandleShowMainFormEdit,
        onUploadDataModalCsv,
        onUploadDataModalPdf,
        onMainFormModal,
        onMainFormModalEdit,
        dataTable,
        handleShowMainFormEdit,
        editData,
    };
};

export default DataTablesHook;
