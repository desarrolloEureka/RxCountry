"use client";
import { Card, Col, Row } from "react-bootstrap";
import FormModal from "../modal/formModal/FormModal";
import CSVReader from "../uploadCsv/UploadCsv";
import { ExportCSV } from "./dataTables/dataTables";
import DataTablesHook from "./hook/DataTablesHook";
import MainFormModal from "../mainForm/mainFormModal";
import { DataTableComponentProps } from "@/types/tables";

const DataTableComponent = ({
    componentTitle,
    componentDescription,
    tableTitle,
    reference,
}: DataTableComponentProps) => {
    const {
        columns,
        data,
        handleShowCsv,
        setHandleShowCsv,
        handleShowPdf,
        setHandleShowPdf,
        onUploadDataModalCsv,
        onUploadDataModalPdf,
        onSalesModal,
        dataTable,
        setHandleShowSales,
        handleShowSales,
    } = DataTablesHook(reference);

    return (
        dataTable && (
            <Row className="row-sm">
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">
                                    {componentTitle}
                                </h6>
                                <p className="text-muted card-sub-title">
                                    {componentDescription}
                                </p>
                            </div>

                            <div className="table-responsive">
                                <ExportCSV
                                    // onUploadDataModalPdf={onUploadDataModalPdf}
                                    // onUploadDataModalCsv={onUploadDataModalCsv}
                                    onSalesModal={onSalesModal}
                                    data={data}
                                    tableData={dataTable}
                                    columns={columns}
                                    tableTitle={tableTitle}
                                    // reference={reference}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <FormModal
                    handleShowPdf={handleShowPdf}
                    setHandleShowPdf={setHandleShowPdf}
                    title={tableTitle}
                    reference={reference}
                />
                <CSVReader
                    handleShowCsv={handleShowCsv}
                    setHandleShowCsv={setHandleShowCsv}
                    title={tableTitle}
                    reference={reference}
                />
                <MainFormModal
                    handleShowSales={handleShowSales}
                    setHandleShowSales={setHandleShowSales}
                    title={tableTitle}
                    reference={reference}
                />
            </Row>
        )
    );
};

export default DataTableComponent;
