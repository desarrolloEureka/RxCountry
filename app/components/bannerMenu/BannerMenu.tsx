import React from 'react';
import PageHeader from '../page-header';
import Seo from 'shared/layout-components/seo/seo';

export interface BannerMenuParams {
  seoTitle: string;
  title: string;
  item: string;
  activeItem: string;
}

const BannerMenu = (params: BannerMenuParams) => {
  return (
    <>
      <Seo title={params.seoTitle} />
      <PageHeader
        title={params.title}
        item={params.item}
        active_item={params.activeItem}
      />
    </>
  );
};

export default BannerMenu;
