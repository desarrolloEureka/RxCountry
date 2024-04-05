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
        errorValid,
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
                        <FormComponent
                            reference={reference}
                            handleShowSales={handleShowSales}
                            setHandleShowSales={setHandleShowSales}
                            title={""}
                        />
                        {errorValid != "" && (
                            <div className="tw-mb-2 -tw-mt-2">
                                <span className="tw-text-red-500">
                                    {errorValid} *
                                </span>
                            </div>
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
        )
    );
};

export default SalesModal;
