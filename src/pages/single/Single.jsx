import React from 'react';
import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import Table from "../../components/table/Tables";


function Single(props) {

    const data = [
        {name:"January", Total: 1200},
        {name:"February", Total: 2100},
        {name:"March", Total: 900},
        {name:"April", Total: 1500},
        {name:"May", Total: 800},
        {name:"June", Total: 2000},
    ];

    return (
        <div className={"single"}>
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://i1.sndcdn.com/artworks-8oF8tjvyjmdyWUGE-jLCOpw-t500x500.jpg"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Daenerys Targaryen </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemKey">daenerys@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemKey">+1 4567 89 98</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Adress:</span>
                                    <span className="itemKey">Elton st. 234 Garden Yd. NewYork</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemKey">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                            <div className="title">User Spending ( Last 6 Months )</div>
                            <ResponsiveContainer width="100%" height="100%" aspect={4/1}>
                                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" stroke={"gray"}/>
                                    <CartesianGrid strokeDasharray="3 3" className={"chartGrid"} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <Table/>
                </div>
            </div>
        </div>
    );
}

export default Single;
