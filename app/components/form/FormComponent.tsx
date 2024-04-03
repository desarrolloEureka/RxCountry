import "filepond/dist/filepond.min.css";
import dynamic from "next/dynamic";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import FormHook, { FormComponentProps } from "./hook/FormHook";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { FilePond } from "react-filepond";

const FormComponent = ({ reference }: FormComponentProps) => {
    const {
        showPassword,
        setShowPassword,
        files,
        setFiles,
        selectedIdType,
        setSelectedIdType,
        roles,
        idTypes,
    } = FormHook({ reference });

    const ShowPasswordButton = () => (
        <Button
            variant="outline-primary"
            className="btn btn-icon btn-wave"
            onClick={() => setShowPassword(!showPassword)}
        >
            {showPassword ? (
                <i className="fe fe-eye-off"></i>
            ) : (
                <i className="fe fe-eye"></i>
            )}
        </Button>
    );

    return (
        <>
            {/* <h3 className="mb-3">Datos</h3> */}
            <Row>
                {reference === "campus" && (
                    <Col md={6} className="mb-3">
                        <Form.Label className="">Nombre Sede</Form.Label>
                        <Form.Control
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            aria-label="campus name"
                        />
                    </Col>
                )}
                {reference !== "campus" && (
                    <>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Group controlId="idType">
                                <Form.Label className="">
                                    Tipo Documento
                                </Form.Label>
                                <Select
                                    value={selectedIdType}
                                    noOptionsMessage={({ inputValue }) =>
                                        `No hay resultados para "${inputValue}"`
                                    }
                                    placeholder="Seleccione"
                                    isClearable
                                    name="idType"
                                    defaultValue={selectedIdType}
                                    onChange={setSelectedIdType}
                                    options={idTypes}
                                    className=""
                                    id="idType"
                                    classNamePrefix="Select2"
                                    // onChange={selectChangeHandler}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Documento</Form.Label>
                            <Form.Control
                                type="Number"
                                className="form-control"
                                placeholder="Número"
                                aria-label="Last name"
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Nombres</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder="Nombres"
                                aria-label="First name"
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Apellidos</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                placeholder="Apellidos"
                                aria-label="Last name"
                            />
                        </Col>
                    </>
                )}

                {reference === "patients" && (
                    <>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">
                                Fecha nacimiento
                            </Form.Label>
                            <Form.Control
                                type="date"
                                className=""
                                aria-label="dateOfBirth"
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Edad</Form.Label>
                            <Form.Control
                                type="number"
                                className=""
                                placeholder="Edad"
                                aria-label="Age"
                            />
                        </Col>
                    </>
                )}
                <Col md={6} lg={reference !== "campus" && 4} className="mb-3">
                    <Form.Label className="">Celular</Form.Label>
                    <Form.Control
                        type="number"
                        className=""
                        placeholder="Número"
                        aria-label="Phone number"
                    />
                </Col>
                {reference !== "users" && (
                    <>
                        <Col
                            md={6}
                            lg={reference !== "campus" && 4}
                            className="mb-3"
                        >
                            <Form.Label className="">Teléfono fijo</Form.Label>
                            <Form.Control
                                type="number"
                                className=""
                                placeholder="Número"
                                aria-label="Phone number"
                            />
                        </Col>
                        <Col
                            md={6}
                            lg={
                                reference !== "professionals"
                                    ? reference !== "campus"
                                        ? 4
                                        : 6
                                    : 3
                            }
                            className="mb-3"
                        >
                            <Form.Label className="">Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                className=""
                                placeholder="Dirección"
                                aria-label="address"
                            />
                        </Col>
                        <Col
                            md={6}
                            lg={
                                reference !== "professionals"
                                    ? reference !== "campus"
                                        ? 4
                                        : 6
                                    : 3
                            }
                            className="mb-3"
                        >
                            <Form.Label className="">País</Form.Label>
                            <Select
                                placeholder="País"
                                isClearable
                                name="inputCountry"
                                // options={idTypes}
                                className=""
                                id="inputCountry"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                        <Col
                            md={6}
                            lg={
                                reference !== "professionals"
                                    ? reference !== "campus"
                                        ? 4
                                        : 6
                                    : 3
                            }
                            className="mb-3"
                        >
                            <Form.Label className="">
                                Departamento/Estado
                            </Form.Label>
                            <Select
                                placeholder="Departamento"
                                isClearable
                                name="inputState1"
                                // options={idTypes}
                                className=""
                                id="inputState1"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                        <Col
                            md={6}
                            lg={
                                reference !== "professionals"
                                    ? reference !== "campus"
                                        ? 4
                                        : 6
                                    : 3
                            }
                            className="mb-3"
                        >
                            <Form.Label className="">Ciudad</Form.Label>
                            <Select
                                placeholder="Ciudad"
                                isClearable
                                name="city"
                                // options={idTypes}
                                className=""
                                id="city"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                    </>
                )}
                <Col md={6} lg={reference !== "campus" && 4} className="mb-3">
                    <Form.Label className="">Email</Form.Label>
                    <Form.Control
                        type="email"
                        className=""
                        placeholder="Email"
                        aria-label="email"
                    />
                </Col>
                {reference !== "campus" && (
                    <>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Contraseña</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    className=""
                                    placeholder="Contraseña"
                                    aria-label="password"
                                />
                                <ShowPasswordButton />
                            </InputGroup>
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">
                                Confirmar Contraseña
                            </Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    className=""
                                    placeholder="Confirmar"
                                    aria-label="passwordConfirm"
                                />
                                <ShowPasswordButton />
                            </InputGroup>
                        </Col>
                    </>
                )}
                {reference === "professionals" && (
                    <>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">
                                Número Tarjeta Profesional
                            </Form.Label>
                            <Form.Control
                                type="number"
                                className=""
                                placeholder="Número"
                                aria-label="cardNumber"
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">
                                Registro Médico
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className=""
                                placeholder="Registro"
                                aria-label="medicalRecord"
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Especialidad</Form.Label>
                            <Select
                                placeholder="Seleccionar..."
                                isClearable
                                name="specialty"
                                // options={idTypes}
                                className=""
                                id="specialty"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Convenio</Form.Label>
                            <Select
                                placeholder="Seleccionar..."
                                isClearable
                                name="contract"
                                // options={idTypes}
                                className=""
                                id="contract"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                    </>
                )}

                {reference !== "campus" && (
                    <>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Estado</Form.Label>
                            <Select
                                placeholder="Estado"
                                isClearable
                                name="City"
                                // options={idTypes}
                                className=""
                                id="City"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Rol</Form.Label>
                            <Select
                                placeholder="Rol"
                                isClearable
                                name="rol"
                                options={roles}
                                className=""
                                id="rol"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                    </>
                )}
                {reference === "users" && (
                    <>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Fecha Registro</Form.Label>
                            <Form.Control
                                // disabled
                                type="date"
                                className=""
                                aria-label="dateRegister"
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Sede</Form.Label>
                            <Select
                                placeholder="Sede"
                                isClearable
                                name="campus"
                                // options={idTypes}
                                className=""
                                id="campus"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Área</Form.Label>
                            <Select
                                placeholder="Área"
                                isClearable
                                name="area"
                                // options={idTypes}
                                className=""
                                id="area"
                                classNamePrefix="Select2"
                                // onChange={selectChangeHandler}
                            />
                        </Col>
                    </>
                )}
                {reference !== "campus" && (
                    <Col>
                        <FilePond
                            className="multiple-filepond single-fileupload"
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={false}
                            maxFiles={1}
                            server="/api"
                            name="files" // sets the file input name, it's filepond by default //
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        />
                    </Col>
                )}
            </Row>
        </>
    );
};

FormComponent.layout = "Contentlayout";

export default FormComponent;
