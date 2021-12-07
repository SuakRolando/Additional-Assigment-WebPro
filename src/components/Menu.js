import React from "react";
import '../assets/style.css';

const Menu = () => {
  return (
    <div className="container mt-5">
      <nav className="nav shadow rounded-3 justify-content-between bg-white">
        <div>
          <div className="dropdown ps-2">
            <a
              className="nav-link dropdown-toggle text-secondary"
              href="#"
              data-bs-toggle="dropdown"
              type="button"
            >
              ALL TYPES
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Wooden Chair
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wingback Chair
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Windsor Chair
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav ">
          <a className="nav-link active text-primary px-0 borderB" href="#">
            Popular Products
          </a>
          <a className="nav-link text-secondary px-0 mx-5" href="#">
            Low Price
          </a>
          <a className="nav-link text-secondary px-0" href="#">
            High Price
          </a>
        </div>
        <div>
          <div className="dropdown pe-3">
            <a
              className="nav-link dropdown-toggle text-secondary"
              href="#"
              data-bs-toggle="dropdown"
              type="button"
            >
              PRICE
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Lower Price
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Medium Price
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Higher Price
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
