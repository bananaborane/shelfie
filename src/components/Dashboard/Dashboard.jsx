import React, { Component } from 'react'
import Product from './../Product/Product'


class Dashboard extends Component {

  render() {
      let {products}=this.props;
      let mapThemProducts = products.map((element, i)=>{return ( <Product key={element.product_id} name={element.product_name} price={element.product_price} imgURL={element.product_imgurl} /> )})
    //   REFACTORED TO ACCOUNT FOR SQL COLUMN NAMES for ex: product_name instead of element.name
    return (
      <div>
        {mapThemProducts}
      </div>
    )
  }
}

export default Dashboard
