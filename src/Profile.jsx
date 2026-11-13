import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Profile() {
    const [profile, setProfile] = useState(null);
    const [produm, setProdum] = useState(null);
    const [followers, setFoll] = useState([]);
    const [unfollow,setUnfoll] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:3000/profile")
            .then((data) => { setProfile(data.data); setProdum(data.data) })
            .catch((err) => console.log(err));
        axios.get('http://localhost:3000/followers')
            .then(data => setFoll(data.data))
            .catch(err => console.log(err));
        
    },[unfollow]);

    function handleOnChange(ent) {
        setProdum({
            ...profile,
            [ent.target.name]: ent.target.value
        })
        console.log(produm)
    }

    const update = async () => {
        setProfile({ ...produm })
        axios.put('http://localhost:3000/profile', produm)
            .then(console.log('updated'))
            .catch(err => console.log(err));
        
    }

    const unFoll=async (fol)=>{
        axios.delete(`http://localhost:3000/followers/${fol.id}`,)
        .then(alert("Deleted"))
        .then(setUnfoll(!unfollowed))
        .catch((err)=> console.log(err));
        
    }

    return (
        <div className='m-5'>
            {profile ? (
                <div>
                    <img className='profile rounded-circle' src={profile.profileImage} alt="DP" />
                    <h5>{profile.username}</h5>
                    <input className='form-control my-4' type="text" name="username" value={produm.username || ""} onChange={handleOnChange} />
                    <input className='form-control my-4' type="text" name="profileImage" value={produm.profileImage || ""} onChange={handleOnChange} />
                    <button className='btn btn-primary' onClick={update}>Update</button>
                    <div className='my-4 foll'>
                        <h3>Followers</h3>
                        {followers.map(fol=>(
                            <div key={fol.userId} className='d-flex my-2'>
                                <img className='rounded-circle dp' src={fol.profileImage} alt="Dp" />
                                <p>{fol.username}</p>
                                <small className='hov ms-auto text-primary' onClick={()=>unFoll(fol)}>Unfollow</small>
                            </div>
                        )
                        )}
                    </div>
                </div>
                
            ) : (
                <div>Loading profile</div>
            )}

        </div>
    )
}

export default Profile