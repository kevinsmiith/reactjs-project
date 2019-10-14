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
        {products.map(product => (
          <table className="table-products" key={product._id}>
            <tr>
              <th>Tecnologia</th>
              <th>Descrição</th>
            </tr>
            <tr>
              <td>{product.title}</td>
              <td>{product.description}</td>
            </tr>
          </table>
        ))}
      </div>
    );
  }
}
