/* eslint-disable react/prop-types */
// import React from "react";

import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ product }) => {
  const { img, name, describtion, price } = product;
  return (
    <div className="card-part">
      <div className=" card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name} </h2>
          <p>Price : ${price}</p>
          <p>{describtion}</p>
          <div className="card-actions">
            <Link to="/checkout" className="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
