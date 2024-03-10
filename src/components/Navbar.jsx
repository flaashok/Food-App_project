import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slice/SearchSlice';

const  Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav>
        <div>
            <h3>{new Date().toDateString().slice(0, 16)}</h3>
            <h1>Pizza Food Store</h1>
        </div>
        <div>
            <input className='searchSection' onChange={(e) => dispatch(setSearch(e.target.value))} type='search' name='search' placeholder='Search' id='' autoComplete='off'/>
        </div>
    </nav>
  )
}

export default Navbar