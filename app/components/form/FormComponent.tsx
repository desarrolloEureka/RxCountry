import {
    areas,
    campus,
    ColombianStates,
    contracts,
    countries,
    getCities,
    idTypes,
    roles,
    specialties,
    status,
} from "@/data/formConstant";
import { ModalParamsSales } from "@/types/modals";
import "filepond/dist/filepond.min.css";
import _ from "lodash";
import dynamic from "next/dynamic";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FilePond } from "react-filepond";
import SalesHook from "../sales/hook/SalesHook";
import { useRef } from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });

const FormComponent = ({
    handleShowSales,
    setHandleShowSales,
    title,
    reference,
}: ModalParamsSales) => {
    const {
        showPassword,
        setShowPassword,
        files,
        setFiles,
        selectedIdType,
        setSelectedIdType,
        selectedState,
        setSelectedState,
        selectedCountry,
        setSelectedCountry,
        selectedCity,
        setSelectedCity,
        selectedSpecialty,
        setSelectedSpecialty,
        selectedContract,
        setSelectedContract,
        selectedStatus,
        setSelectedStatus,
        selectedRol,
        setSelectedRol,
        selectedCampus,
        setSelectedCampus,
        selectedArea,
        setSelectedArea,
        clearSelectFields,
        calculateAge,
        selectedAge,
        handleGetBirthDate,
    } = SalesHook({
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
        <>
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
                                    noOptionsMessage={({ inputValue }) =>
                                        `No hay resultados para "${inputValue}"`
                                    }
                                    value={selectedIdType}
                                    defaultValue={selectedIdType}
                                    placeholder="Seleccione"
                                    isClearable
                                    name="idType"
                                    options={idTypes}
                                    id="idType"
                                    className="basic-multi-select"
                                    classNamePrefix="Select2"
                                    onChange={setSelectedIdType}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Documento</Form.Label>
                            <Form.Control
                                type="text"
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
                                onChange={handleGetBirthDate}
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Edad</Form.Label>
                            <Form.Control
                                value={selectedAge && calculateAge(selectedAge)}
                                disabled
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
                        <Col md={6} className="mb-3">
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
                                noOptionsMessage={({ inputValue }: any) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                value={selectedCountry}
                                defaultValue={selectedCountry}
                                placeholder="País"
                                isClearable
                                name="inputCountry"
                                options={countries}
                                id="inputCountry"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={(value) => {
                                    setSelectedCountry(value);
                                    setSelectedState(null);
                                    setSelectedCity(null);
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
                                isDisabled={_.isEmpty(selectedCountry)}
                                noOptionsMessage={({ inputValue }: any) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                value={selectedState}
                                defaultValue={selectedState}
                                placeholder="Departamento"
                                isClearable
                                name="inputState1"
                                options={ColombianStates}
                                id="inputState1"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={(value) => {
                                    setSelectedState(value);
                                    setSelectedCity(null);
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
                                isDisabled={
                                    _.isEmpty(selectedState) ||
                                    _.isEmpty(selectedCountry)
                                }
                                noOptionsMessage={({ inputValue }: any) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                value={selectedCity}
                                defaultValue={selectedCity}
                                placeholder="Ciudad"
                                isClearable
                                name="city"
                                options={
                                    selectedState
                                        ? getCities(selectedState?.value)
                                        : []
                                }
                                id="city"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={setSelectedCity}
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
                                noOptionsMessage={({ inputValue }) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                value={selectedSpecialty}
                                defaultValue={selectedSpecialty}
                                placeholder="Seleccionar..."
                                isClearable
                                name="specialty"
                                options={specialties}
                                id="specialty"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={setSelectedSpecialty}
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Convenio</Form.Label>
                            <Select
                                noOptionsMessage={({ inputValue }) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                value={selectedContract}
                                defaultValue={selectedContract}
                                placeholder="Seleccionar..."
                                isClearable
                                name="contract"
                                options={contracts}
                                id="contract"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={setSelectedContract}
                            />
                        </Col>
                    </>
                )}
                {reference !== "campus" && (
                    <>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Estado</Form.Label>
                            <Select
                                noOptionsMessage={({ inputValue }) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                value={selectedStatus}
                                defaultValue={selectedStatus}
                                placeholder="Estado"
                                isClearable
                                name="status"
                                options={status}
                                id="status"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={setSelectedStatus}
                            />
                        </Col>
                    </>
                )}
                {reference === "users" && (
                    <>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Rol</Form.Label>
                            <Select
                                noOptionsMessage={({ inputValue }) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                value={selectedRol}
                                defaultValue={selectedRol}
                                placeholder="Rol"
                                isClearable
                                name="rol"
                                options={roles}
                                id="rol"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={setSelectedRol}
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
                                value={selectedCampus}
                                defaultValue={selectedCampus}
                                placeholder="Sede"
                                isClearable
                                name="campus"
                                options={campus}
                                id="campus"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={setSelectedCampus}
                            />
                        </Col>
                        <Col md={6} lg={4} className="mb-3">
                            <Form.Label className="">Área</Form.Label>
                            <Select
                                noOptionsMessage={({ inputValue }) =>
                                    `No hay resultados para "${inputValue}"`
                                }
                                value={selectedArea}
                                defaultValue={selectedArea}
                                placeholder="Área"
                                isClearable
                                name="area"
                                options={areas}
                                id="area"
                                className="basic-multi-select"
                                classNamePrefix="Select2"
                                onChange={setSelectedArea}
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
                <Col md={12} className="tw-text-end">
                    <Button
                        type="reset"
                        variant="primary"
                        onClick={clearSelectFields}
                    >
                        Limpiar
                    </Button>
                </Col>
            </Row>
        </>
    );
};

FormComponent.layout = "Contentlayout";

export default FormComponent;
