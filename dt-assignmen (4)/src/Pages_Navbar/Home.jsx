import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//import image10 from "..//Assets/image10.png";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CommentIcon from "@mui/icons-material/Comment";
import LinkIcon from "@mui/icons-material/Link";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import Home from "./Home.css";
export default function () {
  return (
    <div>
      <p className="task" align-text="center">
        demo task
      </p>
      <figure
        className="TaskHeading1"
        data-title="Task Heading 1"
        width="461"
        height="320"
      >
        <div className="Task1">
          <figcaption>
            <h1>Task Heading 1</h1>
          </figcaption>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop p
          </p>
          <br />
          <KeyboardArrowDownIcon />
        </div>
      </figure>
      <div className="TaskHeading2">
        <figure data-title="" className="TaskHeading2">
          <div className="Task2">
            <h1>Task Heading 2</h1>
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
            <KeyboardArrowDownIcon />
          </div>
        </figure>
      </div>

      <div className="TaskHeading3">
        <div className="Task3">
          <h1>Task Heading 3</h1>
          <div>
            <input type="text" id="ip1" />
          </div>
          <br />
          <KeyboardArrowDownIcon />
        </div>
      </div>

      <div className="TaskHeading4">
        <div className="Task4">
          <h1>Task Heading 4</h1>

          <embed src="https://webhome.phy.duke.edu/~rgb/Class/intro_physics_1/intro_physics_1.pdf" />
          <br />
          <KeyboardArrowDownIcon />
        </div>
      </div>

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
    </div>
  );
}
