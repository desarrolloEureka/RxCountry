import { AllRefPropsFirebase, RefPropsFirebase } from '@/types/userFirebase';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from 'shared/firebase/firebase';

const allRef = ({ ref }: AllRefPropsFirebase) => collection(db, ref);
const docRef = ({ ref, collection }: RefPropsFirebase) =>
  doc(db, ref, collection);

export const getAllCouponsFb = async () =>
  await getDocs(allRef({ ref: 'coupons' }));

export const getCouponsByIdFb = async (
  id: string,
  date: number,
  saleLimit: number | undefined
) => {
  if (saleLimit) {
    return getDocs(
      query(
        collection(db, 'coupons'),
        where('supplier_code', '==', id),
        where('date_end', '<=', date),
        where('is_active', '==', true),
        where('redeemed', '==', false),
        where('sold', '==', false),
        limit(saleLimit)
      )
    );
  } else {
    return getDocs(
      query(
        collection(db, 'coupons'),
        where('supplier_code', '==', id),
        where('date_end', '<=', date),
        where('is_active', '==', true),
        where('redeemed', '==', false),
        where('sold', '==', false)
      )
    );
  }
};
// await getDocs(allRef({ ref: 'coupons' }));

export const saveCouponsFb = async (data: any) => {
  const docRef = await addDoc(allRef({ ref: 'coupons' }), data);
  return docRef;
};

export const updateCouponsByCsvByIdFb = async (id: string, newData: any) => {
  const userDocRef = doc(db, 'coupons', id);
  return await updateDoc(userDocRef, newData);
};

export const updateCouponsByIdFb = async (id: string, newData: any) => {
  const document = docRef({ ref: 'coupons', collection: id });
  return await updateDoc(document, newData);
};
