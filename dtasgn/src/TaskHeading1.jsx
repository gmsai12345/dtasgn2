import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function () {
  return (
    <div>
      <div>
        <figure
          className="TaskHeading1"
          data-title="Task Heading 1"
          width="461"
          height="320"
        >
          <div className="Task1">
            <figcaption>
              <h1 align-text="center">Task 1</h1>
            </figcaption>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop p
            </p>
            <br />
            <div align="right">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
