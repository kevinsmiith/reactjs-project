import React, { Component } from 'react';
import api from '../../services/api';
//import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  };
  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>pagina home</h1>
      </div>
    );
  }
}
