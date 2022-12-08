import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();

  const navigateTo6 = () => {
    navigate("/TaskHeading6");
  };
  const navigateTo4 = () => {
    navigate("/TaskHeading4");
  };
  return (
    <div>
      <div className="TaskHeading5">
        <div className="Task5">
          <h1>Task Heading 5</h1>

          <embed
            src="https://giphy.com/gifs/cbc-retro-throwback-old-school-IzjhI7ggjDlEnMxZMu"
            width="452"
            height="612"
          />

          <br />
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div onclick={navigateTo6}>
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
        />
      </div>
      <span onClick={navigateTo4}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
        />
      </span>
    </div>
  );
}
