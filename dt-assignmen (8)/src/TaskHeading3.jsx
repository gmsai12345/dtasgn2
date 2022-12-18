import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import TaskHeading4 from "./TaskHeading4";
import TaskHeading2 from "./TaskHeading2";
import "./Taskheading3.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function () {
  return (
    <div>
      <div className="TaskHeading3">
        <h1 className="title">Task Heading 3</h1>
        <br />

        <div className="Task3">
          <div>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              columns="10"
            ></textarea>
          </div>
          <img
            src="https://img.icons8.com/ios-filled/50/null/enter-key.png"
            alt=""
            align="center"
          />
          <br />
          <br />
          <br />
        </div>
        <figure align="right">
          <KeyboardArrowDownIcon />
        </figure>
      </div>
      <CustomLink to="/TaskHeading4">
        <img
          src="https://img.icons8.com/ios/50/000000/forward--v1.png"
          alt=""
          className="right"
        />
        <p className="task1">Next Task -&gt; </p>
      </CustomLink>
      <CustomLink to="/TaskHeading2">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
          className="left"
        />
        <p className="task2"> &#60;-Next Task </p>
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
// can also be done by :
/* <form>
  <div class="form-group">
  <label for="exampleFormControlFile1">Example file input</label>
  <input type="file" class="form-control-file" id="exampleFormControlFile1">
</div>
</form>*/
