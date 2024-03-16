'use client';
import { Card, Col, Row } from 'react-bootstrap';
import FormModal from '../modal/formModal/FormModal';
import CSVReader from '../uploadCsv/UploadCsv';
import { ExportCSV } from './dataTables/dataTables';
import DataTablesHook from './hook/DataTablesHook';
import SalesModal from '../sales/SalesModal';
import { DataTableComponentProps } from '@/types/tables';

const DataTableComponent = ({
  componentTitle,
  componentDescription,
  tableTitle,
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
  } = DataTablesHook();

  return (
    dataTable && (
      <Row className='row-sm'>
        <Col lg={12}>
          <Card className='custom-card'>
            <Card.Body>
              <div>
                <h6 className='main-content-label mb-1'>{componentTitle}</h6>
                <p className='text-muted card-sub-title'>
                  {componentDescription}
                </p>
              </div>

              <div className='table-responsive'>
                <ExportCSV
                  onUploadDataModalPdf={onUploadDataModalPdf}
                  onUploadDataModalCsv={onUploadDataModalCsv}
                  onSalesModal={onSalesModal}
                  data={data}
                  tableData={dataTable}
                  columns={columns}
                  tableTitle={tableTitle}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <FormModal
          handleShowPdf={handleShowPdf}
          setHandleShowPdf={setHandleShowPdf}
        />
        <CSVReader
          handleShowCsv={handleShowCsv}
          setHandleShowCsv={setHandleShowCsv}
        />
        <SalesModal
          handleShowSales={handleShowSales}
          setHandleShowSales={setHandleShowSales}
        />
      </Row>
    )
  );
};

export default DataTableComponent;
