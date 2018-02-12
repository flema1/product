import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SideNav extends Component {
  render() {
    return (
      <nav id={'side-menu'}>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
           </ul>
      </nav>
    );
  };
}