import HeaderHook from "@/components/header/hook/HeaderHook";
import { main_logo_dark } from "@/globals/images";
import dynamic from "next/dynamic";
import { Container, Dropdown, Nav, NavDropdown } from "react-bootstrap";

const HeadDropDown = dynamic(
    () => import("@/components/header/headDropDown/HeadDropDown"),
    {
        ssr: false,
    },
);

const HeaderContent = ({ hamburger }: { hamburger?: boolean }) => {
    const { logOut, main_logo, data } = HeaderHook();

    return (
        <header className="app-header ">
            <img
                src={main_logo_dark.src}
                className="tw-absolute tw-left-10 tw-w-48"
                alt="img"
            />
            <Container fluid className="main-header-container">
                <div className="header-content-left">
                    {hamburger && (
                        <>
                            <div className="header-element">
                                <a
                                    aria-label="Hide Sidebar"
                                    className="side menu-toggle header-link animated-arrow hor-toggle horizontal-nav toggle"
                                    data-bs-toggle="sidebar"
                                    // onClick={() => headerToggleButton()}
                                >
                                    <span></span>
                                </a>
                            </div>
                            <div className="header-element"></div>
                        </>
                    )}
                </div>
                <div className="header-content-right">
                    <div className="d-flex order-lg-2 align-items-center ms-auto">
                        <Nav
                            className="nav nav-tabs border-0"
                            id="myTab"
                            role="tablist"
                            defaultActiveKey="first"
                        >
                            <Nav.Item>
                                <Nav.Link href="#home1" eventKey="first">
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <NavDropdown
                                title="Gestión de Usuarios"
                                id="nav-dropdown"
                                className="nav-item dropdown"
                            >
                                <NavDropdown.Item
                                    href="#functionary"
                                    eventKey="second"
                                >
                                    Funcionarios
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="#patients"
                                    eventKey="third"
                                >
                                    Pacientes
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="#professionals"
                                    eventKey="fourth"
                                >
                                    Profesionales
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link href="#campus" eventKey="fifth">
                                    Sedes
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#specialties" eventKey="sixth">
                                    Especialidades
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="#diagnostician"
                                    eventKey="seventh"
                                >
                                    Diagnosticadores
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#agreements" eventKey="eighth">
                                    Convenios
                                </Nav.Link>
                            </Nav.Item>

                            <Dropdown>
                                <Dropdown.Toggle
                                    id="mainHeaderProfile"
                                    aria-expanded="false"
                                    className="nav-link show"
                                    variant=""
                                    role="button"
                                >
                                    <i className="fe fe-user header-link-icon"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    className="main-header-dropdown dropdown-menu pt-0 overflow-hidden dropdown-menu-end"
                                    aria-labelledby="mainHeaderProfile"
                                >
                                    <div className="header-navheading border-bottom">
                                        <div className="tw-pb-5">
                                            <img
                                                src="https://ui-avatars.com/api/?name=John+Doe"
                                                alt="img"
                                                width="32"
                                                height="32"
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <h6 className="main-notification-title">
                                            {data?.displayName
                                                ? data?.displayName
                                                : "John Doe"}
                                        </h6>
                                        <p className="main-notification-text mb-0">
                                            {data?.rol
                                                ? data?.rol
                                                : "Super Admin"}
                                        </p>
                                    </div>
                                    <Dropdown.Item
                                        href="#profile"
                                        eventKey="profile"
                                    >
                                        <i className="fe fe-user fs-16 align-middle me-2"></i>
                                        Perfil
                                    </Dropdown.Item>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <Dropdown.Item onClick={logOut}>
                                        <i className="fe fe-power fs-16 align-middle me-2"></i>
                                        Cerrar sesión
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <HeadDropDown logOut={logOut} notifications dark />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default HeaderContent;
