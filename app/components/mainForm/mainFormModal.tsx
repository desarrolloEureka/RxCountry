import {
    areas,
    campus,
    ColombianStates,
    contracts,
    countries,
    idTypes,
    roles,
    specialties,
    isActive,
    getCities,
} from "@/data/formConstant";
import { ModalParamsMainForm } from "@/types/modals";
import "filepond/dist/filepond.min.css";
import dynamic from "next/dynamic";
import {
    Alert,
    Button,
    Col,
    Form,
    InputGroup,
    Modal,
    Row,
} from "react-bootstrap";
import { FilePond } from "react-filepond";
import MainFormHook from "./hook/mainFormHook";
const Select = dynamic(() => import("react-select"), { ssr: false });
import _ from "lodash";

const MainFormModal = ({
    handleShowSales,
    setHandleShowSales,
    title,
    reference,
}: ModalParamsMainForm) => {
    const {
        handleSendForm,
        handleClose,
        handleReset,
        show,
        isLoading,
        setErrorForm,
        errorForm,
        changeHandler,
        clearSelectFields,
        // calculateAge,
        handleGetBirthDate,
        dateChangeHandler,
        selectChangeHandlerIdType,
        showPassword,
        setShowPassword,
        files,
        setFiles,
        selectChangeHandlerRol,
        selectChangeHandlerCampus,
        selectChangeHandlerArea,
        selectChangeHandlerStatus,
        selectChangeHandlerContract,
        selectChangeHandlerSpecialty,
        selectChangeHandlerCity,
        selectChangeHandlerCountry,
        selectChangeHandlerState,
        data,
    } = MainFormHook({
        handleShowSales,
        setHandleShowSales,
        title,
        reference,
    });

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
        <Modal size="xl" centered show={show} onHide={handleClose}>
            <Form onReset={handleReset}>
                <Modal.Header closeButton>
                    <Modal.Title as="h6">{`Nuevo Registro en la tabla de ${title}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="tw-px-8">
                    <Row>
                        {reference === "campus" && (
                            <>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="">
                                        Nombre Sede
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="campusName"
                                        className="form-control"
                                        placeholder="Nombre"
                                        aria-label="campusName"
                                        onChange={changeHandler}
                                    />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="">
                                        Descripción (opcional)
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        placeholder="Descripción"
                                        aria-label="description"
                                        onChange={changeHandler}
                                    />
                                </Col>
                            </>
                        )}
                        {reference !== "campus" && (
                            <>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Group controlId="idType">
                                        <Form.Label className="">
                                            Tipo Documento
                                        </Form.Label>
                                        <Select
                                            noOptionsMessage={({
                                                inputValue,
                                            }) =>
                                                `No hay resultados para "${inputValue}"`
                                            }
                                            // value={selectedIdType}
                                            // defaultValue={selectedIdType}
                                            placeholder="Seleccione"
                                            isClearable
                                            name="idType"
                                            options={idTypes}
                                            id="idType"
                                            className="basic-multi-select"
                                            classNamePrefix="Select2"
                                            onChange={selectChangeHandlerIdType}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">
                                        Documento
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="id"
                                        className="form-control"
                                        placeholder="Número"
                                        aria-label="Last name"
                                        onChange={changeHandler}
                                    />
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">
                                        Nombres
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Nombres"
                                        aria-label="First name"
                                        onChange={changeHandler}
                                    />
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">
                                        Apellidos
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Apellidos"
                                        aria-label="Last name"
                                        onChange={changeHandler}
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
                                        // onChange={handleGetBirthDate}
                                        onChange={dateChangeHandler}
                                    />
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">Edad</Form.Label>
                                    <Form.Control
                                        // value={selectedAge && calculateAge(selectedAge)}
                                        // disabled
                                        type="number"
                                        name="age"
                                        className=""
                                        placeholder="Edad"
                                        aria-label="Age"
                                        onChange={changeHandler}
                                    />
                                </Col>
                            </>
                        )}
                        {reference !== "campus" && (
                            <Col
                                md={6}
                                lg={reference !== "campus" && 4}
                                className="mb-3"
                            >
                                <Form.Label className="">Celular</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="phone"
                                    className=""
                                    placeholder="Número"
                                    aria-label="Phone number"
                                    onChange={changeHandler}
                                />
                            </Col>
                        )}
                        {reference !== "functionary" && (
                            <>
                                <Col
                                    md={6}
                                    lg={reference !== "campus" && 4}
                                    className="mb-3"
                                >
                                    <Form.Label className="">
                                        Teléfono fijo (opcional)
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="phone2"
                                        className=""
                                        placeholder="Número"
                                        aria-label="Phone number"
                                        onChange={changeHandler}
                                    />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="">
                                        Dirección
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        className=""
                                        placeholder="Dirección"
                                        aria-label="address"
                                        onChange={changeHandler}
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
                                        noOptionsMessage={({
                                            inputValue,
                                        }: any) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        // value={selectedCountry}
                                        // defaultValue={selectedCountry}
                                        placeholder="País"
                                        isClearable
                                        name="inputCountry"
                                        options={countries}
                                        id="inputCountry"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={(e): any => {
                                            selectChangeHandlerCountry(e);
                                        }}
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
                                        // isDisabled={_.isEmpty(selectedCountry)}
                                        noOptionsMessage={({
                                            inputValue,
                                        }: any) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        // value={ColombianStates[data.state]}
                                        // defaultValue={selectedState}
                                        placeholder="Departamento"
                                        isClearable
                                        name="inputState1"
                                        options={ColombianStates}
                                        id="inputState1"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={(value) => {
                                            selectChangeHandlerState(value);
                                        }}
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
                                        // isDisabled={
                                        //     _.isEmpty(selectedState) ||
                                        //     _.isEmpty(selectedCountry)
                                        // }
                                        noOptionsMessage={({
                                            inputValue,
                                        }: any) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        // value={selectedCity}
                                        // defaultValue={selectedCity}
                                        placeholder="Ciudad"
                                        isClearable
                                        name="city"
                                        options={
                                            data.state
                                                ? getCities(data.state)
                                                : []
                                        }
                                        // options={[
                                        //     {
                                        //         value: "Example",
                                        //         label: "Example",
                                        //     },
                                        // ]}
                                        id="city"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={selectChangeHandlerCity}
                                    />
                                </Col>
                            </>
                        )}
                        {reference !== "campus" && (
                            <>
                                <Col
                                    md={6}
                                    lg={reference !== "campus" && 4}
                                    className="mb-3"
                                >
                                    <Form.Label className="">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        className=""
                                        placeholder="Email"
                                        aria-label="email"
                                        onChange={changeHandler}
                                    />
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">
                                        Contraseña
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            className=""
                                            placeholder="Contraseña"
                                            aria-label="password"
                                            onChange={changeHandler}
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
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confirmPassword"
                                            className=""
                                            placeholder="Confirmar"
                                            aria-label="passwordConfirm"
                                            onChange={changeHandler}
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
                                        name="cardNumber"
                                        className=""
                                        placeholder="Número"
                                        aria-label="cardNumber"
                                        onChange={changeHandler}
                                    />
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">
                                        Registro Médico
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="medicalRecord"
                                        className=""
                                        placeholder="Registro"
                                        aria-label="medicalRecord"
                                        onChange={changeHandler}
                                    />
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">
                                        Especialidad
                                    </Form.Label>
                                    <Select
                                        noOptionsMessage={({ inputValue }) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        // value={selectedSpecialty}
                                        // defaultValue={selectedSpecialty}
                                        placeholder="Seleccionar..."
                                        isClearable
                                        name="specialty"
                                        options={specialties}
                                        id="specialty"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={selectChangeHandlerSpecialty}
                                    />
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">
                                        Convenio
                                    </Form.Label>
                                    <Select
                                        noOptionsMessage={({ inputValue }) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        // value={selectedContract}
                                        // defaultValue={selectedContract}
                                        placeholder="Seleccionar..."
                                        isClearable
                                        name="contract"
                                        options={contracts}
                                        id="contract"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={selectChangeHandlerContract}
                                    />
                                </Col>
                            </>
                        )}
                        <Col
                            md={6}
                            lg={reference !== "campus" ? 4 : 6}
                            className="mb-3"
                        >
                            <Form.Label className="">Estado</Form.Label>
                            <Select
                                noOptionsMessage={({ inputValue }) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                // value={selectedStatus}
                                // defaultValue={selectedStatus}
                                placeholder="Estado"
                                isClearable
                                name="isActive"
                                options={isActive}
                                id="isActive"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={selectChangeHandlerStatus}
                            />
                        </Col>
                        {reference === "functionary" && (
                            <>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">Rol</Form.Label>
                                    <Select
                                        noOptionsMessage={({ inputValue }) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        // value={selectedRol}
                                        // defaultValue={selectedRol}
                                        placeholder="Rol"
                                        isClearable
                                        name="rol"
                                        options={roles}
                                        id="rol"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={selectChangeHandlerRol}
                                    />
                                </Col>
                                {/* <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Fecha Registro</Form.Label>
                            <Form.Control
                                // disabled
                                type="date"
                                className=""
                                aria-label="dateRegister"
                            />
                        </Col> */}
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">Sede</Form.Label>
                                    <Select
                                        noOptionsMessage={({ inputValue }) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        // value={selectedCampus}
                                        // defaultValue={selectedCampus}
                                        placeholder="Sede"
                                        isClearable
                                        name="campus"
                                        options={campus}
                                        id="campus"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={selectChangeHandlerCampus}
                                    />
                                </Col>
                                <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">Área</Form.Label>
                                    <Select
                                        noOptionsMessage={({ inputValue }) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        // value={selectedArea}
                                        // defaultValue={selectedArea}
                                        placeholder="Área"
                                        isClearable
                                        name="area"
                                        options={areas}
                                        id="area"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={selectChangeHandlerArea}
                                    />
                                </Col>
                            </>
                        )}
                        {reference !== "campus" && (
                            <>
                                <Col className="mb-3">
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
                            </>
                        )}
                        <Col md={12} className="tw-text-end tw-pb-3">
                            <Button
                                type="reset"
                                variant="primary"
                                onClick={clearSelectFields}
                            >
                                Limpiar
                            </Button>
                        </Col>
                    </Row>
                    {errorForm && (
                        <Alert
                            variant="warning"
                            className="alert alert-warning alert-dismissible fade show"
                            role="alert"
                            show={show}
                            // onClick={() => setErrorForm(false)}
                        >
                            <strong>Error de envío!.</strong> Todos los campos
                            son obligatorios!
                            <Button
                                variant=""
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                onClick={() => setErrorForm(false)}
                            >
                                <i className="bi bi-x"></i>
                            </Button>
                        </Alert>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Cancelar
                    </Button>
                    {/* <Button variant="primary" onClick={handleValidForm}>
                            Validar
                        </Button> */}
                    <Button
                        variant="primary"
                        className={`btn  ${isLoading && "btn-loader"}`}
                        onClick={handleSendForm}
                        // disabled={dataDocumentsToSel ? false : true}
                    >
                        <span className="me-2">Crear</span>
                        {isLoading && (
                            <span className="loading">
                                <i className="ri-loader-2-fill fs-16"></i>
                            </span>
                        )}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default MainFormModal;
