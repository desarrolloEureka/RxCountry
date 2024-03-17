import { Tab } from 'react-bootstrap';
import BannerMenu from '../bannerMenu/BannerMenu';
import HomeDash from '../dashBoard/homeDash/HomeDash';
import DataTableComponent from '../dataTable/DataTableComponent';
import HeaderContent from './components/headerContent/HeaderContent';

const Header = ({ hamburger }: { hamburger?: boolean }) => {
  return (
    <Tab.Container defaultActiveKey='first'>
      <HeaderContent />
      <Tab.Content>
        <Tab.Pane
          className='tab-pane show  text-muted'
          id='home1'
          role='tabpanel'
          eventKey='first'
        >
          <HomeDash />
        </Tab.Pane>
        <Tab.Pane
          className='tab-pane text-muted'
          id='about1'
          role='tabpanel'
          eventKey='second'
        >
          <BannerMenu
            seoTitle='Home'
            title='Home'
            item='Dashboard'
            activeItem='Usuario'
          />
          <DataTableComponent
            componentTitle='Tabla del Listado de cupones.'
            componentDescription='En esta tabla se encuentran listados todos los cupones para su administración.'
            tableTitle='Cupones registrados'
          />
        </Tab.Pane>
        <Tab.Pane
          className='tab-pane text-muted'
          id='service1'
          role='tabpanel'
          eventKey='third'
        >
          There are many variations of passages of <b>Lorem Ipsum available</b>,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which {"don't"} look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there {"isn't"} anything.
        </Tab.Pane>
        <Tab.Pane
          className='tab-pane text-muted'
          id='license1'
          role='tabpanel'
          eventKey='fourth'
        >
          It is a long established fact that a reader will be distracted by the
          <b>
            <i>Readable content</i>
          </b>{' '}
          of a page when looking at its layout. The point of using Lorem Ipsum
          is that it has a more-or-less normal distribution of letters, as
          opposed to using {'Content here, content here'}, making it look like
          readable English.
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default Header;
