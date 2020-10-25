import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../action/productActions';

function HometScreen (props){

  const productList = useSelector(state =>state.productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(listProducts());

    return ()=> {
      //
    };
  }, [])

    return loading? <div>loading...</div>:
    error? <div>{error}</div>:
    (
    <ul className="products">
      {
        products.map(product =>
        <li key={product._id}>
          <div className="product">
            <Link to={'/product/' + product._id}>
            <img className="product-image" src={product.image} alt="products"></img>
            </Link>
              <div className="product-name" >
                <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
          </div>
        </li>)
      }
    </ul>
    )
}

export default HometScreen;
