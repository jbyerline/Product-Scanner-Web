import { AppBar, Toolbar, Tooltip } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import TableIcon from "../Icons/TableIcon";
import CardsBlankIcon from "../Icons/CardsBlank";
import AddProductDialog from "../Dialogs/AddProductDialog";

export default function Header(props) {
  const [addProductDialogState, setAddProductDialogState] =
    React.useState(false);

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

  function handleSetDialog(state) {
    setAddProductDialogState(state);
  }

  return (
    <header>
      <AppBar position="sticky">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p>Product Scanner Control Center</p>
          </div>
          <div>
            <Tooltip
              title="Add Product"
              style={{ marginRight: "10px", marginBottom: "5px" }}
            >
              <IconButton
                onClick={() => {
                  handleSetDialog(true);
                }}
              >
                <AddIcon aria-label="refresh" style={{ fill: "white" }} />
              </IconButton>
            </Tooltip>
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
      <AddProductDialog
        open={addProductDialogState}
        setOpen={setAddProductDialogState}
      />
    </header>
  );
}
