import React from 'react';
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function Sidebar(props) {
    return (
        <div className={"sidebar"}>
            <div className="top"><span className="logo">admin</span></div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className={"icon"}/>
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineIcon className={"icon"}/>
                        <span>Users</span>
                    </li>
                    <li>
                        <Inventory2Icon className={"icon"}/>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon className={"icon"}/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className={"icon"}/>
                        <span>Delivery</span>
                    </li>

                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className={"icon"}/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className={"icon"}/>
                        <span>Notifications</span>
                    </li>

                    <p className="title">MAIN</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className={"icon"}/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className={"icon"}/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className={"icon"}/>
                        <span>Settings</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <AccountCircleOutlinedIcon className={"icon"}/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className={"icon"}/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
}

export default Sidebar;
