import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();

  const navigateTo8 = () => {
    navigate("/TaskHeading8");
  };
  const navigateTo6 = () => {
    navigate("/TaskHeading6");
  };
  return (
    <div>
      <div className="TaskHeading7">
        <p className="TaskHeading7">Text Heading 7</p>
        <div className="Task6">
          <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
            <a href="/media/cc0-audio/t-rex-roar.mp3">Download audio</a>
          </audio>
          <br />
          <KeyboardArrowDownIcon />
        </div>
      </div>

      <div onclick={navigateTo8}>
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
        />
      </div>
      <span onClick={navigateTo6}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
        />
      </span>
    </div>
  );
}
