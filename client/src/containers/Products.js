import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import { bindActionCreators } from 'redux'; /* code change */
import Product from '../components/Product';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {products:null };
  }
  componentWillMount(){
    this.props.fetchProducts();
  }
  componentDidMount() {
    // document.body.scrollTop = 0;
    // document.querySelector('.menu').classList.remove('open');
  }
  render() {
    console.log(this.state.products,'products')
     
    return (
      <main className="main" style={{display:'flex',flexWrap: 'wrap'}}>
         {
           this.props.products.map((product, index)=>{
             return (<Product item={product} index={index}/>)
           })
         }
      </main>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProducts: fetchProducts
  }, dispatch);
};

const mapStateToProps = (state) => { 
  return { 
    products: state.products.data
  }
};

export default connect( mapStateToProps , { fetchProducts })(Products)
