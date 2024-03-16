import dynamic from 'next/dynamic';
import { Container, Nav, Tab } from 'react-bootstrap';
import HeaderHook from './hook/HeaderHook';
import BannerMenu from '../bannerMenu/BannerMenu';
import DataTableComponent from '../dataTable/DataTableComponent';

const HeadDropDown = dynamic(() => import('./headDropDown/HeadDropDown'), {
  ssr: false,
});

const Header = ({ hamburger }: { hamburger?: boolean }) => {
  const { logOut } = HeaderHook();
  return (
    <Tab.Container defaultActiveKey='first'>
      <header className='app-header'>
        <Container fluid className='main-header-container'>
          <div className='header-content-left'>
            {hamburger && (
              <>
                <div className='header-element'>
                  <a
                    aria-label='Hide Sidebar'
                    className='sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle'
                    data-bs-toggle='sidebar'
                    // onClick={() => headerToggleButton()}
                  >
                    <span></span>
                  </a>
                </div>
                <div className='header-element'></div>
              </>
            )}
          </div>
          <div className='header-content-right'>
            <div className='d-flex order-lg-2 align-items-center ms-auto'>
              <Nav
                className='nav nav-tabs mb-3 border-0'
                id='myTab'
                role='tablist'
                defaultActiveKey='first'
              >
                <Nav.Item>
                  <Nav.Link href='#home1' eventKey='first'>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#about1' eventKey='second'>
                    Usuarios
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#service1' eventKey='third'>
                    Clientes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#license1' eventKey='fourth'>
                    Medicos
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <HeadDropDown logOut={logOut} notifications />
            </div>
          </div>
        </Container>
      </header>
      <Tab.Content>
        <Tab.Pane
          className='tab-pane show  text-muted'
          id='home1'
          role='tabpanel'
          eventKey='first'
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
          id='about1'
          role='tabpanel'
          eventKey='second'
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC,{' '}
          <b>Making it over 2000 years old</b>. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur.
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
