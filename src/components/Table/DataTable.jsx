import axios from "axios";
import React from "react";
import MUIDataTable from "mui-datatables";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CircleCheck from "../Icons/CircleCheck";
import CircleX from "../Icons/CircleX";
import AntSwitch from "../Switch/AntSwitch";

const baseURL = "https://scannerapi.byerline.me";

const columns = [
  {
    name: "id",
    label: "Product ID",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
      customHeadRender: (columnMeta, updateDirection) => (
        <th
          key={0}
          onClick={() => updateDirection(0)}
          style={{ cursor: "pointer" }}
        >
          {columnMeta.label}
        </th>
      ),
    },
  },
  {
    name: "brand",
    label: "Brand",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
      customHeadRender: (columnMeta, updateDirection) => (
        <th
          key={1}
          onClick={() => updateDirection(1)}
          style={{ cursor: "pointer" }}
        >
          {columnMeta.label}
        </th>
      ),
    },
  },
  {
    name: "name",
    label: "Product Name",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
      customHeadRender: (columnMeta, updateDirection) => (
        <th
          key={2}
          onClick={() => updateDirection(2)}
          style={{ cursor: "pointer" }}
        >
          {columnMeta.label}
        </th>
      ),
    },
  },
  {
    name: "image",
    label: "Image:",
    options: {
      sort: false,
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              <img height={75} width={75} src={value} />
            </div>
          </div>
        );
      },
      customHeadRender: (columnMeta) => <th key={3}>{columnMeta.label}</th>,
    },
  },
  {
    name: "productURL",
    label: "Product URL",
    options: {
      sort: false,
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              <a href={value} target="_blank" rel="noreferrer">
                Product Link
              </a>
            </div>
          </div>
        );
      },
      customHeadRender: (columnMeta) => <th key={4}>{columnMeta.label}</th>,
    },
  },
  {
    name: "scanURL",
    label: "Scanner URL",
    options: {
      sort: false,
      display: false,
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              <a href={value} target="_blank" rel="noreferrer">
                Scan Link
              </a>
            </div>
          </div>
        );
      },
      customHeadRender: (columnMeta) => <th key={5}>{columnMeta.label}</th>,
    },
  },
  {
    name: "regex",
    label: "Regex",
    options: {
      display: false,
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
      customHeadRender: (columnMeta) => <th key={6}>{columnMeta.label}</th>,
    },
  },
  {
    name: "negateRegex",
    label: "Negate Regex?",
    options: {
      display: false,
      customBodyRender: (value) => {
        if (value === true) {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ margin: "auto" }}>True</div>
            </div>
          );
        } else {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ margin: "auto" }}>False</div>
            </div>
          );
        }
      },
      customHeadRender: (columnMeta, updateDirection) => (
        <th
          key={7}
          onClick={() => updateDirection(7)}
          style={{ cursor: "pointer" }}
        >
          {columnMeta.label}
        </th>
      ),
    },
  },
  {
    name: "isFound",
    label: "Previously Found",
    options: {
      customBodyRender: (value) => {
        if (value === true) {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ height: "40px", width: "40px", margin: "auto" }}>
                <Tooltip title="Has Been Found">
                  <IconButton>
                    <CircleCheck
                      sx={{ color: "#6ed120" }}
                      viewBox="0 0 512 512"
                    />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          );
        } else {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ height: "40px", width: "40px", margin: "auto" }}>
                <Tooltip title="Has Not Yet Been Found">
                  <IconButton>
                    <CircleX sx={{ color: "#fc3838" }} viewBox="0 0 512 512" />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          );
        }
      },
      customHeadRender: (columnMeta, updateDirection) => (
        <th
          key={8}
          onClick={() => updateDirection(8)}
          style={{ cursor: "pointer" }}
        >
          {columnMeta.label}
        </th>
      ),
    },
  },
  {
    name: "lastFound",
    label: "Date Last Found",
    options: {
      display: false,
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
      customHeadRender: (columnMeta, updateDirection) => (
        <th
          key={9}
          onClick={() => updateDirection(9)}
          style={{ cursor: "pointer" }}
        >
          {columnMeta.label}
        </th>
      ),
    },
  },
  {
    name: "numberOfTrials",
    label: "# of Attempts",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
      customHeadRender: (columnMeta, updateDirection) => (
        <th
          key={10}
          onClick={() => updateDirection(10)}
          style={{ cursor: "pointer" }}
        >
          {columnMeta.label}
        </th>
      ),
    },
  },
  {
    name: "isEnabled",
    label: "Is Active?",
    options: {
      sort: false,
      customBodyRender: (value, tableMeta) => {
        if (value === true) {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ margin: "auto" }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>Off</Typography>
                  <AntSwitch
                    defaultChecked
                    onChange={(e) => {
                      handleUpdateSearch(e, tableMeta);
                    }}
                  />
                  <Typography>On</Typography>
                </Stack>
              </div>
            </div>
          );
        } else {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ margin: "auto" }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>Off</Typography>
                  <AntSwitch
                    onChange={(e) => {
                      handleUpdateSearch(e, tableMeta);
                    }}
                  />
                  <Typography>On</Typography>
                </Stack>
              </div>
            </div>
          );
        }
      },
      customHeadRender: (columnMeta) => <th key={11}>{columnMeta.label}</th>,
    },
  },
  {
    name: "contactNumbers",
    label: "Contact Numbers",
    options: {
      sort: false,
      display: false,
      customBodyRender: (value) => {
        let numbers = [];
        value.forEach((number) => {
          if (number) {
            const newNum = formatPhoneNumber(number);
            numbers.push(newNum);
          }
        });
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              {numbers.map((item, i) => (
                <li key={i} style={{ listStyleType: "none" }}>
                  {item}
                </li>
              ))}
            </div>
          </div>
        );
      },
      customHeadRender: (columnMeta) => <th key={12}>{columnMeta.label}</th>,
    },
  },
];

const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
};

const handleUpdateSearch = (e, tableMeta) => {
  const productID = tableMeta.rowData[0];
  axios
    .get(
      baseURL +
        "/update/" +
        productID.toString() +
        "/" +
        e.target.checked.toString()
    )
    .then(() => {});
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableHead-root": {
      border: "1px solid rgba(224, 224, 224, 1)",
      height: "75px",
    },
  },
});

export default function DataTable(props) {
  const classes = useStyles();

  const options = {
    selectableRows: "none",
    print: false,
    filter: false,
    download: false,
    pagination: false,
    rowHover: false,
    responsive: "standard",
  };

  return (
    <MUIDataTable
      className={classes.table}
      title="Product Scanner List"
      data={props.sortedProducts}
      columns={columns}
      options={options}
    />
  );
}
