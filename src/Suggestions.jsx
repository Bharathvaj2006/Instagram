import React from 'react'
import useFetch from './useFetch'
import axios from 'axios';

function Suggestions() {
  const profile = useFetch("http://localhost:3000/profile");
  const sugg = useFetch("http://localhost:3000/suggestions");

  const flwHandle=async (data)=>{
    axios.post('http://localhost:3000/followers',data)
    .then(()=>alert("Followed"))
    .catch(err=> console.log(err));
  }

  return (
    <div className='position-fixed'>
      <div className='suggestions w-100 m-4'>
        {profile ?
          <div className='d-flex'>
            <img className='dp rounded-circle' src={profile.profileImage} alt="Profile img" />
            <h5>{profile.username}</h5>
            <small className='ms-auto text-primary'>Switch</small>
          </div> :
          <div>
            <p>Loading...</p>
          </div>
        }
        <div className='d-flex'>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>
        <div>
          {
            !sugg ?
              (<div>
                Loading...
              </div>) :
              (<div>{
                sugg.map((sg) => (
                  <div className='m-2' key={sg.userId}>
                    <div className='d-flex'>
                      <img className='dp rounded-circle' src={sg.profileImage} alt="Profile img" />
                      <p>{sg.username}</p>
                      <small className='hov ms-auto text-primary' onClick={() => flwHandle(sg)}>Follow</small>
                    </div>
                  </div>
                ))}
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Suggestions