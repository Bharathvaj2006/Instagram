import React from 'react'
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom';

function Stories() {
  const srys=useFetch("http://localhost:3000/story");
  const navigate=useNavigate();
  let tot=null;
  if(srys) tot=srys.length;
  return (
    <div className='d-flex story '>
      {tot? (
        srys.map((st)=>(
          <div key={st.id} className='mx-1' onClick={()=>navigate(`/story/${st.id}/${tot}`)}>
            <div className='gradient-border' >
              <img className='story-dp rounded-circle' src={st.profileImage} alt="DP"/>
            </div>
            <p className='text-truncate'>{st.username}</p>
          </div>
        )
        )):(
        <p>Loading...</p>
      )
      }
    </div>
  )
}

export default Stories