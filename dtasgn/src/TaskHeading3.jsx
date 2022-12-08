import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import TaskHeading4 from "./TaskHeading4";
import TaskHeading2 from "./TaskHeading2";
export default function () {
  const navigate = useNavigate();

  const navigateTo4 = () => {
    navigate("/TaskHeading4");
  };
  const navigateTo2 = () => {
    navigate("/TaskHeading2");
  };
  return (
    <div>
      <div className="TaskHeading3">
        <div className="Task3">
          <h1 aligntext="center">Task Heading 3</h1>
          <div>
            <input type="text" id="ip1" />
          </div>
          <br />
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div onclick={navigateTo4}>
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
        />
      </div>
      <span onClick={navigateTo2}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
        />
      </span>
    </div>
  );
}
