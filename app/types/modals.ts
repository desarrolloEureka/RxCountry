export interface ModalParamsCsv {
    handleShowCsv: boolean;
    setHandleShowCsv: (e: boolean) => void;
    reference: string;
    title: string;
}

export interface ModalParamsMainForm {
    handleShowSales: boolean;
    setHandleShowSales: (e: boolean) => void;
    reference: string;
    title: string;
}

export interface ModalParamsPdf {
    handleShowPdf: boolean;
    setHandleShowPdf: (e: boolean) => void;
    reference: string;
    title: string;
}

export interface ModalParams {
    handleShow: boolean;
    setHandleShow: (e: boolean) => void;
    reference: string;
    title: string;
}
