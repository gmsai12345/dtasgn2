import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function () {
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
        </div>
        <figure align="right">
          <KeyboardArrowDownIcon />
        </figure>
      </div>
      <CustomLink to="/TaskHeading6">
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
        />
      </CustomLink>
      <CustomLink to="/TaskHeading4">
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
