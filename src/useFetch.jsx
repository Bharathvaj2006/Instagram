import React, { useState,useEffect } from 'react';

function useFetch(url) {

    const [data,setData]=useState(null);

    useEffect(()=>{
        fetch(url).
        then((data)=> data.json()).
        then((data)=> setData(data)).
        catch((err)=> console.log(err))

    },[]);

    return data;
}

export default useFetch