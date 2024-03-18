import { Button, Form, Modal } from 'react-bootstrap';
import SalesHook from './hook/SalesHook';
import { ModalParamsSales } from '@/types/modals';
import dynamic from 'next/dynamic';
import Marks from '../rangleSliderData/RangleSliderData';
import moment from 'moment';
const Select = dynamic(() => import('react-select'), { ssr: false });

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
          <Modal.Title as='h6'>{`Distribuye ${title} a tus clientes`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='tw-px-8'>
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
          <Form.Group className='mb-3' controlId='sold_value'>
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
                Fecha de veincimiento:{' '}
                <span className='tw-text-red-500'>{nextDate}</span>
              </div>
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='limit'>
            <Form.Label>
              Cantidad: <span className='tw-text-red-500'>*</span>
            </Form.Label>
            <Form.Control
              type={'number'}
              name='limit'
              placeholder='Indefinido'
              onChange={limitHandler}
            />
          </Form.Group>
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
              Fecha de veincimiento:{' '}
              <span className='tw-text-red-500'>{nextDate}</span>
            </div>
          </div> */}
          <div className='tw-mb-4'>
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
          </div>
          <div className='tw-mb-4 tw-mt-2'>
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
          </div>
          <Form.Group className='mb-3' controlId='sold_value'>
            <Form.Label>
              Valor: <span className='tw-text-red-500'>*</span>
            </Form.Label>
            <Form.Control
              type='number'
              name='sold_value'
              placeholder='30000'
              onChange={changeHandler}
            />
          </Form.Group>
          {errorValid != '' && (
            <div className='tw-mb-2 -tw-mt-2'>
              <span className='tw-text-red-500'>{errorValid} *</span>
            </div>
          )}

          {dataDocumentsToSel && (
            <div>
              <div className='tw-font-semibold tw-mb-2'>
                Cupones encontrados:{' '}
                <span className='tw-text-green-500 tw-font-bold'>
                  {dataDocumentsToSel.length}
                </span>
              </div>
              <div className='tw-h-16 tw-overflow-y-scroll'>
                <div className='tw-flex tw-flex-row tw-full tw-justify-between'>
                  <div className='tw-w-24 tw-text-center tw-font-semibold'>
                    Costo
                  </div>
                  <div className='tw-w-40 tw-text-center tw-font-semibold'>
                    Proveedor
                  </div>
                  <div className='tw-w-24 tw-text-center tw-font-semibold'>
                    Vencimiento
                  </div>
                </div>
                {dataDocumentsToSel.map((val, index) => {
                  return (
                    <div key={index}>
                      <div className='tw-flex tw-flex-row tw-full tw-justify-between'>
                        <div className='tw-w-24 tw-text-center'>
                          $ {val.coupon.buy_value}
                        </div>
                        <div className='tw-w-40 tw-text-left'>
                          {val.coupon.supplier}
                        </div>
                        <div className='tw-w-24 tw-text-right'>
                          {moment(val.coupon.date_end).format('YYYY-MM-DD')}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='light' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='primary' onClick={handleValidForm}>
            Validar
          </Button>
          <Button
            variant='purple'
            className={`btn  ${isLoading && 'btn-loader'}`}
            onClick={handleSendForm}
            disabled={dataDocumentsToSel ? false : true}
          >
            <span className='me-2'>Enviar</span>
            {isLoading && (
              <span className='loading'>
                <i className='ri-loader-2-fill fs-16'></i>
              </span>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    )
  );
};

export default SalesModal;
