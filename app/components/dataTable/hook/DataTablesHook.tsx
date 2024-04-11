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
        // console.log("documents", documents);

        if (documents.length > 0) {
            const cols: any[] = [];
            const entries = Object.entries(documents[0]);

            entries.sort(function (a, b) {
                if (a[0] > b[0]) {
                    return 1;
                }
                if (a[0] < b[0]) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });

            entries.forEach((val, key) => {
                const columnsData = {
                    name: val[0].toUpperCase(),
                    selector: (row: any) => [row[val[0]]],
                    sortable: true,
                };
                cols.push(columnsData);
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
    };

    useEffect(() => {
        getAllDocuments();
    }, [getAllDocuments]);

    useEffect(() => {
        if (!handleShowMainForm) {
            getAllDocuments();
        }
    }, [getAllDocuments, handleShowMainForm]);

    useEffect(() => {
        if (!handleShowMainFormEdit) {
            getAllDocuments();
        }
    }, [getAllDocuments, handleShowMainFormEdit]);

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
