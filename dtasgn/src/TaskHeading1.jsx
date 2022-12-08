import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TaskHeading2 from "./TaskHeading2";
import { useNavigate } from "react-router-dom";
//import {  BrowserRouter as Router, Route, Redirect,Routes} from "react-router-dom";
export default function () {
  const navigate = useNavigate();

  const navigateTo2 = () => {
    // 👇️ navigate to /contacts
    navigate("/TaskHeading2");
  };
  return (
    <div>
      <div>
        <figure
          className="TaskHeading1"
          data-title="Task Heading 1"
          width="461"
          height="320"
        >
          <div className="Task1">
            <figcaption>
              <h1 align-text="">Task 1</h1>
            </figcaption>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop p
            </p>
            <br />
            <div align="right">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </figure>
      </div>

      <div align-text="right" onClick={navigateTo2}>
        <figure>
          <img
            src="https://img.icons8.com/ios/50/000000/forward--v1.png"
            alt=""
            align="right"
          />
          <br />
          <br />
          <br />
          <figcaption>
            <p align-text="right"> Next Task-&gt; </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
