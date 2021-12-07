import React from "react";

const Header = () => {
  return (
    <header className="pb-1 bg-white shadow">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-secondary">
          <h1 className="display-4 fw-bolder">E-Commerce App</h1>
          <p className="lead fw-normal text-secondary-50 pt-1">
            Find your wish list...
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
