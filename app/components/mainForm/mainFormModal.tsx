import {
    areas,
    campus,
    ColombianStates,
    contracts,
    countries,
    getCities,
    idTypes,
    isActiveData,
    // specialties,
} from "@/data/formConstant";
import { ModalParamsMainForm } from "@/types/modals";
import "filepond/dist/filepond.min.css";
import _ from "lodash";
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
import { components } from "react-select";
import { showPasswordParams } from "@/types/mainForm";

const { Option } = components;

const IconOption = (props: any) => (
    <Option {...props}>
        <div>
            <span className={`status bg-${props.data.statusInfo}`}></span>
            {props.data.label}
        </div>
    </Option>
);

const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: "block",
        marginRight: 8,
        height: 7,
        width: 7,
    },
});

const ShowPasswordButton = ({
    showPassword,
    setShowPassword,
}: showPasswordParams) => (
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

const MainFormModal = ({
    handleShowMainForm,
    setHandleShowMainForm,
    handleShowMainFormEdit,
    setHandleShowMainFormEdit,
    editData,
    title,
    reference,
}: ModalParamsMainForm) => {
    const {
        show,
        errorForm,
        showPassword,
        files,
        isLoading,
        data,
        selectedIdType,
        selectedState,
        selectedCountry,
        selectedCity,
        selectedSpecialty,
        selectedContract,
        selectedStatus,
        // selectedRol,
        selectedCampus,
        selectedArea,
        isEdit,
        errorPass,
        setErrorPass,
        handleSendForm,
        handleClose,
        handleReset,
        setErrorForm,
        changeHandler,
        clearSelectFields,
        calculateAge,
        handleGetBirthDate,
        dateChangeHandler,
        selectChangeHandlerIdType,
        setShowPassword,
        setFiles,
        // selectChangeHandlerRol,
        selectChangeHandlerCampus,
        selectChangeHandlerArea,
        selectChangeHandlerStatus,
        selectChangeHandlerContract,
        selectChangeHandlerSpecialty,
        selectChangeHandlerCity,
        selectChangeHandlerCountry,
        selectChangeHandlerState,
        findValue,
        handleEditForm,
    } = MainFormHook({
        handleShowMainForm,
        setHandleShowMainForm,
        handleShowMainFormEdit,
        setHandleShowMainFormEdit,
        editData,
        title,
        reference,
    });

    return (
        <Modal size="xl" centered show={show} onHide={handleClose}>
            <Form
                // noValidate
                // validated={errorForm}
                onReset={handleReset}
                onSubmit={handleSendForm}
            >
                <Modal.Header closeButton>
                    <Modal.Title as="h6">{`Nuevo Registro en la tabla de ${title}`}</Modal.Title>
                </Modal.Header>
                {isEdit ? (
                    <Modal.Body className="tw-px-8">
                        <Row>
                            {reference === "campus" && (
                                <>
                                    <Col md={6} className="mb-3">
                                        <Form.Label className="">
                                            Nombre Sede *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.campusName}
                                            type="text"
                                            minLength={2}
                                            maxLength={25}
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
                                            value={data.description}
                                            type="text"
                                            minLength={2}
                                            maxLength={25}
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
                                                Tipo Documento *
                                            </Form.Label>
                                            <Select
                                                required
                                                noOptionsMessage={({
                                                    inputValue,
                                                }) =>
                                                    `No hay resultados para "${inputValue}"`
                                                }
                                                value={
                                                    data.idType
                                                        ? idTypes.find(
                                                              (value) =>
                                                                  findValue(
                                                                      value,
                                                                      data.idType,
                                                                  ),
                                                          )
                                                        : []
                                                }
                                                defaultValue={selectedIdType}
                                                placeholder="Seleccione"
                                                isClearable
                                                name="idType"
                                                options={idTypes}
                                                id="idType"
                                                className="basic-multi-select"
                                                classNamePrefix="Select2"
                                                onChange={
                                                    selectChangeHandlerIdType
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Documento *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.id}
                                            type="text"
                                            minLength={2}
                                            maxLength={25}
                                            name="id"
                                            className="form-control"
                                            placeholder="Número"
                                            aria-label="Last name"
                                            onChange={changeHandler}
                                        />
                                    </Col>
                                    <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Nombres *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.name}
                                            type="text"
                                            minLength={1}
                                            maxLength={25}
                                            name="name"
                                            className="form-control"
                                            placeholder="Nombres"
                                            aria-label="First name"
                                            onChange={changeHandler}
                                        />
                                    </Col>
                                    <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Apellidos *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.lastName}
                                            type="text"
                                            minLength={1}
                                            maxLength={25}
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
                                            Fecha Nacimiento *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.birthDate}
                                            type="date"
                                            name="birthDate"
                                            className=""
                                            aria-label="birthDate"
                                            // onChange={handleGetBirthDate}
                                            onChange={dateChangeHandler}
                                        />
                                    </Col>
                                    <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Edad
                                        </Form.Label>
                                        <Form.Control
                                            // value={data.age}
                                            value={
                                                data.birthDate &&
                                                calculateAge(data.birthDate)
                                            }
                                            disabled
                                            type="number"
                                            min={0}
                                            max={999}
                                            name="age"
                                            className=""
                                            placeholder="Edad"
                                            aria-label="Age"
                                            // onChange={changeHandler}
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
                                    <Form.Label className="">
                                        Celular *
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.phone}
                                        type="tel"
                                        maxLength={25}
                                        name="phone"
                                        className=""
                                        placeholder="Número"
                                        aria-label="Phone number"
                                        onChange={changeHandler}
                                        title="Deben ser números o caracteres telefónicos"
                                        pattern="^(\+?)?[0-9\s]+$"
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
                                            value={data.phone2}
                                            type="tel"
                                            min={0}
                                            max={999999999999}
                                            name="phone2"
                                            className=""
                                            placeholder="Número"
                                            aria-label="Phone number"
                                            onChange={changeHandler}
                                        />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label className="">
                                            Dirección *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.address}
                                            type="text"
                                            minLength={2}
                                            maxLength={150}
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
                                        <Form.Label className="">
                                            País *
                                        </Form.Label>
                                        <Select
                                            required
                                            noOptionsMessage={({
                                                inputValue,
                                            }: any) =>
                                                `No hay resultados para "${inputValue}"`
                                            }
                                            value={
                                                data.country
                                                    ? countries.find((value) =>
                                                          findValue(
                                                              value,
                                                              data.country,
                                                          ),
                                                      )
                                                    : []
                                            }
                                            defaultValue={selectedCountry}
                                            placeholder="País"
                                            isClearable
                                            name="country"
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
                                            Departamento/Estado *
                                        </Form.Label>
                                        <Select
                                            required
                                            isDisabled={_.isEmpty(
                                                selectedCountry,
                                            )}
                                            noOptionsMessage={({
                                                inputValue,
                                            }: any) =>
                                                `No hay resultados para "${inputValue}"`
                                            }
                                            value={
                                                data.state
                                                    ? ColombianStates.find(
                                                          (value) =>
                                                              findValue(
                                                                  value,
                                                                  data.state,
                                                              ),
                                                      )
                                                    : []
                                            }
                                            defaultValue={selectedState}
                                            placeholder="Departamento"
                                            isClearable
                                            name="state"
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
                                        <Form.Label className="">
                                            Ciudad *
                                        </Form.Label>
                                        <Select
                                            required
                                            isDisabled={
                                                _.isEmpty(selectedState) ||
                                                _.isEmpty(selectedCountry)
                                            }
                                            noOptionsMessage={({
                                                inputValue,
                                            }: any) =>
                                                `No hay resultados para "${inputValue}"`
                                            }
                                            // value={
                                            //     data.state
                                            //         ? getCities(data.state).find(
                                            //               (value) =>
                                            //                   findValue(
                                            //                       value,
                                            //                       data.state,
                                            //                   ),
                                            //           )
                                            //         : []
                                            // }
                                            defaultValue={selectedCity}
                                            placeholder="Ciudad"
                                            isClearable
                                            name="city"
                                            options={
                                                data.state
                                                    ? getCities(data.state)
                                                    : []
                                            }
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
                                        <Form.Label className="">
                                            Email *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.email}
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
                                            Contraseña *
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                required
                                                value={data.password}
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                minLength={8}
                                                maxLength={16}
                                                name="password"
                                                className=""
                                                placeholder="Contraseña"
                                                aria-label="password"
                                                onChange={changeHandler}
                                                title="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres"
                                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            />
                                            <ShowPasswordButton
                                                setShowPassword={
                                                    setShowPassword
                                                }
                                                showPassword={showPassword}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Confirmar Contraseña *
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                required
                                                value={data.confirmPassword}
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                minLength={8}
                                                maxLength={16}
                                                name="confirmPassword"
                                                className=""
                                                placeholder="Confirmar"
                                                aria-label="passwordConfirm"
                                                onChange={changeHandler}
                                                title="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres"
                                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            />
                                            <ShowPasswordButton
                                                showPassword={showPassword}
                                                setShowPassword={
                                                    setShowPassword
                                                }
                                            />
                                        </InputGroup>
                                    </Col>
                                </>
                            )}
                            {reference === "professionals" && (
                                <>
                                    <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Número Tarjeta Profesional *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.cardNumber}
                                            type="number"
                                            min={0}
                                            max={9999999999999999999}
                                            name="cardNumber"
                                            className=""
                                            placeholder="Número"
                                            aria-label="cardNumber"
                                            onChange={changeHandler}
                                        />
                                    </Col>
                                    {/* <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Registro Médico *
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            value={data.medicalRecord}
                                            type="text"
                                            minLength={1}
                                            maxLength={25}
                                            name="medicalRecord"
                                            className=""
                                            placeholder="Registro"
                                            aria-label="medicalRecord"
                                            onChange={changeHandler}
                                        />
                                    </Col> */}
                                    {/* <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Especialidad *
                                        </Form.Label>
                                        <Select
                                            required
                                            noOptionsMessage={({
                                                inputValue,
                                            }) =>
                                                `No hay resultados para "${inputValue}"`
                                            }
                                            value={
                                                data.specialty
                                                    ? specialties.find(
                                                          (value) =>
                                                              findValue(
                                                                  value,
                                                                  data.specialty,
                                                              ),
                                                      )
                                                    : []
                                            }
                                            defaultValue={selectedSpecialty}
                                            placeholder="Seleccionar..."
                                            isClearable
                                            name="specialty"
                                            options={specialties}
                                            id="specialty"
                                            className="basic-multi-select"
                                            classNamePrefix="Select2"
                                            onChange={
                                                selectChangeHandlerSpecialty
                                            }
                                        />
                                    </Col> */}
                                    <Col md={6} lg={4} className="mb-3">
                                        <Form.Label className="">
                                            Convenio (Opcional)
                                        </Form.Label>
                                        <Select
                                            // required
                                            noOptionsMessage={({
                                                inputValue,
                                            }) =>
                                                `No hay resultados para "${inputValue}"`
                                            }
                                            value={
                                                data.country
                                                    ? contracts.find((value) =>
                                                          findValue(
                                                              value,
                                                              data.contract,
                                                          ),
                                                      )
                                                    : []
                                            }
                                            defaultValue={selectedContract}
                                            placeholder="Seleccionar..."
                                            isClearable
                                            name="contract"
                                            options={contracts}
                                            id="contract"
                                            className="basic-multi-select"
                                            classNamePrefix="Select2"
                                            onChange={
                                                selectChangeHandlerContract
                                            }
                                        />
                                    </Col>
                                </>
                            )}
                            <Col
                                md={6}
                                lg={reference !== "campus" ? 4 : 6}
                                className="mb-3"
                            >
                                <Form.Label className="">Estado *</Form.Label>
                                <Select
                                    required
                                    noOptionsMessage={({ inputValue }) =>
                                        `No hay resultados para "${inputValue}"`
                                    }
                                    value={
                                        data.isActive
                                            ? isActiveData.find((value) =>
                                                  findValue(
                                                      value,
                                                      data.isActive,
                                                  ),
                                              )
                                            : []
                                    }
                                    defaultValue={selectedStatus}
                                    placeholder="Estado"
                                    isClearable
                                    name="isActive"
                                    options={isActiveData}
                                    id="isActive"
                                    className="basic-multi-select"
                                    classNamePrefix="Select2"
                                    onChange={selectChangeHandlerStatus}
                                    components={{ Option: IconOption }}
                                    styles={{
                                        singleValue: (
                                            styles,
                                            { data }: any,
                                        ) => ({
                                            ...styles,
                                            ...dot(data.color),
                                        }),
                                    }}
                                />
                            </Col>
                            {reference === "functionary" && (
                                <>
                                    {/* <Col md={6} lg={4} className="mb-3">
                                    <Form.Label className="">Rol</Form.Label>
                                    <Select
                                        noOptionsMessage={({ inputValue }) =>
                                            `No hay resultados para "${inputValue}"`
                                        }
                                        value={
                                            data.rol
                                                ? roles.find((value) =>
                                                      findValue(
                                                          value,
                                                          data.rol,
                                                      ),
                                                  )
                                                : []
                                        }
                                        defaultValue={selectedRol}
                                        placeholder="Rol"
                                        isClearable
                                        name="rol"
                                        options={roles}
                                        id="rol"
                                        className="basic-multi-select"
                                        classNamePrefix="Select2"
                                        onChange={selectChangeHandlerRol}
                                    />
                                </Col> */}
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
                                        <Form.Label className="">
                                            Sede *
                                        </Form.Label>
                                        <Select
                                            required
                                            noOptionsMessage={({
                                                inputValue,
                                            }) =>
                                                `No hay resultados para "${inputValue}"`
                                            }
                                            value={
                                                data.campus
                                                    ? campus.find((value) =>
                                                          findValue(
                                                              value,
                                                              data.campus,
                                                          ),
                                                      )
                                                    : []
                                            }
                                            defaultValue={selectedCampus}
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
                                        <Form.Label className="">
                                            Área *
                                        </Form.Label>
                                        <Select
                                            required
                                            noOptionsMessage={({
                                                inputValue,
                                            }) =>
                                                `No hay resultados para "${inputValue}"`
                                            }
                                            value={
                                                data.area
                                                    ? areas.find((value) =>
                                                          findValue(
                                                              value,
                                                              data.area,
                                                          ),
                                                      )
                                                    : []
                                            }
                                            defaultValue={selectedArea}
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
                                <Col className="mb-3">
                                    <FilePond
                                        className="multiple-filepond single-fileupload"
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                    />
                                </Col>
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
                                <strong>Error de envío!.</strong> Todos los
                                campos son obligatorios!
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
                        {errorPass && (
                            <Alert
                                variant="info"
                                className="alert alert-info alert-dismissible fade show"
                                role="alert"
                                show={show}
                                // onClick={() => setErrorForm(false)}
                            >
                                <strong>Contraseñas no coinciden!.</strong>{" "}
                                Vuelva a intentar!
                                <Button
                                    variant=""
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                    onClick={() => setErrorPass(false)}
                                >
                                    <i className="bi bi-x"></i>
                                </Button>
                            </Alert>
                        )}
                    </Modal.Body>
                ) : (
                    <Modal.Body className="tw-px-8">
                        <Row>
                            {reference === "campus" && (
                                <>
                                    <Col md={6} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Nombre Sede
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.campusName}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Descripción (opcional)
                                            </h6>
                                            <p className="border-bottom">
                                                {data.description}
                                            </p>
                                        </div>
                                    </Col>
                                </>
                            )}
                            {reference !== "campus" && (
                                <>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Tipo Documento
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.idType}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Documento
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.id}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">Nombres</h6>
                                            <p className="border-bottom fw-light">
                                                {data.name}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Apellidos
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.lastName}
                                            </p>
                                        </div>
                                    </Col>
                                </>
                            )}

                            {reference === "patients" && (
                                <>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Fecha Nacimiento
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.birthDate}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">Edad</h6>
                                            <p className="border-bottom fw-light">
                                                {data.age}
                                            </p>
                                        </div>
                                    </Col>
                                </>
                            )}
                            {reference !== "campus" && (
                                <Col
                                    md={6}
                                    lg={reference !== "campus" && 4}
                                    className=""
                                >
                                    <div className="tw-flex-1 tw-text-star tw-text-base">
                                        <h6 className="fw-bold">Celular</h6>
                                        <p className="border-bottom fw-light">
                                            {data.phone}
                                        </p>
                                    </div>
                                </Col>
                            )}
                            {reference !== "functionary" && (
                                <>
                                    <Col
                                        md={6}
                                        lg={reference !== "campus" && 4}
                                        className=""
                                    >
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Teléfono fijo (opcional)
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.phone2}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Dirección
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.address}
                                            </p>
                                        </div>
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
                                        className=""
                                    >
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">País</h6>
                                            <p className="border-bottom fw-light">
                                                {data.country}
                                            </p>
                                        </div>
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
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Departamento/Estado
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.state}
                                            </p>
                                        </div>
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
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">Ciudad</h6>
                                            <p className="border-bottom fw-light">
                                                {data.city}
                                            </p>
                                        </div>
                                    </Col>
                                </>
                            )}
                            {reference !== "campus" && (
                                <>
                                    <Col
                                        md={6}
                                        lg={reference !== "campus" && 4}
                                        className=""
                                    >
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">Email</h6>
                                            <p className="border-bottom fw-light">
                                                {data.email}
                                            </p>
                                        </div>
                                    </Col>
                                    {/* <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Contraseña
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                **********
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Confirmar Contraseña
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                **********
                                            </p>
                                        </div>
                                    </Col> */}
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">Rol</h6>
                                            <p className="border-bottom fw-light">
                                                {data.rol}
                                            </p>
                                        </div>
                                    </Col>
                                </>
                            )}
                            {reference === "professionals" && (
                                <>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Número Tarjeta Profesional
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.cardNumber}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Registro Médico
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.medicalRecord}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Especialidad
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.medicalRecord}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">
                                                Convenio
                                            </h6>
                                            <p className="border-bottom fw-light">
                                                {data.contract}
                                            </p>
                                        </div>
                                    </Col>
                                </>
                            )}
                            <Col
                                md={6}
                                lg={reference !== "campus" ? 4 : 6}
                                className=""
                            >
                                <div className="tw-flex-1 tw-text-star tw-text-base">
                                    <h6 className="fw-bold">Estado</h6>
                                    <p className="border-bottom fw-light">
                                        {data.isActive}
                                    </p>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="">
                                <div className="tw-flex-1 tw-text-star tw-text-base">
                                    <h6 className="fw-bold">Fecha Registro</h6>
                                    <p className="border-bottom fw-light">
                                        {data.timestamp}
                                    </p>
                                </div>
                            </Col>
                            {reference === "functionary" && (
                                <>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">Sede</h6>
                                            <p className="border-bottom fw-light">
                                                {data.campus}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={4} className="">
                                        <div className="tw-flex-1 tw-text-star tw-text-base">
                                            <h6 className="fw-bold">Área</h6>
                                            <p className="border-bottom fw-light">
                                                {data.area}
                                            </p>
                                        </div>
                                    </Col>
                                </>
                            )}
                            {reference !== "campus" && (
                                <Col className="">
                                    <div className="tw-text-center">
                                        <h6 className="pb-3">Foto</h6>
                                        <span className="avatar avatar-xxl me-2">
                                            <img
                                                src="http://via.placeholder.com/150x150"
                                                alt="img"
                                            />
                                        </span>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Modal.Body>
                )}

                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Cancelar
                    </Button>
                    {!isEdit && handleShowMainFormEdit ? (
                        <Button variant="primary" onClick={handleEditForm}>
                            Editar
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            className={`btn  ${isLoading && "btn-loader"}`}
                            // onClick={handleSendForm}
                            type="submit"
                            // disabled={dataDocumentsToSel ? false : true}
                        >
                            <span className="me-2">
                                {handleShowMainFormEdit ? "Guardar" : "Crear"}
                            </span>
                            {isLoading && (
                                <span className="loading">
                                    <i className="ri-loader-2-fill fs-16"></i>
                                </span>
                            )}
                        </Button>
                    )}
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default MainFormModal;
