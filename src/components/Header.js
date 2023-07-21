import React from 'react'
import { useSelector } from 'react-redux'


const Header = () => {
    const result = useSelector(state=>state);
    // console.log(result);
  return (
    <div className='Header'>
        <div className="cartItem">
            <span>{result.cartData.length}</span>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    </div>
  )
}

export default Header