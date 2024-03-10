import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeFromCart } from '../redux/slice/CartSlice';


const ItemCart = ({id, img, price, name, qty}) => {
  const dispatch = useDispatch();
  console.log(dispatch);

  return (
    <>
        
                <div className='item'>
                    <DeleteIcon onClick={() => dispatch(removeFromCart({id}))} style={{position:'absolute', right:'5px', top:'5px', cursor:'pointer'}}/>
                    <div className='itemImg'>
                        <img src={img} alt={name}/>
                    </div>
                    <div className='itemInfo'>
                        <div className='itemName'>{name}</div>
                        <div className='itemBox'>
                        <div className='itemPrice'>{price}</div>
                        <div className='itemQty'>
                            <AddIcon onClick={() => qty < 9 ?  dispatch(incrementItem({id})) : (qty = 9)} />
                            <span>{qty}</span>
                            <RemoveIcon onClick={() => qty > 1 ? dispatch(decrementItem({id})) : dispatch(removeFromCart({id}))} />
                        </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default ItemCart