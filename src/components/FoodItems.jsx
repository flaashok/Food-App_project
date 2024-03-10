import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import { useSelector } from 'react-redux'

const FoodItems = () => {
  const category = useSelector((state) => state.categories.category);
  const search = useSelector((state) => state.search.search);
  console.log(category);
  return (
    <>
    <div className='foodWrap'>
    {FoodData.filter((item) => {
      if(category === "All"){
        return item.name.toLowerCase().includes(search.toLowerCase());
      }else{
        return category === item.category && item.name.toLowerCase().includes(search.toLowerCase());
      }
    }).map((item) => (<FoodCard key={item.id} id={item.id} name={item.name} price={item.price} desc={item.desc} rating={item.rating} img={item.img}/>))
        
        
        // FoodData.map((item) => {
        //     return (
        //         <FoodCard key={item.id} id={item.id} name={item.name} price={item.price} desc={item.desc} rating={item.rating} img={item.img}/>
        //     );
        // })
    }
    </div>
    </>
    
  )
}

export default FoodItems