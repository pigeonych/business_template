import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/ContactPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<ContactPage />} path="/contact" exact />
            </Routes>
        </Router>
    );
}
