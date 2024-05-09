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

    const formatearFecha = (fechaISO: string): string => {
        // Crear un objeto Date con la fecha
        const fecha = new Date(fechaISO);

        // Obtener los componentes de la fecha
        const dia: number = fecha.getDate();
        const mes: number = fecha.getMonth() + 1; // Los meses van de 0 a 11, por lo que se suma 1
        const año: number = fecha.getFullYear();
        const hora: number = fecha.getHours();
        const minutos: number = fecha.getMinutes();
        const segundos: number = fecha.getSeconds();

        // Formatear la fecha según el formato deseado (por ejemplo, DD/MM/YYYY HH:mm:ss)
        const fechaFormateada: string = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;

        return fechaFormateada;
    };

    const getAllDocuments = useCallback(async () => {
        const documents = await getAllDocumentsQuery(reference);

        if (documents.length > 0) {
            const cols: any[] = [];

            const entries = Object.keys(documents[0]);

            const columnNamesToDisplay: ColumnNamesToDisplay = {
                // uid:"uid",
                timestamp: "Fecha Registro",
                idType: "Tipo",
                id: "Documento",
                name: "Nombre",
                lastName: "Apellido",
                email: "Correo",
                phone: "Teléfono",
                phone2: "Teléfono fijo",
                address: "Dirección",
                description: "Descripción",
                age: "Edad",
                discount: "Descuento(%)",
                // "birthDate",
                // "country",
                // "state",
                city: "Ciudad",
                // "password",
                // "confirmPassword",
                specialty: "Especialidad",
                contract: "Convenio",
                // rol: "Rol",
                campus: "Sede",
                // "area",
                // urlPhoto: "urlPhoto",
                isActive: "Estado",
                // "isDeleted",
            };

            const omittedColumns = Object.keys(columnNamesToDisplay);

            entries.filter((item) => omittedColumns.includes(item));

            entries.sort((a, b): number => {
                return omittedColumns.indexOf(a) - omittedColumns.indexOf(b);
            });

            // entries.forEach((val, key) => {
            entries.forEach((val) => {
                const columnsData = {
                    name: columnNamesToDisplay[val],
                    selector: (row: any) =>
                        val === "isActive" ? (
                            <CustomTitle row={row} />
                        ) : val === "timestamp" ? (
                            formatearFecha(row[val])
                        ) : (
                            [row[val]]
                        ),
                    sortable: true,
                    // grow: val === "email" || val === "address" ? 2 : 1,
                    width:
                        val === "email" ||
                        val === "address" ||
                        val === "timestamp"
                            ? "240px"
                            : val === "id" || val === "phone" || val === "phone2"
                            ? "150px"
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
