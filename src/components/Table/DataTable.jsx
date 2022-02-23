import axios from "axios";
import React from "react";
import MUIDataTable from "mui-datatables";
import CircleX from "../Icons/CircleX";
import CircleCheck from "../Icons/CircleCheck";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import {Button, Switch, Typography} from "@mui/material";


const baseURL = "https://scannerapi.byerline.me";

const columns = [
    {
        name: "id",
        label: "Product ID",
        options: {
            filter: false,
            customBodyRender: (value) => {
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            {value}
                        </div>
                    </div>
                )
            },
        }
    },
    {
        name: "brand",
        label: "Brand",
    },
    {
        name: "name",
        label: "Product Name",
    },
    {
        name: "URL",
        label: "URL",
        options: {
            filter: false,
            customBodyRender: (value) => {
                return (
                    <a href={value}>Product Link</a>
                );
            }
        }
    },
    {
        name: "regex",
        label: "Regex",
    },
    {
        name: "isFound",
        label: "Previously Found",
        options: {
            filter: false,
            customBodyRender: (value) => {
                if( value === true) {
                    return (
                        <div style={{display:"flex"}}>
                            <div style={{height:'40px',width: '40px', margin:"auto"}}>
                                <Tooltip title={"Has Been Found"}>
                                    <IconButton>
                                        <CircleCheck sx={{ color: "#6ed120" }} viewBox={"0 0 512 512"}/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div style={{display:"flex"}}>
                             <div style={{height:'40px',width: '40px', margin:"auto"}}>
                                 <Tooltip title={"Has Not Yet Been Found"}>
                                     <IconButton>
                                        <CircleX sx={{ color: "#fc3838" }} viewBox={"0 0 512 512"}/>
                                     </IconButton>
                                 </Tooltip>
                             </div>
                         </div>
                    )
                }
            },
        }
    },
    {
        name: "lastFound",
        label: "Date Last Found",
        options: {
            filter: false,
            customBodyRender: (value) => {
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            {value}
                        </div>
                    </div>
                )
            },
        }
    },
    {
        name: "numberOfTrials",
        label: "# of Attempts",
        options: {
            filter: false,
            customBodyRender: (value) => {
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            {value}
                        </div>
                    </div>
                )
            },
        }
    },
    {
        name: "isEnabled",
        label: "Is Active?",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta) => {
                if( value === true) {
                    return (
                        <div style={{display:"flex"}}>
                            <div style={{margin:"auto"}}>
                                <Tooltip title={"Turn Off to Disable Searching"}>
                                    <Switch defaultChecked onChange={()=> {
                                        handleDisableSearch(tableMeta.rowData[0])
                                    }}/>
                                </Tooltip>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div style={{display:"flex"}}>
                            <div style={{margin:"auto"}}>
                                <Tooltip title={"Turn On to Enable Searching"}>
                                    <Switch onChange={()=> {
                                        handleEnableSearch(tableMeta.rowData[0])
                                    }}/>
                                </Tooltip>
                            </div>
                        </div>
                    )
                }
            },
        }
    },
];

const handleDisableSearch = (productID) => {
    axios.get(baseURL + "/update/" + productID.toString() + "/false").then(() => {});
};

const handleEnableSearch = (productID) => {
    axios.get(baseURL + "/update/" + productID.toString() + "/true").then(() => {});
};

export default function DataTable() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL + "/data").then((response) => {
            setData(response.data);
        });
    }, []);

    if (!data) return null;

    const options = {
        selectableRows: 'none',
        print: false,
        filter: false,
        download: false,
        viewColumns: false,
        rowsPerPage: 10
    };

    const handleScan = () => {
        axios.get(baseURL + "/scan").then((response) => {setData(response.data)});
    };

    return (
        <div>
            <div style={{padding:"15px"}}>
                <Typography variant={"h5"}> <strong>Details:</strong></Typography>
                <Typography variant={"h6"}> <strong>Scanner Last Ran:</strong> {data.lastUpdated}</Typography>
                <Typography variant={"h6"}> <strong>Successfully Found Products:</strong> {data.numberFound}</Typography>
                <Button variant={"outlined"} onClick={handleScan}>Scan Now</Button>
            </div>
            <div style={{padding:"15px"}}>
                <MUIDataTable
                    title={"Product Scanner List"}
                    data={data.products}
                    columns={columns}
                    options={options}
                />
            </div>
        </div>
    );
}
