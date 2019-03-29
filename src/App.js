import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Dashboard from "./components/Dashboard/Dashboard";
import Product from "./components/Product/Product";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import routes from "./routes";

// let productsArr = [{name:'oxford shirt', price: 30, imgURL: ''},{name: 'leather boots', price: 150, imgURL: ''},{name: 'leather jacket', price: 250, imgURL: ''}]

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      editId: null
    };
  }

  displayInventory = () => {
    this.componentDidMount();
  };

  selectedProduct = id => {
    this.setState({
      editId: id
    });
  };

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => {
        console.log(res);
        this.setState({
          products: res.data
        });
        console.log(this.state.products);
      })
      .catch(err => console.log(`OHMYGOD: ${err}`));
  }

  render() {
    return (
    
        <div className="App">
          <Header />
          <Dashboard
            products={this.state.products}
            displayInventory={this.displayInventory}
            selectedProduct={this.selectedProduct}
          />
          <Form
            displayInventory={this.displayInventory}
            editId={this.state.editId}
          />
        </div>
      
    );
  }
}

export default App;
