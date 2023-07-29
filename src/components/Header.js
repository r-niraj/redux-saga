import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Header = () => {
  const result = useSelector(state=>state.cartData);
  return (
    <div className='Header'>
      <Link to="/">
        <h1 className='logo'>Logo</h1>
      </Link>
      <Link to="/cart">
        <div className="cartItem">
            <span>{result.length}</span>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        </Link>
    </div>
  )
}

export default Header