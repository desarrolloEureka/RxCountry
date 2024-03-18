import { DocumentsById, DataObject, ErrorData } from '@/types/documents';
import {
  getAllDocumentsFb,
  getDocumentsByIdFb,
  saveDocumentsFb,
  updateDocumentsByIdFb,
} from '@/firebase/Documents';
import { uploadFiles } from '@/firebase/files';
import { saveFilesDocumentsQueryProps } from '@/types/files';

export const saveDocumentsQuery = async ({
  data,
  reference,
}: {
  data: DataObject[];
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

export const getAllDocumentsQuery = async () => {
  const documents: DataObject[] = [];
  const querySnapshot = await getAllDocumentsFb();
  if (!querySnapshot.empty) {
    querySnapshot.forEach((doc: any) => {
      const dataResult = doc.data() as DataObject;
      documents.push(dataResult);
    });
  }
  return documents;
};

export const getDocumentsByIdQuery = async (
  id: string,
  date: number,
  saleLimit: number | undefined,
  reference: string
) => {
  const dataResultArray: { id: string; coupon: DataObject }[] = [];
  const querySnapshot = await getDocumentsByIdFb(
    id,
    date,
    saleLimit,
    reference
  );
  if (querySnapshot) {
    querySnapshot.forEach((doc: any) => {
      const dataResult = doc.data() as DataObject;
      dataResultArray.push({ id: doc.id, coupon: dataResult } as DocumentsById);
    });
  }
  return dataResultArray;
};

export const saveSoldDocumentsQuery = async ({
  data,
  id,
  reference,
}: {
  id: string;
  data: DataObject;
  reference: string;
}) => {
  let dataError: ErrorData[] = [];
  const queryResult = await updateDocumentsByIdFb(id, data, reference);
  console.log('queryResult', queryResult);

  // if (queryResult) {
  //   dataError.push({ success: true, code: record.code });
  // } else {
  //   dataError.push({ success: false, code: record.code });
  // }

  return queryResult;
};
