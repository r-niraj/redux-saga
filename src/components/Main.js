import React, { useEffect } from 'react'
import '../App.css';
import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
 
const Main = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector(state => state.productData);

  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <>
      <div className='ActionButtons'>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>

      <div className='ProductContainer'>
        {
          allProducts.map(eachProduct => {
            return (
              <div className='productItem' key={eachProduct.id}>
                <img src={eachProduct.images[0]} alt="" />
                <div className="title">{eachProduct.title}</div>
                <div className="actionButtonsInner">
                  <button className="add2Cart" onClick={()=>dispatch(addToCart(eachProduct))}>+</button>
                  <button className="removeFcart" onClick={()=>dispatch(removeFromCart(eachProduct.id))}>-</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Main