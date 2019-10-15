import React, { Component, useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';
/*
export default class Products extends Component {
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
      <div className="cards-group">
        <div className="row">
          {products.map(product => (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card-product" key={product._id}>
                <img src=".." alt="" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-description">{product.description}</p>
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
*/
export default function Products() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/products', {
        headers: { user_id }
      });
      setSpots(response.data);
    }
    loadSpots();
  }, []);
  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header
              style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
            ></header>
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
}
