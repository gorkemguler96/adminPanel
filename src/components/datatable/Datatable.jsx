import React from 'react';
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColums, userRows} from "../../datatablesource";


function Datatable(props) {

    const actionColumn = [{field: "action", headerName:"Action", width:390, renderCell:()=>{
        return(
            <div className={"cellAction"}>
                <div className={"viewButton"}>View</div>
                <div className={"deleteButton"}>Delete</div>
            </div>
        )
        }}]

    return (
            <div className={"datatable"} style={{ height: 500, width: '96.4%' }}>
                <DataGrid
                    rows={userRows}
                    columns={userColums.concat(actionColumn)}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                />
            </div>
    );
}

export default Datatable;
