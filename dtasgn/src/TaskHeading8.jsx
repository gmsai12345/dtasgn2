import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const navigateTo9 = () => {
    navigate("/TaskHeading9");
  };
  const navigateTo7 = () => {
    navigate("/TaskHeading7");
  };
  return (
    <div>
      <div className="TaskHeading9">
        <p className="TaskHeading9">Task Heading 9</p>
        <div className="Task9">
          <iframe
            src="https://www.youtube.com/embed/s8H0Sx7jy7c"
            width="400px"
            height="400px"
          />
          <br />
          <KeyboardArrowDownIcon />
        </div>
      </div>

      <div onclick={navigateTo9}>
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
        />
      </div>
      <span onClick={navigateTo7}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
        />
      </span>
    </div>
  );
}
