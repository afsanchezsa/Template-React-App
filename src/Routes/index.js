import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeComponent } from "../Components/Home";
import RegisterComponent from "../Components/Register";
import LoginComponent from "../Components/Login";

function RoutesManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/login" element={<LoginComponent />} />
        <Route exact path="/register" element={<RegisterComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
export { RoutesManager };
