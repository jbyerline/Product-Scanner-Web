
import { AppBar, Toolbar } from "@mui/material";
import React from "react";

export default function Header() {
    const displayDesktop = () => {
        return <Toolbar>Jacob's Product Scanner Interface</Toolbar>;
    };

    return (
        <header>
            <AppBar position={"sticky"}>{displayDesktop()}</AppBar>
        </header>
    );
}
