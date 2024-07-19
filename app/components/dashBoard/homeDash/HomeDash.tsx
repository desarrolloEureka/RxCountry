import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
import Image from "next/image";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});
import * as eDashBoard from "@/data/dashBoard";
import WorldMap from "react-svg-worldmap";
import Link from "next/link";
import { main_logo_dark } from "@/globals/images";

const HomeDash = () => {
    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 }, // united states
        { country: "id", value: 264935824 }, // indonesia
        { country: "pk", value: 210797836 }, // pakistan
        { country: "br", value: 210301591 }, // brazil
        { country: "ng", value: 208679114 }, // nigeria
        { country: "bd", value: 161062905 }, // bangladesh
        { country: "ru", value: 141944641 }, // russia
        { country: "mx", value: 127318112 }, // mexico
    ];
    return (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-max-h-screen tw-h-[1440px]">
            <img src={main_logo_dark.src} className="tw-h-1/4" alt="img" />
            <h3 className="tw-text-8xl tw-text-slate-500 text-center">
                Bienvenidos a RX Country BackOffice
            </h3>
        </div>
        // <>
        //   <div className='row row-sm'>
        //     <div className='col-sm-12 col-md-6 col-lg-6 col-xl-4'>
        //       <div className='card custom-card'>
        //         <div className='card-body'>
        //           <div className='card-item'>
        //             <div className='card-item-icon card-icon'>
        //               <svg
        //                 className='text-primary'
        //                 xmlns='http://www.w3.org/2000/svg'
        //                 enableBackground='new 0 0 24 24'
        //                 height='24'
        //                 viewBox='0 0 24 24'
        //                 width='24'
        //               >
        //                 <g>
        //                   <rect height='14' opacity='.3' width='14' x='5' y='5' />
        //                   <g>
        //                     <rect fill='none' height='24' width='24' />
        //                     <g>
        //                       <path d='M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z' />
        //                       <rect height='5' width='2' x='7' y='12' />
        //                       <rect height='10' width='2' x='15' y='7' />
        //                       <rect height='3' width='2' x='11' y='14' />
        //                       <rect height='2' width='2' x='11' y='10' />
        //                     </g>
        //                   </g>
        //                 </g>
        //               </svg>
        //             </div>
        //             <div className='card-item-title mb-2'>
        //               <label className='main-content-label fs-13 fw-bold mb-1'>
        //                 Total Revenue
        //               </label>
        //               <span className='d-block fs-12 mb-0 text-muted'>
        //                 Previous month vs this months
        //               </span>
        //             </div>
        //             <div className='card-item-body'>
        //               <div className='card-item-stat'>
        //                 <h4 className='fw-bold'>$5,900.00</h4>
        //                 <small>
        //                   <b className='text-success'>55%</b> higher
        //                 </small>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className='col-sm-12 col-md-6 col-lg-6 col-xl-4'>
        //       <div className='card custom-card'>
        //         <div className='card-body'>
        //           <div className='card-item'>
        //             <div className='card-item-icon card-icon'>
        //               <svg
        //                 xmlns='http://www.w3.org/2000/svg'
        //                 height='24'
        //                 viewBox='0 0 24 24'
        //                 width='24'
        //               >
        //                 <path d='M0 0h24v24H0V0z' fill='none' />
        //                 <path
        //                   d='M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z'
        //                   opacity='.3'
        //                 />
        //                 <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z' />
        //               </svg>
        //             </div>
        //             <div className='card-item-title mb-2'>
        //               <label className='main-content-label fs-13 fw-bold mb-1'>
        //                 New Employees
        //               </label>
        //               <span className='d-block fs-12 mb-0 text-muted'>
        //                 Employees joined this month
        //               </span>
        //             </div>
        //             <div className='card-item-body'>
        //               <div className='card-item-stat'>
        //                 <h4 className='fw-bold'>15</h4>
        //                 <small>
        //                   <b className='text-success'>5%</b> Increased
        //                 </small>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className='col-sm-12 col-md-12 col-lg-12 col-xl-4'>
        //       <div className='card custom-card'>
        //         <div className='card-body'>
        //           <div className='card-item'>
        //             <div className='card-item-icon card-icon'>
        //               <svg
        //                 className='text-primary'
        //                 xmlns='http://www.w3.org/2000/svg'
        //                 height='24'
        //                 viewBox='0 0 24 24'
        //                 width='24'
        //               >
        //                 <path d='M0 0h24v24H0V0z' fill='none' />
        //                 <path
        //                   d='M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z'
        //                   opacity='.3'
        //                 />
        //                 <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z' />
        //               </svg>
        //             </div>
        //             <div className='card-item-title  mb-2'>
        //               <label className='main-content-label fs-13 fw-bold mb-1'>
        //                 Total Expenses
        //               </label>
        //               <span className='d-block fs-12 mb-0 text-muted'>
        //                 Previous month vs this months
        //               </span>
        //             </div>
        //             <div className='card-item-body'>
        //               <div className='card-item-stat'>
        //                 <h4 className='fw-bold'>$8,500</h4>
        //                 <small>
        //                   <b className='text-danger'>12%</b> decrease
        //                 </small>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <Row className='row-sm'>
        //     <Col xxl={3} xl={6} md={12} lg={6}>
        //       <Card className='custom-card'>
        //         <Card.Header className='border-bottom-0 pb-1'>
        //           <label className='main-content-label mb-2 pt-1'>
        //             Sales Activity
        //           </label>
        //           <p className='fs-12 mb-0 text-muted'>
        //             Sales activities are the tactics that salespeople use to achieve
        //             their goals and objective
        //           </p>
        //         </Card.Header>
        //         <div className='product-timeline card-body pt-3 mt-1'>
        //           <ul className='timeline-1 mb-0'>
        //             <li className='mt-0'>
        //               <i className='ti-pie-chart product-icon'></i>
        //               <span className='fw-semibold mb-4 fs-14 '>
        //                 Total Products
        //               </span>
        //               <Link href='#!' className='float-end fs-11 text-muted'>
        //                 3 days ago
        //               </Link>
        //               <p className='mb-0 text-muted fs-12'>1.3k New Products</p>
        //             </li>
        //             <li className='mt-0'>
        //               <i className='mdi mdi-cart-outline product-icon'></i>
        //               <span className='fw-semibold mb-4 fs-14 '>Total Sales</span>
        //               <Link href='#!' className='float-end fs-11 text-muted'>
        //                 35 mins ago
        //               </Link>
        //               <p className='mb-0 text-muted fs-12'>1k New Sales</p>
        //             </li>
        //             <li className='mt-0'>
        //               <i className='ti-bar-chart-alt product-icon'></i>
        //               <span className='fw-semibold mb-4 fs-14 '>Total Revenue</span>
        //               <Link href='#!' className='float-end fs-11 text-muted'>
        //                 50 mins ago
        //               </Link>
        //               <p className='mb-0 text-muted fs-12'>23.5K New Revenue</p>
        //             </li>
        //             <li className='mt-0'>
        //               <i className='ti-wallet product-icon'></i>
        //               <span className='fw-semibold mb-4 fs-14 '>Total Profit</span>
        //               <Link href='#!' className='float-end fs-11 text-muted'>
        //                 1 hour ago
        //               </Link>
        //               <p className='mb-0 text-muted fs-12'>3k New profit</p>
        //             </li>
        //             <li className='mt-0 mb-0'>
        //               <i className='si si-eye product-icon'></i>
        //               <span className='fw-semibold mb-4 fs-14 '>
        //                 Customer Visits
        //               </span>
        //               <Link href='#!' className='float-end fs-11 text-muted'>
        //                 1 day ago
        //               </Link>
        //               <p className='mb-0 text-muted fs-12'>15% increased</p>
        //             </li>
        //           </ul>
        //         </div>
        //       </Card>
        //     </Col>
        //     <Col xxl={3} xl={6} md={12} lg={6}>
        //       <Card className='custom-card'>
        //         <Card.Header className='border-bottom-0 pb-1'>
        //           <label className='main-content-label mb-2 pt-1'>
        //             Top products
        //           </label>
        //           <p className='fs-12 mb-0 text-muted'>
        //             Top Trending Products to Sell Online At Your Ecommerce &
        //             Dropshipping Store.
        //           </p>
        //         </Card.Header>
        //         <Card.Body className='pt-0'>
        //           <ul className='top-selling-products pb-0 mb-0 ps-0'>
        //             <li className='product-item'>
        //               <div className='product-img'>
        //                 <img
        //                   src={'../../../assets/images/pngs/14.png'}
        //                   alt='png14'
        //                 />
        //               </div>
        //               <div className='product-info'>
        //                 <div className='product-name'>College Bag</div>
        //                 <div className='price'>Fashion</div>
        //               </div>
        //               <div className='product-amount'>
        //                 <div className='product-price'>$990.00</div>
        //                 <div className='items-sold'>10 Sold</div>
        //               </div>
        //             </li>
        //             <li className='product-item'>
        //               <div className='product-img'>
        //                 <img
        //                   src={'../../../assets/images/pngs/18.png'}
        //                   alt='png18'
        //                 />
        //               </div>
        //               <div className='product-info'>
        //                 <div className='product-name'>Smartwatch</div>
        //                 <div className='price'>Electronics</div>
        //               </div>
        //               <div className='product-amount'>
        //                 <div className='product-price'>$990.00</div>
        //                 <div className='items-sold'>10 Sold</div>
        //               </div>
        //             </li>
        //             <li className='product-item'>
        //               <div className='product-img'>
        //                 <img
        //                   src={'../../../assets/images/pngs/17.png'}
        //                   alt='png17'
        //                 />
        //               </div>
        //               <div className='product-info'>
        //                 <div className='product-name'>Chair</div>
        //                 <div className='price'>Furniture</div>
        //               </div>
        //               <div className='product-amount'>
        //                 <div className='product-price'>$990.00</div>
        //                 <div className='items-sold'>10 Sold</div>
        //               </div>
        //             </li>
        //             <li className='product-item'>
        //               <div className='product-img'>
        //                 <img
        //                   src={'../../../assets/images/pngs/16.png'}
        //                   alt='png16'
        //                 />
        //               </div>
        //               <div className='product-info'>
        //                 <div className='product-name'>Flowers Pot</div>
        //                 <div className='price'>Gardening</div>
        //               </div>
        //               <div className='product-amount'>
        //                 <div className='product-price'>$990.00</div>
        //                 <div className='items-sold'>10 Sold</div>
        //               </div>
        //             </li>
        //             <li className='product-item pb-0'>
        //               <div className='product-img'>
        //                 <img
        //                   src={'../../../assets/images/pngs/19.png'}
        //                   alt='png19'
        //                 />
        //               </div>
        //               <div className='product-info'>
        //                 <div className='product-name'>iPhone Mobile</div>
        //                 <div className='price'>Electronics</div>
        //               </div>
        //               <div className='product-amount'>
        //                 <div className='product-price'>$990.00</div>
        //                 <div className='items-sold'>10 Sold</div>
        //               </div>
        //             </li>
        //           </ul>
        //         </Card.Body>
        //       </Card>
        //     </Col>
        //     <div className='col-xxl-6 col-xl-12 col-md-12 col-lg-12'>
        //       <div className='card custom-card'>
        //         <div className='card-header border-bottom-0 pb-4'>
        //           <label className='main-content-label mb-2 pt-1'>
        //             Country Wise Sales
        //           </label>
        //           <p className='fs-12 mb-0 text-muted'>
        //             ​The global ecommerce sales in 2020 is expected to reach $4.453
        //             trillion this marks an increase of <b>22.5 %</b> percent from
        //             the previous year as the global ecommerce market.
        //           </p>
        //         </div>
        //         <div className='card-body'>
        //           <div className='row'>
        //             <div className='col-xl-8'>
        //               <div
        //                 id='users-map'
        //                 className='jvm-container d-flex justify-content-center'
        //                 style={{ backgroundColor: 'transparent' }}
        //               >
        //                 <WorldMap
        //                   color='#6259ca'
        //                   value-suffix='people'
        //                   size='md'
        //                   data={data}
        //                 />
        //               </div>
        //             </div>
        //             <div className='col-xl-4 col-md-12'>
        //               <div className='mb-3 pt-2'>
        //                 <h5 className='mb-2 d-block'>
        //                   <span className='fs-14'>Brazil</span>
        //                   <span className='float-end fs-14'>80%</span>
        //                 </h5>
        //                 <div className='progress ht-4 progress-md h-2'>
        //                   <div className='progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-80p'></div>
        //                 </div>
        //               </div>
        //               <div className='mb-3'>
        //                 <h5 className='mb-2 d-block'>
        //                   <span className='fs-14'>Russia</span>
        //                   <span className='float-end fs-14'>72%</span>
        //                 </h5>
        //                 <div className='progress ht-4 progress-md'>
        //                   <div className='progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-70p'></div>
        //                 </div>
        //               </div>
        //               <div className='mb-3'>
        //                 <h5 className='mb-2 d-block'>
        //                   <span className='fs-14'>Palestine</span>
        //                   <span className='float-end fs-14'>67%</span>
        //                 </h5>
        //                 <div className='progress progress-md  ht-4'>
        //                   <div className='progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-60p'></div>
        //                 </div>
        //               </div>
        //               <div className='mb-3'>
        //                 <h5 className='mb-2 d-block'>
        //                   <span className='fs-14'>Canada</span>
        //                   <span className='float-end fs-14'>53%</span>
        //                 </h5>
        //                 <div className='progress progress-md  ht-4'>
        //                   <div className='progress-bar progress-bar-animated progress-bar-striped bg-primary ht-4 wd-50p'></div>
        //                 </div>
        //               </div>
        //               <div className='mb-3'>
        //                 <h5 className='mb-2 d-block'>
        //                   <span className='fs-14'>Greenland</span>
        //                   <span className='float-end fs-14'>75%</span>
        //                 </h5>
        //                 <div className='progress progress-md  ht-4'>
        //                   <div className='progress-bar progress-bar-animated  progress-bar-striped bg-primary ht-4 wd-40p'></div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </Row>
        //   <Row className='row-sm'>
        //     <Col xxl={6} xl={12} lg={12} md={12}>
        //       <Card className='custom-card'>
        //         <Card.Header className=' border-bottom-0'>
        //           <label className='main-content-label my-auto pt-2'>
        //             Revenue Overview
        //           </label>
        //           <span className='d-block fs-12 mb-0 mt-1 text-muted'>
        //             An Overview. Revenue is the total amount of income generated by
        //             the sale of goods or services related to the {`company's`}{' '}
        //             primary operations.
        //           </span>
        //         </Card.Header>
        //         <Card.Body>
        //           <div className='chart-wrapper'>
        //             <ReactApexChart
        //               options={eDashBoard.Dashboard1.options}
        //               series={eDashBoard.Dashboard1.series}
        //               className='barchart'
        //               height={277}
        //               width={630}
        //               type='area'
        //             />
        //           </div>
        //         </Card.Body>
        //       </Card>
        //     </Col>
        //     <Col xxl={3} xl={6} md={12} lg={12}>
        //       <Card className='custom-card'>
        //         <Card.Header className='border-bottom-0 pb-0'>
        //           <label className='main-content-label mb-2 pt-1'>
        //             Recent Orders
        //           </label>
        //           <p className='fs-12 mb-0 text-muted'>
        //             An order is an {`investor's`} instructions to a broker or
        //             brokerage firm to purchase or sell
        //           </p>
        //         </Card.Header>
        //         <Card.Body className='sales-product-info pb-0'>
        //           <div id='recentorders' className='mt-0'>
        //             <ReactApexChart
        //               options={eDashBoard.radialbarchart.options}
        //               series={eDashBoard.radialbarchart.series}
        //               type='radialBar'
        //               height={270}
        //               width={300}
        //             />
        //           </div>
        //           <div className='row sales-product-infomation pb-0 mb-0 mx-auto wd-100p'>
        //             <div className='col-md-6 col justify-content-center text-center'>
        //               <p className='mb-0 d-flex justify-content-center '>
        //                 <span className='legend bg-primary brround'></span>
        //                 Delivered
        //               </p>
        //               <h3 className='mb-1 fw-bold'>5238</h3>
        //               <div className='d-flex justify-content-center '>
        //                 <p className='text-muted '>Last 6 months</p>
        //               </div>
        //             </div>
        //             <div className='col-md-6 col text-center float-end'>
        //               <p className='mb-0 d-flex justify-content-center '>
        //                 <span className='legend bg-light brround'></span>
        //                 Cancelled
        //               </p>
        //               <h3 className='mb-1 fw-bold'>3467</h3>
        //               <div className='d-flex justify-content-center '>
        //                 <p className='text-muted'>Last 6 months</p>
        //               </div>
        //             </div>
        //           </div>
        //         </Card.Body>
        //       </Card>
        //     </Col>
        //     <Col xxl={3} xl={6} md={12} sm={12}>
        //       <Card className='custom-card'>
        //         <Card.Header className='pb-0 border-bottom-0 '>
        //           <label className='main-content-label mb-2 pt-1'>Tickets</label>
        //           <p className='fs-12 mb-0 text-muted'>
        //             Sales activities are the tactics that salespeople use to achieve
        //           </p>
        //         </Card.Header>
        //         <Card.Body>
        //           <ul className='visitor mb-0 d-block users-images list-unstyled list-unstyled-border ht-340'>
        //             <li className='media d-flex mb-3 mt-0 pt-0'>
        //               <span className='me-3 rounded-circle avatar avatar-md'>
        //                 <img
        //                   src={'../../../assets/images/faces/3.jpg'}
        //                   alt='avatar'
        //                   className='rounded-circle avatar avatar-md'
        //                 />
        //               </span>
        //               <div className='media-body mb-1'>
        //                 <div className='float-end'>
        //                   <small>10-9-2018</small>
        //                 </div>
        //                 <h5 className='media-title fs-15 mb-0'>Vanessa</h5>
        //                 <span className='text-muted'>sed do eiusmod </span>
        //               </div>
        //             </li>
        //             <li className='media d-flex mb-3'>
        //               <div className='me-3 rounded-circle avatar avatar-md'>
        //                 <img
        //                   src={'../../../assets/images/faces/5.jpg'}
        //                   alt='avatar'
        //                   className='rounded-circle avatar avatar-md'
        //                 />
        //               </div>
        //               <div className='media-body mb-1'>
        //                 <div className='float-end'>
        //                   <small>15-9-2018</small>
        //                 </div>
        //                 <h5 className='media-title fs-15 mb-0'> Rutherford</h5>
        //                 <small className='text-muted'>sed do eiusmod </small>
        //               </div>
        //             </li>
        //             <li className='media d-flex mb-3'>
        //               <div className='me-3 rounded-circle avatar avatar-md'>
        //                 <img
        //                   src={'../../../assets/images/faces/7.jpg'}
        //                   alt='avatar'
        //                   className='rounded-circle avatar avatar-md'
        //                 />
        //               </div>
        //               <div className='media-body mb-1'>
        //                 <div className='float-end'>
        //                   <small>17-9-2018</small>
        //                 </div>
        //                 <h5 className='media-title fs-15 mb-0'>Elizabeth </h5>
        //                 <small className='text-muted'>sed do eiusmod </small>
        //               </div>
        //             </li>
        //             <li className='media d-flex mb-3'>
        //               <div className='me-3 rounded-circle avatar avatar-md'>
        //                 <img
        //                   src={'../../../assets/images/faces/4.jpg'}
        //                   alt='avatar'
        //                   className='rounded-circle avatar avatar-md'
        //                 />
        //               </div>
        //               <div className='media-body mb-1'>
        //                 <div className='float-end'>
        //                   <small>19-9-2018</small>
        //                 </div>
        //                 <h5 className='media-title fs-15 mb-0'>Anthony</h5>
        //                 <small className='text-muted'>sed do eiusmod </small>
        //               </div>
        //             </li>
        //             <li className='media d-flex mb-2'>
        //               <div className='me-3 rounded-circle avatar avatar-md'>
        //                 <img
        //                   src={'../../../assets/images/faces/9.jpg'}
        //                   alt='avatar'
        //                   className='rounded-circle avatar avatar-md'
        //                 />
        //               </div>
        //               <div className='media-body mb-1'>
        //                 <div className='float-end'>
        //                   <small>19-9-2018</small>
        //                 </div>
        //                 <h5 className='media-title fs-15 mb-0'>Anthony</h5>
        //                 <small className='text-muted'>sed do eiusmod </small>
        //               </div>
        //             </li>
        //           </ul>
        //         </Card.Body>
        //       </Card>
        //     </Col>
        //   </Row>
        // </>
    );
};

export default HomeDash;
