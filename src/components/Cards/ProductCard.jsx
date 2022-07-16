import axios from "axios";
import React from "react";
import MUIDataTable from "mui-datatables";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Stack, Typography, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CircleCheck from "../Icons/CircleCheck";
import CircleX from "../Icons/CircleX";
import AntSwitch from "../Switch/AntSwitch";

const baseURL = "https://scannerapi.byerline.me";
const columns = [
  {
    name: "productId",
    label: "Product ID:",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
    },
  },
  {
    name: "brand",
    label: "Brand:",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
    },
  },
  {
    name: "name",
    label: "Product Name:",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
    },
  },
  {
    name: "imageUrl",
    label: "Image:",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              <img height={75} width={75} src={value} />
            </div>
          </div>
        );
      },
    },
  },
  {
    name: "productUrl",
    label: "Product Link:",
    options: {
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
    },
  },
  {
    name: "scanUrl",
    label: "Scanner Link:",
    options: {
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
    },
  },
  {
    name: "regex",
    label: "Regex:",
    options: {
      display: false,
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
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
    },
  },
  {
    name: "isFound",
    label: "Previously Found?",
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
    },
  },
  {
    name: "lastFound",
    label: "Date Last Found:",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              {value !== "N/A"
                ? remove_character(
                    remove_character(value.replaceAll("-", "/"), 7, 9),
                    14,
                    17
                  )
                : value}
            </div>
          </div>
        );
      },
    },
  },
  {
    name: "numberOfTrials",
    label: "Attempts:",
    options: {
      customBodyRender: (value) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>{value}</div>
          </div>
        );
      },
    },
  },
  {
    name: "isEnabled",
    label: "Is Active?",
    options: {
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
    },
  },
  {
    name: "contactNumbers",
    label: "Contact Numbers:",
    options: {
      customBodyRender: (value) => {
        let numbers = [];
        JSON.parse(value).forEach((number) => {
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
    },
  },
];

const options = {
  download: false,
  filter: false,
  search: false,
  print: false,
  selectableRows: "none",
  customFooter: () => {
    return null;
  },
  responsive: "verticalAlways",
};

function remove_character(str, first_char_pos, second_char_pos) {
  const part1 = str.substring(0, first_char_pos);
  const part2 = str.substring(second_char_pos, str.length);
  return part1 + part2;
}

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
    .patch(
      baseURL +
        "/product/" +
        productID.toString() +
        "/" +
        e.target.checked.toString()
    )
    .then(() => {});
};

const useStyles = makeStyles({
  table: {
    "& .MuiTableHead-root": {
      border: "1px solid rgba(224, 224, 224, 1)",
      height: "75px",
    },
    "& .MuiTypography-root": {
      fontWeight: "bolder",
    },
    "& .MuiTypography-body1": {
      fontWeight: "normal !important",
    },
  },
});

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card sx={{ width: 400 }}>
      <CardContent>
        <MUIDataTable
          className={classes.table}
          title={props.title}
          data={props.data}
          columns={columns}
          options={options}
        />
      </CardContent>
    </Card>
  );
}
