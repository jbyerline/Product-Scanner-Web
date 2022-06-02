import axios from "axios";
import React from "react";
import MUIDataTable from "mui-datatables";
import CircleX from "../Icons/CircleX";
import CircleCheck from "../Icons/CircleCheck";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import {Button, Stack, Typography, Card, CardHeader, CardContent} from "@mui/material";
import {makeStyles} from "@mui/styles"
import AntSwitch from "../Switch/AntSwitch";
import BasicTable from "../Table/BasicTable";


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
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={0} onClick={() => updateDirection(0)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
        }
    },
    {
        name: "brand",
        label: "Brand",
        options: {
            customBodyRender: (value) => {
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            {value}
                        </div>
                    </div>
                )
            },
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={1} onClick={() => updateDirection(1)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
        }
    },
    {
        name: "name",
        label: "Product Name",
        options: {
            customBodyRender: (value) => {
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            {value}
                        </div>
                    </div>
                )
            },
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={2} onClick={() => updateDirection(2)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
        }
    },
    {
        name: "productURL",
        label: "Product URL",
        options: {
            sort: false,
            customBodyRender: (value) => {
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            <a href={value} target="_blank" rel="noreferrer">Product Link</a>
                        </div>
                    </div>
                );
            },
            customHeadRender: (columnMeta) => (
                <th key={3} >
                    {columnMeta.label}
                </th>
            )
        }
    },
    {
        name: "scanURL",
        label: "Scanner URL",
        options: {
            sort: false,
            display: false,
            customBodyRender: (value) => {
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            <a href={value} target="_blank" rel="noreferrer">Scan Link</a>
                        </div>
                    </div>
                );
            },
            customHeadRender: (columnMeta) => (
                <th key={3} >
                    {columnMeta.label}
                </th>
            )
        }
    },
    {
        name: "regex",
        label: "Regex",
        options: {
            display: false,
            customBodyRender: (value) => {
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            {value}
                        </div>
                    </div>
                )
            },
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={4} onClick={() => updateDirection(4)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
        }
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
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={5} onClick={() => updateDirection(5)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
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
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={6} onClick={() => updateDirection(6)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
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
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={7} onClick={() => updateDirection(7)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
        }
    },
    {
        name: "isEnabled",
        label: "Is Active?",
        options: {
            filter: false,
            sort: true,
            customBodyRender: (value, tableMeta) => {
                if( value === true) {
                    return (
                        <div style={{display:"flex"}}>
                            <div style={{margin:"auto"}}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography>Off</Typography>
                                    <AntSwitch defaultChecked onChange={(e)=> {
                                        handleUpdateSearch(e, tableMeta)
                                    }}/>
                                    <Typography>On</Typography>
                                </Stack>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div style={{display:"flex"}}>
                            <div style={{margin:"auto"}}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography>Off</Typography>
                                    <AntSwitch onChange={(e)=> {
                                        handleUpdateSearch(e, tableMeta)
                                    }}/>
                                    <Typography>On</Typography>
                                </Stack>
                            </div>
                        </div>
                    )
                }
            },
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={8} onClick={() => updateDirection(8)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
        }
    },
    {
        name: "contactNumbers",
        label: "Contact Numbers",
        options: {
            filter: false,
            display: false,
            customBodyRender: (value) => {
                let numbers = [];
                value.forEach((number) => {
                    if(number){
                        const newNum = formatPhoneNumber(number)
                        numbers.push(newNum)
                    }
                })
                return (
                    <div style={{display:"flex"}}>
                        <div style={{margin:"auto"}}>
                            {numbers.map((item,i) => <li key={i} style={{listStyleType: "none"}}>{item}</li>)}
                        </div>
                    </div>
                )
            },
            customHeadRender: (columnMeta, updateDirection) => (
                <th key={9} onClick={() => updateDirection(9)} style={{cursor: 'pointer'}}>
                    {columnMeta.label}
                </th>
            )
        }
    },
];

const options = {
    download: false,
    filter: false,
    search: false,
    print: false,
    selectableRows: "none",
    customFooter: (()=>{
        return null
    }),
    responsive: "verticalAlways"
};

const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

const handleUpdateSearch = (e, tableMeta) => {
    const productID = tableMeta.rowData[0];
    axios.get(baseURL + "/update/" + productID.toString() + "/" + e.target.checked.toString()).then(() => {});
};

const useStyles = makeStyles({
    table: {
        minWidth: 368,
        "& .MuiTableHead-root": {
            border: "1px solid rgba(224, 224, 224, 1)",
            height: "75px"
        },
        width: 368,
    },
    cards: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        margin: "10px",
    },
});

export default function CardView() {
    const classes = useStyles();
    const [data, setData] = React.useState(null);
    const [sortedProducts, setSortedProducts] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL + "/data").then((response) => {
            setData(response.data);
            setSortedProducts(response.data.products.sort((a, b) => b.isEnabled - a.isEnabled));
        });
    }, []);

    if (!data || !sortedProducts) return null;

   const handleScan = () => {
        axios.get(baseURL + "/scan").then((response) => {setData(response.data)});
    };

   if (!data){
       return (<p> no data</p>);
   } else {
       console.log(data)
       return (
           <div>
               <div style={{padding: "15px"}}>
                   <Typography variant={"h5"}> <strong>Details:</strong></Typography>
                   <Typography variant={"h6"}> <strong>Scanner Last Ran:</strong> {data.lastUpdated}</Typography>
                   <Typography variant={"h6"}> <strong>Successfully Found Products:</strong> {data.numberFound}
                   </Typography>
                   <Button variant={"outlined"} onClick={handleScan}>Scan Now</Button>
               </div>
               <div className={classes.cards}>
                   {data ? (
                       data.products.map((item) => (
                           <Card sx={{ width: 400 }}>
                               {/*<CardHeader title={item.name} />*/}
                               <CardContent>
                                   <MUIDataTable
                                       className={classes.table}
                                       title={item.name}
                                       data={[item]}
                                       columns={columns}
                                       options={options}
                                   />
                               </CardContent>
                           </Card>
                       ))
                   ) : (
                       <p>N/A</p>
                   )}
               </div>
           </div>
       );
   }
}
