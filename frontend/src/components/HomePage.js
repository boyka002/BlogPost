import React from 'react'
import Header from './Header'
import SearchFilter from './SearchFilter'
import "../styles/HomePage.css"
import BlogHeader from './BlogHeader'
import BlogCards from './BlogCards'

const HomePage = () => {
  return (
    <div className='home-page'>
      <Header/>
      <div className='search-filter-flex'><SearchFilter/></div>
        <BlogHeader/>
      <div className='blog-card-grid'>
        <BlogCards/>
        <BlogCards/>
        <BlogCards/>
      </div>
    </div>
  )
}

export default HomePage
