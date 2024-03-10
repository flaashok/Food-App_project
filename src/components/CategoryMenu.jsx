import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slice/CategorySlice';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    
    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
        //console.log(uniqueCategories);
        setCategories(uniqueCategories);
    }
    useEffect(() => {
      listUniqueCategories();
    }, [])
    
const dispatch = useDispatch();
const seletedCategory = useSelector((state) => state.categories.category);
//console.log(seletedCategory);

  return (
    <>
        <div className='food-title'>Find The Best Food</div>
        <div className='menuWrap'>
        <ul className='foodMenu'>
            <li>
                <Link to={'javascript:void(0)'} onClick={() => dispatch(setCategory("All"))} className={seletedCategory === 'All' && 'active'}>All</Link>
            </li>
            {categories.map((item, index) => {
                return (
                    <li key={index}>
                        <Link to={'javascript:void(0)'} onClick={() => dispatch(setCategory(item))} className={seletedCategory === item && 'active'}>{item}</Link>
                    </li>
                )
                })
            }
           
            {/* <li>
                <Link to={'/'}>Lunch</Link>
            </li>
            <li>
                <Link to={'/'}>Breakfast</Link>
            </li>
            <li>
                <Link to={'/'}>Dinner</Link>
            </li>
            <li>
                <Link to={'/'}>Snacks</Link>
            </li> */}
        </ul>
        </div>
    </>
  )
}

export default CategoryMenu