import React from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light py-3 " id="navbar">
      <div class="container">
        <h1 className="fw-bold">CASINAL</h1>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg> */}
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse " id="menu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item o">
              <a class="nav-link" href="#" style={{ color: "yellow" }}>
                HOME
              </a>
            </li>
            <li class="nav-item o">
              <a class="nav-link text-black" href="#">
                ABOUT
              </a>
            </li>
            <li class="nav-item o">
              <a class="nav-link text-black" href="#">
                SERVICES
              </a>
            </li>
            <li class="nav-item o">
              <a class="nav-link text-black" href="#">
                BLOG
              </a>
            </li>
            <li class="nav-item o">
              <a class="nav-link text-black" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item q">
              <a class="nav-link text-black" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li class="nav-item q">
              <a class="nav-link text-black" href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li class="nav-item q">
              <a class="nav-link text-black" href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li class="nav-item q">
              <a class="nav-link text-black" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li class="nav-item q">
              <a class="nav-link text-black" href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    
  );
}
export default NavBar;
