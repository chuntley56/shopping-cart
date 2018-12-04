import React, {Component} from 'react';
import './App.css';

const ProductTileButton = (props) => {
  const { isSoldOut, isInCart, onAdd, onRemove, price } = props
  let contents;
  if (isInCart) {
    contents =
      <a className="btn__inactive--light btn btn--md mb--1 mt--1" onClick={onRemove}>
        Remove
      </a>
  } else {
    if (isSoldOut) {
      contents =
      <a className="btn__inactive--light btn btn--md mb--1 mt--1">
        Out of Stock
      </a>
    } else {
      contents =
      <a className="btn__primary btn-price btn btn--md mb--1 mt--1" onClick={onAdd}>
        <span className="btn-price__label">Add</span>
        <span className="btn-price__value">${price}</span>
      </a>
    }
  }

  return (
    <div className="cta">
      {contents}
    </div>
  )}

export default ProductTileButton;
