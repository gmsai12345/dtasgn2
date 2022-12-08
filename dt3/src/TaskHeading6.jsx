import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SaveIcon from "@mui/icons-material/Save";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function () {
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
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
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
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
          <form action="/action_page.php" className="TaskHeading6form2">
            <input type="text" id="fname" name="fname" />
          </form>

          <br />
          <SaveIcon />
          <br />
          <figure align="right">
            <KeyboardArrowDownIcon />
          </figure>
        </div>
      </figure>

      <CustomLink to="/TaskHeading7">
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
          className="right"
        />
        <br />
        <br />
        <br />
        <p className="task1">Next page -&gt;</p>
      </CustomLink>
      <CustomLink to="/TaskHeading5">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
          className="left"
        />
        <br />
        <br />
        <br />
        <p className="task2"> &#60;-Previous Page</p>
      </CustomLink>
    </div>
  );
}
