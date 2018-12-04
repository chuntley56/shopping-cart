import React, {Component} from 'react';
import './App.css';

class CheckoutButton extends Component {
  render() {
    const { price, checkoutUrl } = this.props;

    return (
      <div className="checkout">
        <a href={checkoutUrl} className="btn__primary btn-price btn btn--md">
          <span className="btn-price__label">Do it</span>
          <span className="btn-price__value">${price}</span>
        </a>
      </div>
    )}
}
export default CheckoutButton;
