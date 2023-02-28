import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h5>
          {props.product.Name}
          <span class="badge bg-primary">₹{props.product.Price}</span>
        </h5>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.Quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
        </div>
        <div className="col-2">
          {props.product.Quantity * props.product.Price}
        </div>
          <button className="col-2 btn btn-danger" onClick= {() => {props.removeItem(props.index)}}>Remove</button>
        </div>
  );
}
