import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Product extends Component {
  componentDidMount() {
    // document.body.scrollTop = 0;
    // document.querySelector('.menu').classList.remove('open');
  }
  render() {
    const {item}=this.props
    // console.log(this.props.index, "io")
    return (
      <div className="single-product" >
         <img src={item.image} style={{ width:'200px', height:'200px'}} alt="boohoo" className="img-responsive"/>
         <p>{item.title}</p>
         <p>{item.price}</p>
         <Link to={`/products/${this.props.index}`}>Details</Link>
      </div>
    );
  }
}

export default Product;