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
    const {
        data,
        isDisabled,
        key,
        setKey,
        changeHandler,
        handleUpdateProfile,
    } = ProfileHook();

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
                                                src={`https://ui-avatars.com/api/?name=${data?.displayName}?size=150?bold=true`}
                                                alt="Profile Photo"
                                                width="150"
                                            />
                                            <h3 className="h3">
                                                {data?.displayName
                                                    ? data?.displayName
                                                    : "John Doe"}
                                            </h3>
                                        </div>
                                        <div className="profile-cover__action bg-img"></div>
                                    </div>
                                    <div className="profile-tab tab-menu-heading">
                                        <Nav className=" main-nav-line p-3 tabs-menu profile-nav-line">
                                            <Nav.Item>
                                                <Nav.Link
                                                    className={`hover:tw-text-[#e9a225] focus:tw-text-[#E9A225] active:tw-text-[#E9A225] ${
                                                        key === "first" &&
                                                        "tw-text-[#E9A225]"
                                                    }`}
                                                    eventKey="first"
                                                >
                                                    Información
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link
                                                    className={`hover:tw-text-[#E9A225] focus:tw-text-[#E9A225] active:tw-text-[#E9A225] ${
                                                        key !== "first" &&
                                                        "tw-text-[#E9A225]"
                                                    }`}
                                                    eventKey="editProfile"
                                                >
                                                    Editar perfil
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
                                                <div className="mb-4 tw-font-bold tw-text-xl text-capitalize tw-text-[#E9A225]">
                                                    Información Personal
                                                </div>
                                                <div className="mb-4 tw-text-xl text-capitalize tw-text-[#E9A225]">
                                                    Nombre
                                                </div>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Nombre de Usuario
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5">
                                                            {data?.displayName}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Nombre/s
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5">
                                                            {data?.name}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className="row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Apellido/s
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 ">
                                                            {data?.lastName}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Rol
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5">
                                                            {data?.rol}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className="row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Cargo
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5">
                                                            {data?.position}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <div className="mb-4 tw-font-bold tw-text-xl text-capitalize tw-text-[#E9A225]">
                                                    Información de Contacto
                                                </div>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Email
                                                            <i>(requerido)</i>
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5">
                                                            {data?.email}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Teléfono
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 ">
                                                            {data?.phone}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Dirección
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 ">
                                                            {data?.address}
                                                        </p>
                                                    </Col>
                                                </Row>
                                                <div className="mb-4 tw-font-bold tw-text-xl text-capitalize tw-text-[#E9A225]">
                                                    Algo Sobre Ti
                                                </div>
                                                <Row className=" row-sm">
                                                    <Col md={3}>
                                                        <h4 className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                            Biografía
                                                        </h4>
                                                    </Col>
                                                    <Col md={9}>
                                                        <p className="m-b-5 tw-text-justify">
                                                            {data?.aboutMe}
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
                                                <div className="mb-4 tw-font-bold tw-text-xl tw-text-[#E9A225]">
                                                    Información Personal
                                                </div>
                                                <Form className="form-horizontal">
                                                    <div className="mb-4 tw-text-xl tw-text-[#E9A225]">
                                                        Nombre
                                                    </div>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Nombre de
                                                                    Usuario
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    value={
                                                                        data?.displayName
                                                                    }
                                                                    type="text"
                                                                    name="displayName"
                                                                    placeholder="User Name"
                                                                    // defaultValue="Mack Adamia"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Nombre/s
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    value={
                                                                        data?.name
                                                                    }
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="First Name"
                                                                    // defaultValue="Mack Adamia"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className="row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Apellido/s
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    value={
                                                                        data?.lastName
                                                                    }
                                                                    type="text"
                                                                    name="lastName"
                                                                    placeholder="Last Name"
                                                                    // defaultValue="Mack Adamia"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className="row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Rol
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    value={
                                                                        data?.rol
                                                                    }
                                                                    type="text"
                                                                    name="rol"
                                                                    placeholder="Rol"
                                                                    // defaultValue="Admin"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Cargo
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    value={
                                                                        data?.position
                                                                    }
                                                                    type="text"
                                                                    name="position"
                                                                    placeholder="Designation"
                                                                    // defaultValue="Web Designer"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <div className="mb-4 tw-font-bold tw-text-xl tw-text-[#E9A225]">
                                                        Información de Contacto
                                                    </div>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Email
                                                                    <i>
                                                                        (requerido)
                                                                    </i>
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    disabled
                                                                    value={
                                                                        data?.email
                                                                    }
                                                                    type="text"
                                                                    name="email"
                                                                    placeholder="email"
                                                                    // defaultValue="info@Spruha.in"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Teléfono
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    value={
                                                                        data?.phone
                                                                    }
                                                                    type="text"
                                                                    name="phone"
                                                                    placeholder="phone number"
                                                                    // defaultValue="+245 354 654"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Dirección
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    aria-label="Comments"
                                                                    value={
                                                                        data?.address
                                                                    }
                                                                    as="textarea"
                                                                    name="address"
                                                                    rows={2}
                                                                    placeholder="Address"
                                                                    // defaultValue="San Francisco, CA"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                ></Form.Control>
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <div className="mb-4 tw-font-bold tw-text-xl tw-text-[#E9A225]">
                                                        Algo Sobre Ti
                                                    </div>
                                                    <FormGroup className="form-group">
                                                        <Row className=" row-sm">
                                                            <Col md={3}>
                                                                <Form.Label className="fs-15 text-capitalize tw-text-[#E9A225] mb-3">
                                                                    Biography
                                                                </Form.Label>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Control
                                                                    value={
                                                                        data?.aboutMe
                                                                    }
                                                                    name="aboutMe"
                                                                    rows={4}
                                                                    as="textarea"
                                                                    // aria-label="pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.."
                                                                    placeholder="About you"
                                                                    // defaultValue="John Doe es un administrador experimentado en laboratorios de radiografías orales, con más de una década de experiencia. Es reconocido por su habilidad para garantizar la precisión y seguridad en todas las operaciones del laboratorio, así como por su enfoque proactivo en la actualización de equipos y tecnologías. Su dedicación a la excelencia en la salud bucal lo convierte en un líder valorado en su campo."
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                ></Form.Control>
                                                            </Col>
                                                        </Row>
                                                    </FormGroup>
                                                    <div className="tw-flex tw-justify-end tw-items-center">
                                                        <Button
                                                            // disabled={
                                                            //     isDisabled
                                                            // }
                                                            onClick={
                                                                handleUpdateProfile
                                                            }
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
