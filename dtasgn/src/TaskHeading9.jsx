import React from "react";
import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();

  const navigateTo8 = () => {
    navigate("/TaskHeading8");
  };
  return (
    <div>
      <h1>Analytics page</h1>
      <span onClick={navigateTo8}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/back.png"
          alt=""
        />
      </span>
    </div>
  );
}
