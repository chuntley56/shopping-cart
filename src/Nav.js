import React, {Component} from 'react';
import './App.css';
import CheckoutButton from './CheckoutButton.js';


class Nav extends Component {
    render(){
      const { products, price, checkoutUrl } = this.props;
      const checkout = (price !== 0)
        ? <CheckoutButton checkoutUrl={checkoutUrl} price={price}/>
        : null;

      return(
        <nav>
          <div className="grid">
            <div className="col"></div>
            <div className="col">
              <img
                className="logo"
                src="https://via.placeholder.com/40?text=Logo" />
            </div>
            <div className="col">
              {checkout}
            </div>
          </div>
        </nav>
      )
    }
}

export default Nav;
