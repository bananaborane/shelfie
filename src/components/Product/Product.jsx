import React, { Component } from 'react'

class Product extends Component {
  render() {
      let { name, price, imgURL } = this.props;
    return (
      <div>
          <div>
              <h1>Product: </h1>
              <img src={imgURL} alt="" width={250} />
              <h2>{name}</h2>
              <h2>{price}</h2>
          </div>
      </div>
    )
  }
}

export default Product
