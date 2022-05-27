import React from 'react';
import './tables.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Tables(props) {

    const rows = [
        {
            id: 151643124,
            product:"Acer Nitro 5",
            img:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/131178-13_large.jpg",
            customer:"John Smith",
            date:"1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 151643125,
            product:"Playstation 5",
            img:"https://productimages.hepsiburada.net/s/43/375/10758729859122.jpg",
            customer:"Barbara Palvin",
            date:"1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 151643123,
            product:"Redragon S101",
            img:"https://productimages.hepsiburada.net/s/54/1500/11186429100082.jpg",
            customer:"Micheal Doe",
            date:"1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 151643231,
            product:"Razer Blade 15",
            img:"https://www.notebookcheck-tr.com/uploads/tx_nbc2/4zu3_Razer_Blade_15_Advanced_Model_2020.jpg",
            customer:"Jane Smith",
            date:"1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            id: 1516431321,
            product:"ASUS ROG Strix",
            img:"https://www.notebookcheck-tr.com/uploads/tx_nbc2/oasahxv162owufac_setting_000_1_90_end_1000.jpg",
            customer:"Görkem GÜLER",
            date:"1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },

    ]

    return (
        <TableContainer component={Paper} className={"table"}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={"tableCell"}>Tracking ID</TableCell>
                        <TableCell className={"tableCell"}>Product</TableCell>
                        <TableCell className={"tableCell"}>Customer</TableCell>
                        <TableCell className={"tableCell"}>Date</TableCell>
                        <TableCell className={"tableCell"}>Amount</TableCell>
                        <TableCell className={"tableCell"}>Payment Method</TableCell>
                        <TableCell className={"tableCell"}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className={"tableCell"}>{row.id}</TableCell>
                            <TableCell className={"tableCell"} >
                                <div className="cellWrapper">
                                    <img className={"image"} src={row.img} alt=""/>
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className={"tableCell"} >{row.customer}</TableCell>
                            <TableCell className={"tableCell"} >{row.date}</TableCell>
                            <TableCell className={"tableCell"} >{row.amount}</TableCell>
                            <TableCell className={"tableCell"} >{row.method}</TableCell>
                            <TableCell className={"tableCell"} >
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Tables;
