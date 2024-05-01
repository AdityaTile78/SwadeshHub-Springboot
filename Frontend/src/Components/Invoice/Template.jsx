// import React, { useRef, useState } from 'react';
// import ReactPrint from 'react-to-print';
// import Barcode from 'react-barcode';
// import { Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// import { Dialog, DialogTitle, DialogContent } from '@mui/material';
// import { Close } from '@mui/icons-material';

// function PdfTemplate(props) {
//     const ref = useRef();
//     const [openAirPopup, setAirPopup] = useState(false);

//     return (
//         <>
//             <div className="container" ref={ref}>
//                 <div className="container">
//                     <div className="row">
//                         <div>
//                             <div className="col-md-12">
//                                 <div className="row">
//                                     <div className="col-md-4 brcode">
//                                         <Barcode value={`4n%${props.order.ordId}+ut%`} width={1} height={50} displayValue={false} />
//                                     </div>
//                                     <div className="col-md-8 text-right bbc">
//                                         <h4 style={{ color: '#325aa8' }}><strong>Swadeshi Hub</strong></h4>
//                                         <p>(+91) 9702887349</p>
//                                         <p>swadeshi_hub@gmail.com</p>
//                                     </div>
//                                 </div>
//                                 <br />
//                                 <div className="row">
//                                     <div className="col-md-12 text-center">
//                                         <h2 style={{ color: '#325aa8' }}>INVOICE</h2>
//                                         <h5> Id: {props.order.ordId}</h5>
//                                     </div>
//                                 </div>
//                                 <br />
//                                 <h2>Order Details</h2>
//                                 <div>
//                                     <TableContainer>
//                                         <Table>
//                                             <TableBody>
//                                                 <TableRow>
//                                                     <TableCell>Payment Id</TableCell>
//                                                     <TableCell>{props.order.paymentId}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>First Name</TableCell>
//                                                     <TableCell>{props.order.firstName}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Last Name</TableCell>
//                                                     <TableCell>{props.order.lastName}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Email</TableCell>
//                                                     <TableCell>{props.order.email}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Mobile No</TableCell>
//                                                     <TableCell>{props.order.mobile}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Order Date</TableCell>
//                                                     <TableCell>{props.order.orderDate}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Shipped Date</TableCell>
//                                                     <TableCell>{props.order.shippedDate}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Delivered Date</TableCell>
//                                                     <TableCell>{props.order.deliveredDate}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Address</TableCell>
//                                                     <TableCell>{props.order.address}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>City</TableCell>
//                                                     <TableCell>{props.order.city}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Pincode</TableCell>
//                                                     <TableCell>{props.order.pincode}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Payment Mode</TableCell>
//                                                     <TableCell>{props.order.paymentMode}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Amount</TableCell>
//                                                     <TableCell>{props.order.totalAmount}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell><strong>Total:</strong></TableCell>
//                                                     <TableCell><strong>₹ {props.order.totalAmount}</strong></TableCell>
//                                                 </TableRow>
//                                             </TableBody>
//                                         </Table>
//                                     </TableContainer>
//                                 </div>

//                                 <br />
//                                 <h2>Product Details</h2>
//                                 <div>
//                                     <TableContainer>
//                                         <Table>
//                                             <TableBody>
//                                                 <TableRow>
//                                                     <TableCell>Product Id</TableCell>
//                                                     <TableCell>{props.order.product.id}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Product Name</TableCell>
//                                                     <TableCell>{props.order.product.name}</TableCell>
//                                                 </TableRow>
//                                                 <TableRow>
//                                                     <TableCell>Product Price</TableCell>
//                                                     <TableCell>{props.order.product.price}</TableCell>
//                                                 </TableRow>
//                                             </TableBody>
//                                         </Table>
//                                     </TableContainer>
//                                 </div>

//                                 <div>
//                                     <div className="col-md-12">
//                                         <p><b>Date :</b> {props.date} </p>
//                                         <br />
//                                         <p><b>Name : Ajinkya Dhumal</b></p>
//                                         <p><b>Contact: (+91) 9702887350</b></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <ReactPrint
//                 trigger={() => <Button variant="contained">Print</Button>}
//                 content={() => ref.current}
//                 documentTitle={`INVOICE ${props.InvoiceNumber}`}
//             />
//         </>
//     );
// }

// export default PdfTemplate;

import React, { useRef, useState } from 'react';
import ReactPrint from 'react-to-print';
import Barcode from 'react-barcode';
import { Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material';

function PdfTemplate(props) {
    const ref = useRef();
    const [openAirPopup, setAirPopup] = useState(false);

    return (
        <>
            <div className="container" ref={ref}>
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4 brcode">
                                        <Barcode value={`4n%${props.order.ordId}+ut%`} width={1} height={50} displayValue={false} />
                                    </div>
                                    <div className="col-md-8 text-right bbc">
                                        <h4 style={{ color: '#325aa8' }}><strong>Swadeshi Hub</strong></h4>
                                        <p>(+91) 9702887349</p>
                                        <p>swadeshi_hub@gmail.com</p>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h2 style={{ color: '#325aa8' }}>INVOICE</h2>
                                        <h5> Id: {props.order.ordId}</h5>
                                    </div>
                                </div>
                                <br />
                                <h2>Order Details</h2>
                                <div>
                                    <TableContainer>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Payment Id</TableCell>
                                                    <TableCell>{props.order.paymentId}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>First Name</TableCell>
                                                    <TableCell>{props.order.firstName}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Last Name</TableCell>
                                                    <TableCell>{props.order.lastName}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Email</TableCell>
                                                    <TableCell>{props.order.email}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Mobile No</TableCell>
                                                    <TableCell>{props.order.mobile}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Order Date</TableCell>
                                                    <TableCell>{props.order.orderDate}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Shipped Date</TableCell>
                                                    <TableCell>{props.order.shippedDate}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Delivered Date</TableCell>
                                                    <TableCell>{props.order.deliveredDate}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Address</TableCell>
                                                    <TableCell>{props.order.address}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>City</TableCell>
                                                    <TableCell>{props.order.city}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Pincode</TableCell>
                                                    <TableCell>{props.order.pincode}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Payment Mode</TableCell>
                                                    <TableCell>{props.order.paymentMode}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Amount</TableCell>
                                                    <TableCell>{props.order.totalAmount}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><strong>Total:</strong></TableCell>
                                                    <TableCell><strong>₹ {props.order.totalAmount}</strong></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>

                                <br />
                                <h2>Product Details</h2>
                                <div>
                                    <TableContainer>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Product Id</TableCell>
                                                    <TableCell>{props.order.product.id}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Product Name</TableCell>
                                                    <TableCell>{props.order.product.name}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Product Price</TableCell>
                                                    <TableCell>{props.order.product.price}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>

                                <div>
                                    <div className="col-md-12">
                                        <p><b>Date :</b> {props.date} </p>
                                        <br />
                                        <p><b>Name : Ajinkya Dhumal</b></p>
                                        <p><b>Contact: (+91) 9702887350</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReactPrint
                trigger={() => <Button variant="contained">Print</Button>}
                content={() => ref.current}
                documentTitle={`INVOICE ${props.InvoiceNumber}`}
            />
        </>
    );
}

export default PdfTemplate;
