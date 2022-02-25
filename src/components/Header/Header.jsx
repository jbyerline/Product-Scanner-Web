import {AppBar, Toolbar, Tooltip} from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Header() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <header>
            <AppBar position={"sticky"}>
                <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
                    <div>
                        <p>Product Scanner Control Center</p>
                    </div>
                    <div>
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
