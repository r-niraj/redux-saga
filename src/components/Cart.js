import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const cartData = useSelector(state => state.cartData);
    let amount = cartData.length && cartData.map(x=>x.price).reduce((prev,next)=>prev+next);
    return (
        <div className='CartWrapper'> 
        {
            cartData.length ===0?"No data added": <>
            <table className='cartTable'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {
                    cartData.map((item, i) =>
                        <>
                            <tbody>
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td><img src={item.images[0]} className="cartProdImg" alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                </tr>
                            </tbody>
                        </>
                    )
                }
            </table>

            <div className='priceCalc'>
                <div className='pricePrntRw'>
                    <div className="left">Amount</div>
                    <div className="right">{amount}</div>
                </div>
                <div className='pricePrntRw'>
                    <div className="left">Discount (10%)</div>
                    <div className="right">{amount/10}</div>
                </div>
                <div className='pricePrntRw'>
                    <div className="left">Total</div>
                    <div className="right">{amount - amount/10 + "/-"}</div>
                </div>
            </div>
            </>
        }           
            
        </div>
    )
}

export default Cart