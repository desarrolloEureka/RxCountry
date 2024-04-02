import { Button, Form, Modal } from "react-bootstrap";
import SalesHook from "./hook/SalesHook";
import { ModalParamsSales } from "@/types/modals";
import dynamic from "next/dynamic";
import Marks from "../rangleSliderData/RangleSliderData";
import moment from "moment";
const Select = dynamic(() => import("react-select"), { ssr: false });

const SalesModal = ({
    handleShowSales,
    setHandleShowSales,
    title,
    reference,
}: ModalParamsSales) => {
    const {
        changeHandler,
        handleSendForm,
        handleClose,
        selectSupplierChangeHandler,
        selectCustomerChangeHandler,
        dayRangesHandler,
        handleValidForm,
        limitHandler,
        // changeHandlerFilters,
        // marksHandler,
        show,
        isLoading,
        customers,
        suppliers,
        nextDate,
        dataDocumentsToSel,
        errorValid,
        // rangeDays,
        // stepsDays,
    } = SalesHook({
        handleShowSales,
        setHandleShowSales,
        title,
        reference,
    });

    return (
        customers &&
        suppliers && (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title as="h6">{`Nuevo Registro en la tabla de ${title}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="tw-px-8">
                    {/* <div className='tw-mb-7 tw-mt-2'>
            <div className='card-title tw-mb-2 tw-font-bold'>
              Rangos de días: <span className='tw-text-red-500'>*</span>
            </div>
            <div className='tw-flex tw-flex-row tw-w-full tw-justify-between'>
              <Form.Check
                type='radio'
                id='1'
                name='days'
                defaultChecked
                label='100'
                onChange={changeHandlerFilters}
              />
              <Form.Check
                type='radio'
                id='2'
                name='days'
                label='150'
                onChange={changeHandlerFilters}
              />
              <Form.Check
                type='radio'
                id='3'
                name='days'
                label='200'
                onChange={changeHandlerFilters}
              />
              <Form.Check
                type='radio'
                id='4'
                name='days'
                label='250'
                onChange={changeHandlerFilters}
              />
              <Form.Check
                type='radio'
                id='5'
                name='days'
                label='300'
                onChange={changeHandlerFilters}
              />
            </div>
          </div>
          <div className='tw-mb-7 tw-mt-2'>
            <div className='card-title tw-mb-2 tw-font-bold'>
              Rangos de grupos de días:{' '}
              <span className='tw-text-red-500'>*</span>
            </div>
            <div className='tw-flex tw-flex-row tw-w-full tw-justify-between'>
              <Form.Check
                type='radio'
                id='1'
                name='groups'
                label='1'
                onChange={changeHandlerFilters}
              />
              <Form.Check
                type='radio'
                id='2'
                name='groups'
                label='2'
                onChange={changeHandlerFilters}
              />
              <Form.Check
                type='radio'
                id='5'
                name='groups'
                label='5'
                onChange={changeHandlerFilters}
              />
              <Form.Check
                type='radio'
                id='10'
                name='groups'
                label='10'
                defaultChecked
                onChange={changeHandlerFilters}
              />
            </div>
          </div> */}
                    {/* <Form.Group className='mb-3' controlId='sold_value'>
            <Form.Label>
              Rango días de vencimiento :{' '}
              <span className='tw-text-red-500'>*</span>
            </Form.Label>
            <Form.Control
              type='number'
              name='range'
              placeholder='90'
              onChange={dayRangesHandler}
            />
            {nextDate && (
              <div className='tw-ml-3 tw-mt-2 tw-font-light'>
                Fecha de vencimiento:{' '}
                <span className='tw-text-red-500'>{nextDate}</span>
              </div>
            )}
          </Form.Group> */}

                    {/* <Form.Group className='mb-3' controlId='limit'>
            <Form.Label>
              Cantidad: <span className='tw-text-red-500'>*</span>
            </Form.Label>
            <Form.Control
              type={'number'}
              name='limit'
              placeholder='Indefinido'
              onChange={limitHandler}
            />
          </Form.Group> */}
                    {/* <div className='tw-mb-7 tw-mt-2'>
            <div className='card-title tw-mb-2 tw-font-bold'>
              Días de vencimiento: <span className='tw-text-red-500'>*</span>
            </div>
            <Marks
              marksHandler={marksHandler}
              max={rangeDays}
              step={stepsDays}
            />

            <div className='tw-my-4 tw-font-medium'>
              Fecha de vencimiento:{' '}
              <span className='tw-text-red-500'>{nextDate}</span>
            </div>
          </div> */}
                    {/* <div className='tw-mb-4'>
            <div className='card-title tw-mb-2 tw-font-medium'>
              Proveedor de cupones: <span className='tw-text-red-500'>*</span>
            </div>
            <Select
              isClearable
              name='suppliers'
              options={suppliers}
              className='default basic-multi-select'
              id='suppliers'
              menuPlacement='auto'
              classNamePrefix='Select2'
              isSearchable={true}
              onChange={selectSupplierChangeHandler}
            />
          </div> */}
                    {/* <div className='tw-mb-4 tw-mt-2'>
            <div className='card-title tw-mb-2 tw-font-medium'>
              Cliente: <span className='tw-text-red-500'>*</span>
            </div>
            <Select
              isClearable
              name='customer'
              options={customers}
              className='default basic-multi-select'
              id='customer'
              menuPlacement='auto'
              classNamePrefix='Select2'
              isSearchable={true}
              onChange={selectCustomerChangeHandler}
            />
          </div> */}
                    {/* <Form.Group className='mb-3' controlId='sold_value'>
            <Form.Label>
              Valor: <span className='tw-text-red-500'>*</span>
            </Form.Label>
            <Form.Control
              type='number'
              name='sold_value'
              placeholder='30000'
              onChange={changeHandler}
            />
          </Form.Group> */}
                    {reference === "users" && (
                        <div className="">
                            <Form.Group
                                className="mb-3"
                                controlId="name_headquarters"
                            >
                                <Form.Label>
                                    Nombre:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name_headquarters"
                                    placeholder="Ingrese nombre"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <div className="tw-mb-4">
                                <div className="card-title tw-mb-2 tw-font-medium">
                                    Rol:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </div>
                                <Select
                                    isClearable
                                    name="rol"
                                    options={suppliers}
                                    className="default basic-multi-select"
                                    id="rol"
                                    menuPlacement="auto"
                                    classNamePrefix="Select2"
                                    isSearchable={true}
                                    // onChange={selectSupplierChangeHandler}
                                />
                            </div>
                        </div>
                    )}
                    {reference === "patients" && (
                        <div className="">
                            <Form.Group
                                className="mb-3"
                                controlId={`name_${reference}`}
                            >
                                <Form.Label>
                                    Id:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`name_${reference}`}
                                    placeholder="Ingrese Documento de identificación"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`name_${reference}`}
                            >
                                <Form.Label>
                                    Nombre:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`name_${reference}`}
                                    placeholder="Ingrese el nombre"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`lastName_${reference}`}
                            >
                                <Form.Label>
                                    Apellido:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`lastName_${reference}`}
                                    placeholder="Ingrese el apellido"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`address_${reference}`}
                            >
                                <Form.Label>
                                    Dirección:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`address_${reference}`}
                                    placeholder="Ingrese dirección"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`city_${reference}`}
                            >
                                <Form.Label>
                                    Ciudad:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`city_${reference}`}
                                    placeholder="Ingrese ciudad"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`phone_${reference}`}
                            >
                                <Form.Label>
                                    Teléfono:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    name={`phone_${reference}`}
                                    placeholder="Ingrese teléfono"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`email_${reference}`}
                            >
                                <Form.Label>
                                    Email:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    name={`email_${reference}`}
                                    placeholder="Ingrese correo electrónico"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                        </div>
                    )}
                    {reference === "professionals" && (
                        <div className="">
                            <Form.Group
                                className="mb-3"
                                controlId={`name_${reference}`}
                            >
                                <Form.Label>
                                    Nombre:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`name_${reference}`}
                                    placeholder="Ingrese el nombre"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`lastName_${reference}`}
                            >
                                <Form.Label>
                                    Apellido:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`lastName_${reference}`}
                                    placeholder="Ingrese el apellido"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`address_${reference}`}
                            >
                                <Form.Label>
                                    Dirección:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`address_${reference}`}
                                    placeholder="Ingrese dirección"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`city_${reference}`}
                            >
                                <Form.Label>
                                    Ciudad:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={`city_${reference}`}
                                    placeholder="Ingrese ciudad"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`phone_${reference}`}
                            >
                                <Form.Label>
                                    Teléfono:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    name={`phone_${reference}`}
                                    placeholder="Ingrese teléfono"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId={`email_${reference}`}
                            >
                                <Form.Label>
                                    Email:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    name={`email_${reference}`}
                                    placeholder="Ingrese correo electrónico"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                        </div>
                    )}
                    {reference === "headquarters" && (
                        <div className="">
                            <Form.Group
                                className="mb-3"
                                controlId="name_headquarters"
                            >
                                <Form.Label>
                                    Nombre:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name_headquarters"
                                    placeholder="Ingrese nombre de sede"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="address_headquarters"
                            >
                                <Form.Label>
                                    Dirección:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address_headquarters"
                                    placeholder="Ingrese dirección"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="city_headquarters"
                            >
                                <Form.Label>
                                    Ciudad:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city_headquarters"
                                    placeholder="Ingrese ciudad"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="phone_headquarters"
                            >
                                <Form.Label>
                                    Teléfono:{" "}
                                    <span className="tw-text-red-500">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    name="phone_headquarters"
                                    placeholder="Ingrese teléfono"
                                    // onChange={changeHandler}
                                />
                            </Form.Group>
                        </div>
                    )}
                    {/* {errorValid != "" && (
                        <div className="tw-mb-2 -tw-mt-2">
                            <span className="tw-text-red-500">
                                {errorValid} *
                            </span>
                        </div>
                    )} */}

                    {/* {dataDocumentsToSel && (
                        <div>
                            <div className="tw-font-semibold tw-mb-2">
                                Cupones encontrados:{" "}
                                <span className="tw-text-green-500 tw-font-bold">
                                    {dataDocumentsToSel.length}
                                </span>
                            </div>
                            <div className="tw-h-16 tw-overflow-y-scroll">
                                <div className="tw-flex tw-flex-row tw-full tw-justify-between">
                                    <div className="tw-w-24 tw-text-center tw-font-semibold">
                                        Costo
                                    </div>
                                    <div className="tw-w-40 tw-text-center tw-font-semibold">
                                        Proveedor
                                    </div>
                                    <div className="tw-w-24 tw-text-center tw-font-semibold">
                                        Vencimiento
                                    </div>
                                </div>
                                {dataDocumentsToSel.map((val, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="tw-flex tw-flex-row tw-full tw-justify-between">
                                                <div className="tw-w-24 tw-text-center">
                                                    $ {val.coupon.buy_value}
                                                </div>
                                                <div className="tw-w-40 tw-text-left">
                                                    {val.coupon.supplier}
                                                </div>
                                                <div className="tw-w-24 tw-text-right">
                                                    {moment(
                                                        val.coupon.date_end,
                                                    ).format("YYYY-MM-DD")}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )} */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Cancelar
                    </Button>
                    {/* <Button variant="primary" onClick={handleValidForm}>
                        Validar
                    </Button> */}
                    <Button
                        variant="purple"
                        className={`btn  ${isLoading && "btn-loader"}`}
                        onClick={handleSendForm}
                        disabled={dataDocumentsToSel ? false : true}
                    >
                        <span className="me-2">Crear</span>
                        {isLoading && (
                            <span className="loading">
                                <i className="ri-loader-2-fill fs-16"></i>
                            </span>
                        )}
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    );
};

export default SalesModal;
