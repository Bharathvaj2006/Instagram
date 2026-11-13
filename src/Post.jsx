import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

function Post() {
  const posts=useFetch("http://localhost:3000/posts");


  return (
    <div className='d-flex justify-content-center'>
      {
      posts? 
        (<div>
          {
            posts.map((d)=>(
              <div className='my-3' key={d.id}>
                <div className='d-flex'>
                  <img className='dp rounded-circle' src={d.profileImage} alt="Profile img" />
                  <h5>{d.username}</h5>
                </div>
                <div>
                  <img className='pst' src={d.imageUrl} alt="Post" />
                </div>
                <div>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                </div>
                <div>
                  <b>{d.likes} Likes</b>
                </div>
                <div>
                  <p>{d.caption}</p>
                </div>
              </div>
            ))
          }
        </div>):
        (<div>
          Loding posts...
        </div>)
      }
    </div>
  )
}

export default Post