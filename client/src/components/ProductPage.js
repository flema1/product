import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { /*getProductDetails,*/ addToCart, removeFromCart, isInCart } from '../actions/cartActions';      // This actions are used to manages activities on cart

class Display extends Component {
   constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

  componentDidMount() {
    // document.body.scrollTop = 0;
    // document.querySelector('.menu').classList.remove('open');
  }

   // Toggle addtocart/removefromcart button based on isInCart status
    handleClick(e) {
        if (this.props.isInCart) {
            this.props.removeFromCart(this.props.detail._id);
        } else {
            const { match: { params } } = this.props;
               const item = this.props.products[params.index]
            const product = {
                id: item.id,
                name: item.title,
                image: item.image,
                price: item.price
            };
            this.props.addToCart(product);
        }
    }
    
  render() {
     const { match: { params } } = this.props;
     const item = this.props.products[params.index]
    return (
      <div className="main-product-container">
        {/*<h3>{params.index}</h3>*/}
        <div className="product-image-container">
           <img src={item.image} style={{ width:'200px', height:'200px'}} alt="boohoo" className="img-responsive"/>
        </div>
        <div className="product-info-container">
          <h3 className="product-name">{item.title}</h3>
          <p  className="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla modi, odit explicabo hic doloremque commodi ab molestiae. Iure voluptatem labore et aliquid soluta inventore expedita quam vel a earum!</p>
          <p className="product-price">${item.price}.00</p>
         </div>
        <button onClick={this.handleClick} className="purchase-product-Btn">Buy</button>
      </div>
    );
  }
}

// export default Display;

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchProducts: fetchProducts
//   }, dispatch);
// };

const mapStateToProps = (state/*, props*/) => { 
  return { 
    products: state.products.data,
    //
     isInCart: isInCart(state, state.detail),
        detail: state.detail
    //
  }
};

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    //getProductDetails: (id) => dispatch(getProductDetails(id))
})


export default connect( mapStateToProps , mapDispatchToProps)(Display)

// Mapping isInCart state to props to access e

// Mapping dispatch functions to props to access easily


// export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent);