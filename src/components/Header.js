import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';


const Header = () => {
  const result = useSelector(state=>state.cartData);
  const dispatch= useDispatch();

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
        <input type="text" className="searchBar" placeholder='Search Product' onChange={(e)=>dispatch(productSearch(e.target.value))}/>
    </div>
  )
}

export default Header