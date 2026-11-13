import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import useFetch from './useFetch';

function ViewStory() {
  const { id, tot } = useParams();
  const [strys, setStrys] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`).
      then((data) => data.json()).
      then((data) => setStrys(data)).
      catch((err) => console.log(err))

  }, [id]);
  if (id > tot || id < 1) {
    navigate('/');
  }
  return (
    <div>
      {strys ? (
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={`http://localhost:5173/story/${Number(id) - 1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
          <img className='vh-100 w-st' src={strys.imageUrl} alt="Story" />
          <Link to={`http://localhost:5173/story/${Number(id) + 1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
        </div>
      ) : (<div>Loading...</div>)
      }
    </div>
  )
}

export default ViewStory