import React, { useEffect } from 'react'
import '../App.css';
import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Button, IconButton } from '@mui/material';

const Main = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector(state => state.productData);

  useEffect(() => {
    dispatch(productList());
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div className='ActionButtons'>
        <Button variant='contained' size='small' disableElevation sx={{borderRadius:0}} onClick={() => dispatch(emptyCart())}>Empty Cart</Button>
      </div>

      <div className='ProductContainer'>
        {
          allProducts.map(eachProduct => {
            return (
              <div className='productItem' key={eachProduct.id}>
                <img src={eachProduct.images[0]} alt="" />
                <div className="title">{eachProduct.title}</div>
                <div className="actionButtonsInner">
                  <IconButton
                    aria-label="Add to cart"
                    variant="contained"
                    onClick={() => dispatch(addToCart(eachProduct))}
                    color='success'
                  >
                    <AddShoppingCartIcon fontSize="small"/>
                  </IconButton>

                  <IconButton
                    aria-label="Remove from cart"
                    variant="contained"
                    onClick={() => dispatch(removeFromCart(eachProduct.id))}
                    color='secondary'
                  >
                    <RemoveShoppingCartIcon  fontSize="small"/>
                  </IconButton>
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