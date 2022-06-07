import axios from "axios";
import React from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import DataTable from "../Table/DataTable";

const baseURL = "https://scannerapi.byerline.me";

const useStyles = makeStyles({
  table: {
    padding: "10px",
  },
  buttons: {
    display: "flex",
  },
  scanButton: {
    paddingRight: 16,
  },
});

export default function CardView() {
  const classes = useStyles();
  const [data, setData] = React.useState(null);
  const [sortedProducts, setSortedProducts] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL + "/data").then((response) => {
      setData(response.data);
      setSortedProducts(
        response.data.products.sort((a, b) => b.isEnabled - a.isEnabled)
      );
    });
  }, []);

  if (!data || !sortedProducts) return null;

  const handleScan = () => {
    axios.get(baseURL + "/scan").then((response) => {
      setData(response.data);
      setSortedProducts(
        response.data.products.sort((a, b) => b.isEnabled - a.isEnabled)
      );
    });
  };

  const handleText = () => {
    axios.get(
      "https://text.byerline.me/send/6193419322/This%20message%20was%20sent%20to%20you%20from%20your%20Product%20Scanner.%20Did%20you%20get%20this%3F"
    );
  };

  if (!data) {
    return <p> no data</p>;
  } else {
    return (
      <div>
        <div style={{ padding: "15px" }}>
          <Typography variant="h5">
            {" "}
            <strong>Details:</strong>
          </Typography>
          <Typography variant="h6">
            {" "}
            <strong>Scanner Last Ran:</strong> {data.lastUpdated}
          </Typography>
          <Typography variant="h6">
            {" "}
            <strong>Successfully Found Products:</strong> {data.numberFound}
          </Typography>
          <div className={classes.buttons}>
            <div className={classes.scanButton}>
              <Button variant="outlined" onClick={handleScan}>
                Scan Now
              </Button>
            </div>
            <div>
              <Button variant="outlined" onClick={handleText}>
                Test iMessage
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.table}>
          <DataTable sortedProducts={sortedProducts} />
        </div>
      </div>
    );
  }
}
