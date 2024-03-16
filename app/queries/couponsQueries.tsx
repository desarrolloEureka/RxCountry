import { CouponsById, DataObject, ErrorData } from '@/types/coupons';
import {
  getAllCouponsFb,
  getCouponsByIdFb,
  saveCouponsFb,
  updateCouponsByIdFb,
} from '@/firebase/coupons';
import { uploadFiles } from '@/firebase/files';
import { saveFilesCouponsQueryProps } from '@/types/files';

export const saveCouponsQuery = async ({ data }: { data: DataObject[] }) => {
  let dataError: ErrorData[] = [];
  for (const record of data) {
    const queryResult = await saveCouponsFb(record);
    if (queryResult) {
      dataError.push({ success: true, code: record.code });
    } else {
      dataError.push({ success: false, code: record.code });
    }
  }
  return dataError;
};

export const saveFilesCouponsQuery = async ({
  code,
  record,
  data,
}: saveFilesCouponsQueryProps) => {
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

export const getAllCouponsQuery = async () => {
  const coupons: DataObject[] = [];
  const querySnapshot = await getAllCouponsFb();
  if (!querySnapshot.empty) {
    querySnapshot.forEach((doc: any) => {
      const dataResult = doc.data() as DataObject;
      coupons.push(dataResult);
    });
  }
  return coupons;
};

export const getCouponsByIdQuery = async (
  id: string,
  date: number,
  saleLimit: number | undefined
) => {
  // const coupons: DataObject[] = [];
  const dataResultArray: { id: string; coupon: DataObject }[] = [];
  const querySnapshot = await getCouponsByIdFb(id, date, saleLimit);
  if (querySnapshot) {
    querySnapshot.forEach((doc: any) => {
      const dataResult = doc.data() as DataObject;
      dataResultArray.push({ id: doc.id, coupon: dataResult } as CouponsById);
    });
  }
  return dataResultArray;
};

export const saveSoldCouponsQuery = async ({
  data,
  id,
}: {
  id: string;
  data: DataObject;
}) => {
  let dataError: ErrorData[] = [];
  const queryResult = await updateCouponsByIdFb(id, data);
  console.log('queryResult', queryResult);

  // if (queryResult) {
  //   dataError.push({ success: true, code: record.code });
  // } else {
  //   dataError.push({ success: false, code: record.code });
  // }

  return queryResult;
};
