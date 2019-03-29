import React, { Component } from 'react'

class Product extends Component {
  render() {
      let { name, price, imgURL, id, deleteProduct} = this.props;
    return (
      <div>
          <div>
              <h1>Product: </h1>
              <img src={imgURL} alt="" width={250} />
              <h2>{name}</h2>
              <h2>{price}</h2>
              <button onClick={()=>{this.selectedProduct(id)}}>edit</button>
              <button onClick={()=>{deleteProduct(id)}}>delete</button>
          </div>
      </div>
    )
  }
}

export default Product
