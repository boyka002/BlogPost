import React from 'react'
import "../styles/BlogCard.css"
import girl from "../assets/girl.png"

const BlogCards = () => {
  return (
    <div>
      <div className='blog-card'>
        <img src={girl}></img>
      </div>
      <h1>Title</h1>
      <div className='blog-detail-flex'>
        <p>Username</p>
        <p>Date posted</p>
      </div>
    </div>
  )
}

export default BlogCards
