import {
    getAllDocumentsFb,
    getDocumentsByIdFb,
    saveDocumentsFb,
    saveOneDocumentFb,
    updateDocumentsByIdFb,
} from "@/firebase/Documents";
import { uploadFiles } from "@/firebase/files";
import {
    DataObject,
    DocumentsById,
    ErrorData,
    ErrorDataForm,
} from "@/types/documents";
import {
    saveFilesDocumentsProps,
    saveFilesDocumentsQueryProps,
} from "@/types/files";

export const saveDocumentsQuery = async ({
    data,
    reference,
}: {
    data: any[];
    reference: string;
}) => {
    let dataError: ErrorData[] = [];
    for (const record of data) {
        const queryResult = await saveDocumentsFb(record, reference);
        if (queryResult) {
            dataError.push({ success: true, code: record.code });
        } else {
            dataError.push({ success: false, code: record.code });
        }
    }
    console.log("Data", data);
    console.log("Reference", reference);
    return dataError;
};

export const saveFilesDocumentsQuery = async ({
    code,
    record,
    data,
}: saveFilesDocumentsQueryProps) => {
    let dataError: ErrorData[] = [];
    const queryResult = await uploadFiles({
        folder: data.supplier.toLowerCase(),
        fileName: code,
        file: record,
    });
    if (queryResult) {
        dataError.push({ success: true, code });
    } else {
        dataError.push({ success: false, code });
    }
    return dataError;
};

export const saveFilesDocuments = async ({
    urlName,
    record,
    data,
}: saveFilesDocumentsProps) => {
    let dataError: ErrorDataForm[] = [];
    const queryResult = await uploadFiles({
        folder: data.supplier.toLowerCase(),
        fileName: urlName,
        file: record,
    });
    if (queryResult) {
        dataError.push({ success: true, urlName });
    } else {
        dataError.push({ success: false, urlName });
    }
    return dataError;
};

export const getAllDocumentsQuery = async (ref: string) => {
    const documents: any[] = [];
    const querySnapshot = await getAllDocumentsFb(ref);
    if (!querySnapshot.empty) {
        querySnapshot.forEach((doc: any) => {
            const dataResult = doc.data();
            documents.push(dataResult);
        });
    }
    return documents;
};

export const getDocumentsByIdQuery = async (
    id: string,
    date: number,
    saleLimit: number | undefined,
    reference: string,
) => {
    const dataResultArray: { id: string; coupon: DataObject }[] = [];
    const querySnapshot = await getDocumentsByIdFb(
        id,
        date,
        saleLimit,
        reference,
    );

    if (querySnapshot) {
        querySnapshot.forEach((doc: any) => {
            const dataResult = doc.data() as DataObject;
            dataResultArray.push({
                id: doc.id,
                coupon: dataResult,
            } as DocumentsById);
        });
    }

    return dataResultArray;
};

export const saveDataDocumentsQuery = async ({
    data,
    reference,
}: {
    data: any;
    reference: string;
}) => {
    const queryResult = await saveOneDocumentFb(data, reference);
    console.log("Nuevo");
    // return queryResult;
    return;
};

export const saveEditDataDocumentsQuery = async ({
    id,
    data,
    reference,
}: {
    id: string;
    data: any;
    reference: string;
}) => {
    const queryResult = await updateDocumentsByIdFb(id, data, reference);
    console.log("Editado");
    // return queryResult;
    return;
};
