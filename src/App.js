import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CardView from "./components/Views/CardView";
import TableView from "./components/Views/TableView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/card" />} />
        <Route path="table" element={<TableView />} />
        <Route path="card" element={<CardView />} />
      </Routes>
    </BrowserRouter>
  );
}
