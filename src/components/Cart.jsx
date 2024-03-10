import React, { useState } from 'react'
import Close from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';



const Cart = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
const CartSlide = useSelector((state) => state.cart.cart);
//console.log(CartSlide);

const cartItems = useSelector((state) => state.cart.cart);
const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
const totalprice = cartItems.reduce((totalprice, item) => totalprice + item.price*item.qty, 0);

  return (
    <>
        <div className={`drawerCart ${open? "active": ""}`}>
            <div className='drawerHeader'>
                <span>My Order</span>
                <span onClick={() => setOpen(false)}><Close /></span>
            </div>
           
            <div className='itemCart'>
                {CartSlide.length > 0 ? CartSlide.map((item) => {
                    return (
                        <ItemCart key={item.id} id={item.id} img={item.img} price={item.price} name={item.name} qty={item.qty}/>
                    )
                }) : <div className='emptyItem' style={{textAlign:'center', padding:'15px 0'}}>Your Cart is Empty</div>}

            </div>

            <div className='drawerFooter'>
                <div className='itemCount'>Item : {totalQty}</div>
                <div className='itemPrice'>Totle : {totalprice}</div>
                <Button className='primary' onClick={() => navigate('/success')}>Checkout</Button>
            </div>
        </div>
        <div className='cartIcon' onClick={() => setOpen(true)}>
        <ShoppingCartIcon />
        <div style={{position: 'absolute', width: '30px', height: '30px', top: '-10px', right: '-10px', background: '#f45', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', borderRadius: '100px', fontSize: '12px'}}>{CartSlide.length}</div>
        </div>
    </>
  )
}

export default Cart