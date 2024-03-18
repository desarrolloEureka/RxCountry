'use client';
import { dataSalesObject } from '@/data/salesData';
import {
  getDocumentsByIdQuery,
  saveSoldDocumentsQuery,
} from '@/queries/documentsQueries';
import { getAllCustomersQuery } from '@/queries/customersQueries';
import { getAllSupplierQuery } from '@/queries/suppliersQueries';
import { DocumentsById } from '@/types/documents';
import { CustomersSelector } from '@/types/customers';
import { ModalParamsSales } from '@/types/modals';
import { SuppliersSelector } from '@/types/suppliers';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
let count = 1;

const SalesHook = ({
  handleShowSales,
  setHandleShowSales,
  reference,
}: ModalParamsSales) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(dataSalesObject);
  const [customers, setCustomers] = useState<CustomersSelector[]>();
  const [suppliers, setSuppliers] = useState<SuppliersSelector[]>();
  const [dateRange, setDateRange] = useState<number>();
  const [nextDate, setNextDate] = useState<string>();
  const [rangeDays, setRangeDays] = useState(100);
  const [stepsDays, setStepsDays] = useState(10);
  const [saleLimit, setSaleLimit] = useState<number | undefined>();
  const [dataDocumentsToSel, setDataDocumentsToSel] =
    useState<DocumentsById[]>();
  const [errorValid, setErrorValid] = useState('');
  // const currentDate = moment().format('DD-MM-YYYY');
  const currentDate = moment().valueOf();

  const handleValidForm = async () => {
    // console.log('dateRange', dateRange);
    // console.log('nextDate', nextDate);
    // console.log('data.supplier', data.supplier);

    if (dateRange && nextDate && data.supplier) {
      const nextDateFormat = moment(nextDate).format('YYYY-MM-DD');
      const nextDateIso = moment(nextDateFormat).valueOf();
      const documents = await getDocumentsByIdQuery(
        data.supplier_code,
        nextDateIso,
        saleLimit,
        reference
      );

      documents.map((val) => {
        val.coupon.sold = data.sold;
        val.coupon.date_sold = currentDate;
        val.coupon.sold_value = data.sold_value;
        val.coupon.customer = data.customer;
      });
      setErrorValid('');
      setDataDocumentsToSel(documents);
    } else {
      !dateRange && setErrorValid('El rango es obligatorio');
      data.supplier == '' && setErrorValid('El proveedor es obligatorio');
    }
  };

  const handleSendForm = () => {
    setIsLoading(true);
    if (
      dateRange &&
      nextDate &&
      data.supplier != '' &&
      data.customer != '' &&
      data.sold_value != ''
    ) {
      setErrorValid('');
      const urlSplit = window.location.href.split('/');
      const urlFirs = `${urlSplit[0]}//${urlSplit[2]}`;
      console.log(urlFirs);
      dataDocumentsToSel?.forEach(async (val) => {
        val.coupon.sold = data.sold;
        val.coupon.date_sold = currentDate;
        val.coupon.sold_value = data.sold_value;
        val.coupon.customer = data.customer;
        val.coupon.url = `${urlFirs}/components/couponView/?id=${val.id}`;

        await saveSoldDocumentsQuery({
          id: val.id,
          data: val.coupon,
          reference,
        });
        if (count === dataDocumentsToSel?.length) {
          handleClose();
        }
        count++;
      });
    } else {
      !data.sold_value && setErrorValid('El valor es obligatorio');
      !data.customer && setErrorValid('El cliente es obligatorio');
      !dateRange && setErrorValid('El rango es obligatorio');
      data.supplier == '' && setErrorValid('El proveedor es obligatorio');
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const changeHandlerFilters = (e: any) => {
    if (e.target.name === 'days') {
      setRangeDays(e.target.id);
    } else {
      setStepsDays(e.target.id);
    }
  };

  const handleClose = () => {
    setShow(false);
    setHandleShowSales(false);
    setErrorValid('');
    setDataDocumentsToSel(undefined);
    setNextDate(undefined);
    setData(dataSalesObject);
    setDateRange(undefined);
    setIsLoading(false);
  };

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const limitHandler = (e: any) => {
    setSaleLimit(e.target.value);
  };

  const selectSupplierChangeHandler = (e: any) => {
    e && setData({ ...data, ['supplier_code']: e.id, ['supplier']: e.value });
  };

  const selectCustomerChangeHandler = (e: any) => {
    e && setData({ ...data, ['customer']: e.value });
  };

  const marksHandler = (e: any) => {
    const calcNextDate =
      e[0] > 0
        ? moment().add(e[0], 'days').format('YYYY-MM-DD')
        : moment().format('YYYY-MM-DD');
    const dateFormat = moment(calcNextDate).format('YYYY-MM-DD');
    setNextDate(dateFormat);
    setDateRange(e[0]);
  };

  const dayRangesHandler = (e: any) => {
    const calcNextDate = moment()
      .add(e.target.value, 'days')
      .format('YYYY-MM-DD');
    const dateFormat = moment(calcNextDate).format('YYYY-MM-DD');
    e.target.value > 0 ? setNextDate(dateFormat) : setNextDate(undefined);
    setDateRange(e.target.value);
  };

  const getAllCustomers = useCallback(async () => {
    if (handleShowSales) {
      const customersResult = await getAllCustomersQuery();
      customersResult && setCustomers(customersResult);
    }
  }, [handleShowSales]);

  const getAllSuppliers = useCallback(async () => {
    if (handleShowSales) {
      const suppliersResult = await getAllSupplierQuery();
      suppliersResult && setSuppliers(suppliersResult);
    }
  }, [handleShowSales]);

  useEffect(() => {
    getAllCustomers();
  }, [getAllCustomers]);

  useEffect(() => {
    getAllSuppliers();
  }, [getAllSuppliers]);

  useEffect(() => {
    handleShowSales && setShow(true);
  }, [handleShowSales]);

  // console.log('data', data);

  return {
    changeHandler,
    handleSendForm,
    handleClose,
    selectSupplierChangeHandler,
    selectCustomerChangeHandler,
    changeHandlerFilters,
    marksHandler,
    dayRangesHandler,
    handleValidForm,
    limitHandler,
    show,
    isLoading,
    customers,
    suppliers,
    nextDate,
    rangeDays,
    stepsDays,
    dataDocumentsToSel,
    errorValid,
  };
};

export default SalesHook;
