import React from "react";
import show1 from "./images/show1.jpg";
import show2 from "./images/show2.jpg";

function Content() {
  return (
    <>
      <div class="more-info">
        <div id="image-content">
          <img src={show1} alt="" />
          <div class="text-content">
            <h3>Practice Everyday</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolorem expedita porro excepturi explicabo eveniet minus
              praesentium dolores alias. Cumque?
            </p>
            <a href="">More..</a>
          </div>
        </div>
        <div id="image-content">
          <img src={show2} alt="" />
          <div class="text-content">
            <h3>Practice Everyday</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolorem expedita porro excepturi explicabo eveniet minus
              praesentium dolores alias. Cumque?
            </p>
            <a href="">More..</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
