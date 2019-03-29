import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(){
        super();
        this.state = {
            product_name: '',
            product_price: '',
            product_imgURL: '',
            idStorage: null
        }
    }

    handleOnChange=(e)=>{
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleCancel=()=>{
        this.setState({
            product_name: '',
            product_price: '',
            product_imgURL: ''
        })
    }

    createProduct = ()=>{
        axios.post('/api/product', this.state)
        .then(()=>{this.props.displayInventory();
            this.setState({
                product_name: '',
                product_price: '',
                product_imgURL: ''
            })})

    }

    componentDidUpdate(prevProps){
        if (prevProps!==this.props){
            this.setState({
                idStorage: this.props.editId
            })
            // let firstButton = document.getElementsByTagName('button')[0];
        }
    }

    // updateProduct = (id)=>{
    //     axios.put('/api/inventory/${id}')
    //     .then()
    //     .catch(err=>console.log(`tried to update the product we got an ${err}`))
    // }

  render() {
    return (
      <div>
          <div>
            <input onChange={e=>this.handleOnChange(e)} name='product_name' type="text" placeholder='enter product name here' value={this.state.product_name} />
            <input onChange={e=>this.handleOnChange(e)} name='product_price' type="text" placeholder='enter product price here' value={this.state.product_price} />
            <input onChange={e=>this.handleOnChange(e)} name='product_imgURL' type="text" placeholder='enter product img URL here' value={this.state.product_imgURL} />
            <button onClick={()=>{this.createProduct()}}>add to inventory</button>
            <button onClick={()=>this.handleCancel()}>cancel</button>
          </div>
      </div>
    )
  }
}

export default Form
