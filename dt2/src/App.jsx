import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import TaskHeading1 from "./TaskHeading1";
import TaskHeading2 from "./TaskHeading2";
import TaskHeading4 from "./TaskHeading4";
import TaskHeading3 from "./TaskHeading3";
import TaskHeading5 from "./TaskHeading5";
import TaskHeading6 from "./TaskHeading6";
import TaskHeading7 from "./TaskHeading7";
import TaskHeading8 from "./TaskHeading8";
import TaskHeading9 from "./TaskHeading9";
import Home from "./Home";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/TaskHeading1" element={<TaskHeading1 />} />
            <Route path="/TaskHeading2" element={<TaskHeading2 />} />
            <Route path="/TaskHeading3" element={<TaskHeading3 />} />
            <Route path="/TaskHeading4" element={<TaskHeading4 />} />
            <Route path="/TaskHeading5" element={<TaskHeading5 />} />
            <Route path="/TaskHeading6" element={<TaskHeading6 />} />
            <Route path="/TaskHeading7" element={<TaskHeading7 />} />
            <Route path="/TaskHeading8" element={<TaskHeading8 />} />
            <Route path="/TaskHeading9" element={<TaskHeading9 />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}
