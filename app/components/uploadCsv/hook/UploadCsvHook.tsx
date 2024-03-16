'use client';
import { useEffect, useState } from 'react';
import { useCSVReader } from 'react-papaparse';
import { DEFAULT_REMOVE_HOVER_COLOR } from '../styles/stylesUploadCsv';
import { saveCouponsQuery } from '@/queries/couponsQueries';
import { dataObject } from '@/data/couponsData';
import { DataObject, ErrorData } from '@/types/coupons';
import { ModalParamsCsv } from '@/types/modals';
import moment from 'moment';

const UploadDocumentHook = ({
  handleShowCsv,
  setHandleShowCsv,
}: ModalParamsCsv) => {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [errorDataUpload, setErrorDataUpload] = useState<ErrorData[]>();
  const [show, setShow] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(
    DEFAULT_REMOVE_HOVER_COLOR
  );

  const handleClose = () => {
    setShow(false);
    setHandleShowCsv(false);
  };

  const handleUploadAccepted = (results: { data: any }) => {
    const data: DataObject[] = [];
    results.data.forEach((val: string, key: number) => {
      const dateStart = moment(val[2]).valueOf();
      const dateEnd = moment(val[3]).valueOf();

      const currentDataObject = { ...dataObject };
      currentDataObject.supplier_code = val[0];
      currentDataObject.code = val[1];
      currentDataObject.date_start = dateStart;
      currentDataObject.date_end = dateEnd;
      currentDataObject.supplier = val[4];
      currentDataObject.buy_value = val[5];
      currentDataObject.title = val[6];
      currentDataObject.description = val[7];

      data.push(currentDataObject);
    });

    saveCouponsQuery({ data })
      .then((result: ErrorData[]) => {
        setErrorDataUpload(result);
        const errorFound = result.find((value) => !value.success);
        !errorFound && handleClose();
      })
      .catch((error) => setErrorDataUpload(error));

    setZoneHover(false);
  };

  useEffect(() => {
    handleShowCsv && setShow(true);
  }, [handleShowCsv]);

  return {
    CSVReader,
    zoneHover,
    removeHoverColor,
    setRemoveHoverColor,
    setZoneHover,
    handleUploadAccepted,
    errorDataUpload,
    show,
    handleClose,
  };
};

export default UploadDocumentHook;
