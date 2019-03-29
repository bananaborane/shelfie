import React, { Component } from 'react'
import Product from './../Product/Product'
import axios from 'axios';


class Dashboard extends Component {

    deleteProduct=(id)=>{
        axios.delete(`/api/inventory/${id}`)
        .then(()=>{this.props.displayInventory()})
        .catch(err=>console.log(err))
    }

  render() {
      let {products}=this.props;
      let mapThemProducts = products.map((element, i)=>{return ( <Product key={element.product_id} id={element.product_id} name={element.product_name} price={element.product_price} imgURL={element.product_imgurl} deleteProduct={this.deleteProduct} displayInventory={this.props.displayInventory} selectedProduct={this.props.selectedProduct} /> )})
    //   REFACTORED TO ACCOUNT FOR SQL COLUMN NAMES for ex: product_name instead of element.name
    return (
      <div>
        {mapThemProducts}
      </div>
    )
  }
}

export default Dashboard
