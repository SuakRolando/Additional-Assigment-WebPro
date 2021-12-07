import React from "react";
import Chair1 from "../assets/images/chair1.png";

const Product = () => {
  return (
    <div className="mt-3">
      <div className="card shadow rounded-3 " style={{ width: "25rem" }}>
        <div className="nav m-4 justify-content-between">
          <div className="d-inline-flex p-2 bg-light">New</div>
          <div className="px-2">
            <a type="button" href="#">
              <i className="bi bi-list-ul me-4 text-secondary fs-4"></i>
            </a>
            <a type="button" href="#">
              <i className="bi bi-heart text-secondary fs-4"></i>
            </a>
          </div>
        </div>
        <div className="m-4">
          <img src={Chair1} className="card-img-top" alt="..." />
        </div>
        <div className="card-body m-4">
          <h4 className="card-title text-center">Wooden Chair</h4>
        </div>
        <div className="nav mx-4 mb-4 justify-content-between">
          <div className="py-1">
            <i className="bi bi-star-fill text-warning me-1 fs-5"></i>
            <i className="bi bi-star-fill text-warning me-1 fs-5"></i>
            <i className="bi bi-star-fill text-warning me-1 fs-5"></i>
            <i className="bi bi-star-fill text-warning me-1 fs-5"></i>
            <i className="bi bi-star-fill text-light fs-5"></i>
          </div>
          <div>
            <div className="container">
              <div className="row border">
                <div className="col py-1 pe-5 d-inline">Rp12.000</div>
                <a className="col border px-2" type="button" href="#">
                  <i className="bi bi-cart-fill text-secondary fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
