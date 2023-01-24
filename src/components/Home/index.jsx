import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./style.scss";

const index = () => {
   const [user,setUser]=useState([])
   useEffect(()=>{
    axios.get('https://api.github.com/users/BahodirZIyodali').then((res)=>{
      setUser(res.data) 
    })
   },[])
   return (
      <div className='container home'>
            <img className='rounded-circle  w-75' src={user.avatar_url} alt="" />
         <h1 className='mt-2'>{user.name}</h1>
        <h2 className='mt-1'>{user.login}</h2>
       <button className="btnEdit">
        <a href={user.html_url} className='text-dark' target='_blank'> Edit profile</a>
       </button>
       <div className='d-flex justufy-content-between gap-3  '>
        <Link className='text-dark' to='/follower' ><svg text="muted"  height="16" viewBox="0 0 16 16" version="1.1" width="16">
         <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
         </svg> {user.followers} followers</Link>
         <Link className='text-dark'd to='/following' >{user.following }following</Link>
       </div>
       <div className='mt-2 mb-10'><svg className="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" ><path fillRule="evenodd"  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg> <a href="https://www.google.com/maps/place/%D0%9C%D0%B8%D1%80%D0%BE%D0%B1%D0%BE%D0%B4+%D1%82%D1%83%D0%BC%D0%B0%D0%BD%D0%B8,+Tashkent,+O%60zbekiston/@41.2748417,69.2614568,13z/data=!3m1!4b1!4m5!3m4!1s0x38ae8aae2a839243:0x5dff3ea2aec089e1!8m2!3d41.2758912!4d69.2937133" target='_blank'>
          {user.location}
         </a></div>
      </div>
      

   );
};

export default index;

