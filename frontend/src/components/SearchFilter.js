import React from 'react'
import "../styles/SearchFilter.css"

const SearchFilter = () => {
  return (
    <div className='search-filter'>
      <input placeholder='Search'></input>
      <select>
        <option>Food</option>
        <option>Travel</option>
        <option>Sports</option>
      </select>
    </div>
  )
}

export default SearchFilter
