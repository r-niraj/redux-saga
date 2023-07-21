import React from 'react'
import '../App.css';
import { addToCart, removeFromCart,emptyCart} from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';

const Main = () => {
    const dispatch = useDispatch();

    const allProducts = useSelector(state=>state);
    console.log(allProducts);

    const product = {
        name:"Samsung",
        type: "mobile",
        price: 5000,
        color: "red"
    }

  return (
    <div className='ActionButtons'>
          <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
          <button onClick={()=>dispatch(removeFromCart(product.name))}>Remove From cart</button>
          <button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
          <button onClick={()=>dispatch(productList())}>Load Data</button>
    </div>
  )
}

export default Main