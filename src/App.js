import React, {Component} from 'react';
import './App.css';
import Panel from './Panel.js';
import Nav from './Nav.js';
const DATA = require('./data.json');
const baseUrl = '#';
const apiUrl = '#';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      productData: []
    }
  }

  componentDidMount() {
    fetch(apiUrl)
    .then(response => {return response.json()})
    .then(data => this.setState({ productData: data.products }))
  }

  isInCart = (product) => this.state.cart.indexOf(product) > -1

  addToCart = (product) => {
    const { cart } = this.state
    cart.push(product)
    this.setState({
      cart: cart
    })
  }

  removeFromCart = (product) => {
    const { cart } = this.state
      this.setState({
        cart: cart.filter(({ sku }) => sku !== product.sku)
      })
  }

  render() {
    const { cart, productData } = this.state

    const productTiles = productData.map((data, index) => {
      return (
        <Panel
        data={data}
        key={index}
        isInCart={this.isInCart(data)}
        onAdd={() => this.addToCart(data)}
        onRemove={() => this.removeFromCart(data)}
        />
    )
    })

    const checkoutUrl = baseUrl + (cart.length ? ('?' + cart.map(({ sku }) => `sku=${sku}`).join('&')) : '')
    const subtotal = cart.reduce((total, { price }) => total + price, 0)

    return (
      <div>
        <div className="App">
          <Nav products={productData} price={subtotal} checkoutUrl={checkoutUrl}/>
          <div className="content">
            {productTiles}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
