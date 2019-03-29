import React, { Component } from 'react'

class Product extends Component {
  render() {
      let { name, price, imgURL, id } = this.props;
    return (
      <div>
          <div>
              <h1>Product: </h1>
              <img src={imgURL} alt="" width={250} />
              <h2>{name}</h2>
              <h2>{price}</h2>
              <button onClick={()=>{this.selecetedProduct(id)}}>edit</button>
              <button onClick={()=>{this.props.deleteProduct(id)}}>delete</button>
          </div>
      </div>
    )
  }
}

export default Product
