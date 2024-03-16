import { useSearchParams } from 'next/navigation';
import React from 'react';

const CouponViewHook = () => {
  const searchParams = useSearchParams();
  const uid = searchParams.get('uid');
  const urlSplit = window.location.href.split('/');
  const urlFirs = `${urlSplit[0]}//${urlSplit[2]}/`;
  console.log(urlFirs);

  return {};
};

export default CouponViewHook;
