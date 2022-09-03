import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import PracticePage from "./pages/practicePage/practicePage";
import Header from "./components/header/header.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/practice" element={<PracticePage />} />
        </Routes>
      </div>
    );
  }
}


export default (App);
