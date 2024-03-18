'use client';
import { exportTableData, basicTableData } from '@/data/tables';
import { getAllDocumentsQuery } from '@/queries/documentsQueries';
import { DataObject } from '@/types/documents';
import { setDataTable } from '@/types/tables';
import { useCallback, useEffect, useState } from 'react';

const DataTablesHook = () => {
  const [handleShowCsv, setHandleShowCsv] = useState(false);
  const [handleShowPdf, setHandleShowPdf] = useState(false);
  const [handleShowSales, setHandleShowSales] = useState(false);
  const [getDocuments, setGetDocuments] = useState<DataObject[] | any[]>();
  const [dataTable, setDataTable] = useState<setDataTable | any>();
  // const { columns } = exportTableData;
  const { columns, data } = basicTableData;

  const getAllDocuments = useCallback(async () => {
    if (handleShowCsv || columns || handleShowPdf || handleShowSales) {
      const documents = await getAllDocumentsQuery();
      console.log('documents', documents.length);

      const currentData = {
        columns: columns,
        data: documents.length > 0 ? documents : data,
      };
      setDataTable(currentData);
      documents && setGetDocuments(currentData.data);
    }
  }, [columns, data, handleShowCsv, handleShowPdf, handleShowSales]);

  const onUploadDataModalCsv = () => setHandleShowCsv(true);

  const onUploadDataModalPdf = () => setHandleShowPdf(true);

  const onSalesModal = () => setHandleShowSales(true);

  useEffect(() => {
    getAllDocuments();
  }, [getAllDocuments]);

  return {
    columns,
    data: getDocuments,
    handleShowCsv,
    handleShowPdf,
    handleShowSales,
    setHandleShowCsv,
    setHandleShowPdf,
    setHandleShowSales,
    onUploadDataModalCsv,
    onUploadDataModalPdf,
    onSalesModal,
    dataTable,
  };
};

export default DataTablesHook;
