import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages_Navbar/Home";
import Setting from "./Pages_Navbar/Setting";
import Notification from "./Pages_Navbar/Notification";
import { Route, Routes } from "react-router-dom";
export default function App1() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Notification" element={<Notification />} />
        </Routes>
      </div>
    </div>
  );
}
