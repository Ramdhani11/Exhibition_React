import React from "react";

function Footer() {
  return (
    <>
      <div class="footer-1">
        <div class="contet">
          <h3>Schedule</h3>
          <ul>
            <li>
              <a href="">Monday</a>
            </li>
            <li>
              <a href="">Tuesday</a>
            </li>
            <li>
              <a href="">Wednesday</a>
            </li>
            <li>
              <a href="">Thursday</a>
            </li>
            <li>
              <a href="">Friday</a>
            </li>
            <li>
              <a href="">Saturday</a>
            </li>
            <li>
              <a href="">Sunday</a>
            </li>
          </ul>
        </div>
        <div class="contet">
          <h3>News</h3>
          <p>
            <b>News</b>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            harum at! Amet accusamus veniam fugit quas, hic ratione sed harum?
          </p>
        </div>
        <div class="contet">
          <h3>Links</h3>
          <ul id="links">
            <li>
              <a href="">
                <i class="bx bxl-github"></i> Github{" "}
              </a>
            </li>
            <li>
              <a href="">
                <i class="bx bxl-facebook-square"></i> Facebook
              </a>
            </li>
            <li>
              <a href="">
                <i class="bx bxl-instagram-alt"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>Designed By Anwar Ramdhani</footer>
    </>
  );
}

export default Footer;
