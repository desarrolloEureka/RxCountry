"use client";
import {
    Button,
    Card,
    Col,
    Form,
    FormGroup,
    Nav,
    Row,
    Tab,
} from "react-bootstrap";
import Seo from "shared/layout-components/seo/seo";
import PageHeader from "../page-header";
import ProfileHook from "./hook/profileHook";

const Profile = () => {
    const { key, setKey } = ProfileHook();
    return (
        <>
            <Seo title="Profile" />
            <PageHeader title="Perfil" item="Dashboard" active_item="Perfil" />
            <div className="">
                <Tab.Container
                    id="center-tabs-example"
                    defaultActiveKey="first"
                    activeKey={key}
                    onSelect={setKey}
                >
                    <Row className="square">
                        <div>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="panel profile-cover tw-pb-24">
                                        <div className="profile-cover__img ">
                                            <img
                                                src="https://ui-avatars.com/api/?name=John+Doe?size=150?bold=true"
                                                alt="Profile Photo"
                                                width="150"
                                            />
                                            <h3 className="h3">John Doe</h3>
                                        </div>
                                        <div className="profile-cover__action bg-img"></div>
                                    </div>
                                    <div className="profile-tab tab-menu-heading">
                                        <Nav className=" main-nav-line p-3 tabs-menu profile-nav-line">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    About
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="editProfile">
                                                    Edit Profile
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    <Row className="row-sm">
                        <Col md={12} lg={12}>
                            <div className="card custom-card main-content-body-profile">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="main-content-body tab-pane p-sm-4 p-0 border-top-0">
                                            <div className="card-body border">
                                                <div className="mb-4 main-content-label">
                                                    Información Personal
                                                </div>
                                                <div className="mb-4 main-content-label">
                                                    Nombre
                                                </div>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Nombre de Usuario
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-center">
                                                            John Doe
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Nombre/s
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-center">
                                                            John
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className="row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Apellido/s
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-center">
                                                            Doe
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className="row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Sobre Nombre
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-center">
                                                            JohnDoe
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Cargo
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-center">
                                                            Admin
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <div className="mb-4 main-content-label">
                                                    Información de Contacto
                                                </div>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Email
                                                            <i>(requerido)</i>
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-center">
                                                            John@mail.com
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Teléfono
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-center">
                                                            +57 321-564-8778
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Dirección
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-center">
                                                            Calle 01 # 02-03
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <div className="mb-4 main-content-label">
                                                    Algo Sobre Ti
                                                </div>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-uppercase mb-3">
                                                            Biografía
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-justify">
                                                            John Doe es un
                                                            administrador
                                                            experimentado en
                                                            laboratorios de
                                                            radiografías orales,
                                                            con más de una
                                                            década de
                                                            experiencia. Es
                                                            reconocido por su
                                                            habilidad para
                                                            garantizar la
                                                            precisión y
                                                            seguridad en todas
                                                            las operaciones del
                                                            laboratorio, así
                                                            como por su enfoque
                                                            proactivo en la
                                                            actualización de
                                                            equipos y
                                                            tecnologías. Su
                                                            dedicación a la
                                                            excelencia en la
                                                            salud bucal lo
                                                            convierte en un
                                                            líder valorado en su
                                                            campo.
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <div className="tw-flex tw-justify-end tw-items-center">
                                                    <Button
                                                        onClick={() =>
                                                            setKey(
                                                                "editProfile",
                                                            )
                                                        }
                                                        className="btn ripple btn-main-primary btn-block mt-2"
                                                    >
                                                        Editar
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="editProfile">
                                        <div className="main-content-body tab-pane p-sm-4 p-0 border-top-0">
                                            <div className="card-body border">
                                                <div className="mb-4 main-content-label">
                                                    Información Personal
                                                </div>
                                                <Form className="form-horizontal">
                                                    <div className="mb-4 main-content-label">
                                                        Nombre
                                                    </div>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Nombre de
                                                                    Usuario
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="User Name"
                                                                    defaultValue="Mack Adamia"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Nombre/s
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="First Name"
                                                                    defaultValue="Mack Adamia"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className="row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Apellido/s
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Last Name"
                                                                    defaultValue="Mack Adamia"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className="row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Sobre Nombre
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Nick Name"
                                                                    defaultValue="Spruha"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Cargo
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Designation"
                                                                    defaultValue="Web Designer"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <div className="mb-4 main-content-label">
                                                        Información de Contacto
                                                    </div>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Email
                                                                    <i>
                                                                        (requerido)
                                                                    </i>
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Email"
                                                                    defaultValue="info@Spruha.in"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Teléfono
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="phone number"
                                                                    defaultValue="+245 354 654"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Dirección
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    aria-label="Comments"
                                                                    as="textarea"
                                                                    name="example-textarea-input"
                                                                    rows={2}
                                                                    placeholder="Address"
                                                                    defaultValue="San Francisco, CA"
                                                                ></Form.Control>
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <div className="mb-4 main-content-label">
                                                        Algo Sobre Ti
                                                    </div>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label>
                                                                    Biography
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    name="example-textarea-input"
                                                                    rows={4}
                                                                    as="textarea"
                                                                    aria-label="pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.."
                                                                    placeholder=""
                                                                ></Form.Control>
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <div className="tw-flex tw-justify-end tw-items-center">
                                                        <Button
                                                            // onClick={() =>
                                                            //     handleSignUp({
                                                            //         email,
                                                            //         password,
                                                            //     })
                                                            // }
                                                            className="btn ripple btn-main-primary btn-block mt-2"
                                                        >
                                                            Guardar
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
};
Profile.layout = "Contentlayout";

export default Profile;
