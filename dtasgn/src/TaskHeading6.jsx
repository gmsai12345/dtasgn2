import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const navigateTo7 = () => {
    navigate("/TaskHeading7");
  };
  const navigateTo5 = () => {
    navigate("/TaskHeading5");
  };
  return (
    <div>
      <figure data-title="" className="TaskHeading6">
        <div className="Task6">
          <h1>Task Heading 7</h1>
          <h1>
            <KeyboardArrowUpIcon /> Introduction
          </h1>
          <form action="/action_page.php">
            <input type="text" id="fname" name="fname" />
          </form>
          <p>
            <KeyboardArrowUpIcon /> Thread A
          </p>
          <figure data-title="Thread A" className="Task Heading 6_1">
            <figcaption>
              <figure data-title="Butter Cookies!" className="Task Heading 6_2">
                <figcaption>
                  <form action="/action_page.php">
                    <label for="fname">Example 1</label>
                    <br />
                    <input type="text" id="fname" name="fname" />
                  </form>
                </figcaption>
              </figure>
              <p>+ Example</p>
              <figure data-title="Butter Cookies!" className="TaskHeading6_3">
                <figcaption>
                  <form action="/action_page.php" className="TaskHeading6form1">
                    <label for="fname">Argument for Thread A</label>
                    <br />
                    <input type="text" id="fname" name="fname" />
                  </form>
                </figcaption>
                <p>+ New Thread</p>
              </figure>
            </figcaption>
          </figure>
          <h1>
            <KeyboardArrowUpIcon /> Conclusion
          </h1>
          <form action="/action_page.php" className="TaskHeading6form2">
            <input type="text" id="fname" name="fname" />
          </form>

          <br />
          <SaveIcon />
          <br />
          <KeyboardArrowDownIcon />
        </div>
      </figure>
      <div onclick={navigateTo7}>
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
        />
      </div>
      <span onClick={navigateTo5}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
        />
      </span>
    </div>
  );
}
