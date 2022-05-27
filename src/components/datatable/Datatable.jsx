import React, {useState} from 'react';
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColums, userRows} from "../../datatablesource";
import {Link} from 'react-router-dom'


function Datatable(props) {

    const [data,setData]=useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));
    }

    const actionColumn = [{field: "action", headerName:"Action", width:390, renderCell:(params)=>{
        return(
            <div className={"cellAction"}>
                <Link to={"/users/test"} style={{textDecoration:"none"}}>
                    <div className={"viewButton"}>View</div>
                </Link>
                <div onClick={(e)=>handleDelete(params.row.id)} className={"deleteButton"}>Delete</div>
            </div>
        )
        }}]

    return (
            <div className={"datatable"} style={{ height: 500, width: '96.4%' }}>
                <div className="dataTableTitle">
                    Add New User
                    <Link to={"/users/new"} style={{textDecoration:"none"}} className={"link"}>
                        Add New
                    </Link>
                </div>
                <DataGrid
                    className={"dataGrid"}
                    rows={data}
                    columns={userColums.concat(actionColumn)}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                />
            </div>
    );
}

export default Datatable;
