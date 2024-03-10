import { GradeSharp } from '@mui/icons-material'
import { Button, Rating } from '@mui/material'
import React from 'react';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slice/CartSlice'

const FoodCard = ({id, name, price, desc, rating, img}) => {
    const dispatch = useDispatch();
  return (
    <>
    <div className='food-cart'>
        <div className='food-pics'>
            <img src={img} alt={name}/>
        </div>
        <div className='food-title'>
            <div className='foodTitle'>{name}</div>
            <div className='foodPrice'>₹{price}</div>
        </div>
        <div className='food-description'>
            {desc.slice(0, 60)}
        </div>
        <div className='startRating'>
            <div className='rating'><GradeSharp /> {rating}</div>
            <Button onClick={()=> dispatch(addToCart({id, name, price, img, qty:1}))}>Add to Cart</Button>
        </div>
    </div>
    </>
  )
}

export default FoodCard