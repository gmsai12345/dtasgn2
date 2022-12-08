import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TaskHeading3 from "./TaskHeading3";
import { useNavigate } from "react-router-dom";
import TaskHeading5 from "./TaskHeading5";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function () {
  return (
    <div>
      <div className="TaskHeading4">
        <div className="Task4">
          <h1>Task Heading 4</h1>

          <embed src="https://webhome.phy.duke.edu/~rgb/Class/intro_physics_1/intro_physics_1.pdf" />
          <br />
        </div>
        <figure align="right">
          <KeyboardArrowDownIcon />
        </figure>
      </div>

      <CustomLink to="/TaskHeading5">
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
        />
      </CustomLink>
      <CustomLink to="/TaskHeading3">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
        />
      </CustomLink>
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
