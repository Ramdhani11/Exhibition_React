import React from "react";
import image from "./images/exhibitionlogo.png";
import im2 from "./images/photo1.jpeg";

function MyHead() {
  return (
    <>
      <header>
        <img src={image} alt="img" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Schedule</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </header>
      <div className="img-header">
        <img src={im2} alt="" />
      </div>
    </>
  );
}

export default MyHead;
