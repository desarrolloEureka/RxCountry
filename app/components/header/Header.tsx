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
            seoTitle='Usuarios'
            title='Usiarios'
            item='Dashboard'
            activeItem='Registro de usuarios'
          />
          <DataTableComponent
            componentTitle='Tabla del Listado de usuarios.'
            componentDescription='En esta tabla se encuentran listados todos los usuarios para su administración.'
            tableTitle='Usuarios registrados'
            reference='users'
          />
        </Tab.Pane>
        <Tab.Pane
          className='tab-pane text-muted'
          id='service1'
          role='tabpanel'
          eventKey='third'
        >
          <BannerMenu
            seoTitle='Clientes'
            title='Clientes'
            item='Dashboard'
            activeItem='Registro clientes'
          />
          <DataTableComponent
            componentTitle='Tabla del Listado de clientes.'
            componentDescription='En esta tabla se encuentran listados todos los clientes para su administración.'
            tableTitle='Clientes registrados'
            reference='clients'
          />
        </Tab.Pane>
        <Tab.Pane
          className='tab-pane text-muted'
          id='license1'
          role='tabpanel'
          eventKey='fourth'
        >
          <BannerMenu
            seoTitle='Medicos'
            title='Medicos'
            item='Dashboard'
            activeItem='Registro medicos'
          />
          <DataTableComponent
            componentTitle='Tabla del Listado de medicos.'
            componentDescription='En esta tabla se encuentran listados todos los medicos para su administración.'
            tableTitle='Medicos registrados'
            reference='doctors'
          />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default Header;
