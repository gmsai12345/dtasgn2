import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
//import TaskHeading4 from "./TaskHeading4";
//import TaskHeading2 from "./TaskHeading2";
import "./Taskheading3.css";
//import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function () {
  return (
    <div>
      <div className="TaskHeading3">
        <div className="TaskHeading3">
          <h1 className="title">Task Heading 3</h1>
          <br />

          <div className="Task3">
            <div>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                columns="10"
              ></textarea>
            </div>
            <img
              src="https://img.icons8.com/ios-filled/50/null/enter-key.png"
              alt=""
              align="center"
            />
            <br />
            <br />
            <br />
          </div>
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
        </div>
      </div>
    </div>
  );
}
