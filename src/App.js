import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./components/Result";
import Ranking from "./components/Ranking";
import StartMenu from "./StartMenu";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="/Result/:money" element={<Result />} />
        <Route path="/Ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
}
