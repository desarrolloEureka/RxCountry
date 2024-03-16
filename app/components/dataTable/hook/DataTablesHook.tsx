'use client';
import { exportTableData } from '@/data/tables';
import { getAllCouponsQuery } from '@/queries/couponsQueries';
import { DataObject } from '@/types/coupons';
import { setDataTable } from '@/types/tables';
import { useCallback, useEffect, useState } from 'react';

const DataTablesHook = () => {
  const [handleShowCsv, setHandleShowCsv] = useState(false);
  const [handleShowPdf, setHandleShowPdf] = useState(false);
  const [handleShowSales, setHandleShowSales] = useState(false);
  const [getCoupons, setGetCoupons] = useState<DataObject[]>();
  const [dataTable, setDataTable] = useState<setDataTable>();
  const { columns } = exportTableData;

  const getAllCoupons = useCallback(async () => {
    if (handleShowCsv || columns || handleShowPdf || handleShowSales) {
      const coupons = await getAllCouponsQuery();
      const currentData = {
        columns: columns,
        data: coupons,
      };
      setDataTable(currentData);
      coupons && setGetCoupons(coupons);
    }
  }, [columns, handleShowCsv, handleShowPdf, handleShowSales]);

  const onUploadDataModalCsv = () => setHandleShowCsv(true);

  const onUploadDataModalPdf = () => setHandleShowPdf(true);

  const onSalesModal = () => setHandleShowSales(true);

  useEffect(() => {
    getAllCoupons();
  }, [getAllCoupons]);

  return {
    columns,
    data: getCoupons,
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
