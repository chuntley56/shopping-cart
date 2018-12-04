import React, {Component} from 'react';
import './App.css';
import ProductTileButton from './ProductTileButton.js';

class Panel extends Component {
  render() {
    const { data, isInCart, onAdd, onRemove } = this.props;
    const imgPath = (((data.assets || {}).detail || {}).file || {}).url;
    const linkDetails = `#/${data.slug}`

    return (
      <div className="panel bg__paper--lightest">
        <img src={imgPath} alt={data.name}/>
        <div className="details">
        <div className="text--md">{data.name}</div>
        <div className="text--xs">{data.size_number}{data.abbr_size_unit}</div>
        <a className="link text--sm display--block" href={linkDetails}>View Details</a>
      <ProductTileButton
        isSoldOut={data.is_sold_out}
        isInCart={isInCart}
        onAdd={onAdd}
        onRemove={onRemove}
        price={data.price} />
      </div>

      </div>)
  }
}

export default Panel;
