import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TaskHeading3 from "./TaskHeading3";
import { useNavigate } from "react-router-dom";
import TaskHeading5 from "./TaskHeading5";
export default function () {
  const navigate = useNavigate();

  const navigateTo4 = () => {
    navigate("/TaskHeading5");
  };
  const navigateTo2 = () => {
    navigate("/TaskHeading3");
  };
  return (
    <div>
      <div className="TaskHeading4">
        <div className="Task4">
          <h1>Task Heading 4</h1>

          <embed src="https://webhome.phy.duke.edu/~rgb/Class/intro_physics_1/intro_physics_1.pdf" />
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
