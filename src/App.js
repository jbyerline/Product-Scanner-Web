import React from "react";

import Header from "./components/Header/Header";
import CardView from "./components/Views/CardView";
import TableView from "./components/Views/TableView";

export default function App() {
  return (
    <div>
      <Header />
      <TableView />
      {/*<CardView />*/}
    </div>
  );
}
