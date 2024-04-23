"use client";
import { exportTableData, basicTableData } from "@/data/tables";
import { getAllDocumentsQuery } from "@/queries/documentsQueries";
import { DataObject } from "@/types/documents";
import { setDataTable } from "@/types/tables";
import { useCallback, useEffect, useState } from "react";

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

        // console.log(documents[0]);

        if (documents.length > 0) {
            const cols: any[] = [];

            // const entries = Object.entries(documents[0]);

            const entries2 = Object.keys(documents[0]);

            const columnNamesToDisplay = [
                // "uid",
                "name",
                "lastName",
                "idType",
                "id",
                "phone",
                "phone2",
                "email",
                "address",
                "description",
                "age",
                // "birthDate",
                // "country",
                // "state",
                // "city",
                // "password",
                // "confirmPassword",
                // "specialty",
                // "contract",
                "rol",
                // "campus",
                // "area",
                // "urlPhoto",
                // "timestamp",
                "isActive",
                // "isDeleted",
            ];

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
                if (columnNamesToDisplay.includes(val)) {
                    const columnsData = {
                        name: val.toUpperCase(),
                        // name: val[0].toUpperCase(),
                        selector: (row: any) => [row[val]],
                        // selector: (row: any) => [row[val[0]]],
                        sortable: true,
                        // maxWidth: "600px",
                        width:
                            val === "email" || val === "address"
                                ? "210px"
                                : undefined,
                    };
                    cols.push(columnsData);
                }
            });

            const currentData = {
                columns: cols,
                data: documents,
            };

            // console.log("cols", cols);
            // console.log("currentData", currentData);

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

    // useEffect(() => {
    //     getAllDocuments();
    // }, [getAllDocuments]);

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
