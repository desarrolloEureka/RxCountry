import { ModalParamsSales } from "@/types/modals";
import { Button, Form, Modal } from "react-bootstrap";
import FormComponent from "../form/FormComponent";
import SalesHook from "./hook/SalesHook";

const SalesModal = ({
    handleShowSales,
    setHandleShowSales,
    title,
    reference,
}: ModalParamsSales) => {
    const {
        handleSendForm,
        handleClose,
        handleReset,
        show,
        isLoading,
        customers,
        suppliers,
        dataDocumentsToSel,
    } = SalesHook({
        handleShowSales,
        setHandleShowSales,
        title,
        reference,
    });

    return (
        customers &&
        suppliers && (
            <Modal size="xl" centered show={show} onHide={handleClose}>
                <Form onReset={handleReset}>
                    <Modal.Header closeButton>
                        <Modal.Title as="h6">{`Nuevo Registro en la tabla de ${title}`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="tw-px-8">
                        <FormComponent reference={reference} />
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
                        <Button type="reset" variant="primary">
                            Limpiar
                        </Button>
                        {/* <Button variant="primary" onClick={handleValidForm}>
                            Validar
                        </Button> */}
                        <Button
                            variant="primary"
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
                </Form>
            </Modal>
        )
    );
};

export default SalesModal;
