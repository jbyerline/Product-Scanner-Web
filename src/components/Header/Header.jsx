import { AppBar, Toolbar, Tooltip } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useNavigate } from "react-router-dom";

import TableIcon from "../Icons/TableIcon";
import CardsBlankIcon from "../Icons/CardsBlank";

export default function Header(props) {
  let navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  function redirectCard() {
    navigate("/card");
  }

  function redirectTable() {
    navigate("/table");
  }

  return (
    <header>
      <AppBar position="sticky">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p>Product Scanner Control Center</p>
          </div>
          <div>
            {props.headerIcon === "table" ? (
              <Tooltip
                title="Card View"
                style={{ marginRight: "10px", marginBottom: "5px" }}
              >
                <IconButton onClick={redirectCard}>
                  <CardsBlankIcon
                    aria-label="card view"
                    height={22}
                    width={22}
                    fill="white"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                title="Table View"
                style={{ marginRight: "10px", marginBottom: "5px" }}
              >
                <IconButton onClick={redirectTable}>
                  <TableIcon
                    aria-label="table view"
                    height={20}
                    width={20}
                    fill="white"
                  />
                </IconButton>
              </Tooltip>
            )}

            <Tooltip
              title="Refresh"
              style={{ marginRight: "10px", marginBottom: "5px" }}
            >
              <IconButton onClick={refreshPage}>
                <RefreshIcon aria-label="refresh" style={{ fill: "white" }} />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
