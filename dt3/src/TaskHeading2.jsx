import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CommentIcon from "@mui/icons-material/Comment";
import LinkIcon from "@mui/icons-material/Link";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { Routes, Route, useNavigate } from "react-router-dom";
import TaskHeading1 from "./TaskHeading1";
import TaskHeading3 from "./TaskHeading3";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Taskheading2.css";
export default function () {
  return (
    <div>
      <div>
      <h1 className = "title">Task Heading 2</h1>
        <figure data-title="" className="TaskHeading2">
          <div className="Task2">
            
            <h1>
              <KeyboardArrowUpIcon /> Thread A
            </h1>
            <figure data-title="Thread A" className="Task Heading 2_!">
              <figcaption>
                <figure
                  data-title="Butter Cookies!"
                  className="Task Heading 2_2"
                >
                  <figcaption>
                    <form action="/action_page.php">
                      <label for="fname">Sub Thread 1 </label>
                      <br />
                      <input type="text" id="fname" name="fname" />
                    </form>
                  </figcaption>
                </figure>
                <figure
                  data-title="Butter Cookies!"
                  className="Task Heading 2_3"
                >
                  <figcaption>
                    <form action="/action_page.php">
                      <label for="fname">Sub Interpratation 1 </label>
                      <br />
                      <input type="text" id="fname" name="fname" />
                    </form>
                  </figcaption>
                </figure>
              </figcaption>
            </figure>
            <br />
            <LightbulbIcon />
            <CommentIcon />{" "}
            <select name="select2_1" id="cars">
              <option value="volvo">Select Category</option>
            </select>
            <select name="select2_2" id="cars">
              <option value="volvo">Select Process</option>
            </select>
            <br />
            <p>+ Sub thread</p>
            <figure data-title="Butter Cookies!" className="Task Heading 2_4">
              <figcaption>
                <form action="/action_page.php">
                  <label for="fname">Summary for Thread A</label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </form>
              </figcaption>
            </figure>
            <span>
              <LinkIcon /> Thread Credit
              <DriveFileRenameOutlineIcon />
              <select name="select2_3" id="cars">
                <option value="volvo">Select Emotion</option>
              </select>
            </span>
            <br />
            <p>+ New thread</p>
            <br />
            <SaveIcon />
            <br />
          </div>
        </figure>
        <figure align="right">
          <KeyboardArrowDownIcon />
        </figure>
      </div>
      <div>
        <CustomLink to="/TaskHeading3">
          <figure className="arrow">
            <img
              src="https://img.icons8.com/ios/50/000000/forward--v1.png"
              alt=""
              align="right"
              className="right"
            />
            <br />
            <br />
            <br />
            <figcaption>
              <p className="task1"> Next Task-&gt; </p>
            </figcaption>
          </figure>
        </CustomLink>

        <CustomLink to="/TaskHeading1">
          <figure className="arrow">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/back.png"
              alt=""
              align="left"
              className="left"
            />
            <br />
            <br />
            <br />
            <figcaption>
              <p className="task2"> &#60;-Previous Task </p>
            </figcaption>
          </figure>
        </CustomLink>
      </div>
    </div>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}