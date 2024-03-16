'use client';
import HomeHook from '@/components/home/hook/HomeHook';
import Spinner from '@/components/spinner/Spinner';
import { Container } from 'react-bootstrap';
import DataTableComponent from '../dataTable/DataTableComponent';
import BannerMenu from '../bannerMenu/BannerMenu';
import Header from '../header/Header';

const Home = () => {
  const { isLoading } = HomeHook();

  return isLoading ? (
    <Spinner />
  ) : (
    <Container fluid className='tw-px-10 tw-mt-14'>
      <Container fluid className='tw-px-20'>
        <Header />
      </Container>
    </Container>
  );
};

export default Home;
