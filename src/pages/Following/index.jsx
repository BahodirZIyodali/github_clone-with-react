import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './style.css'
const index = () => {
  const [following,setFollowing]=useState([])
 useEffect(()=>{
 axios.get('https://api.github.com/users/BahodirZIyodali/following').then((res)=>{setFollowing(res.data)
 console.log(res.data.items)
})
 },[])
  return (
    <div className='container'>
    {
      following.map((el)=>{
        return(
        <div key={el.id} >
        <div className=' h-25 mt-5  d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-start gap-4 align-items-center '>
        <img src={el.avatar_url} className='rounded-circle imgImg' alt="" />
         <a href={el.html_url} target='_blank' className='text-secondary' key={el.id} >{el.login}</a>
        </div>
        <div className='d-flex justify-content-end'>
           <button className='btn btn-secondary'>unfolllow</button>
        </div>
        </div>
        <hr />
        </div>  )
      })
    }
    </div>
  )
}

export default index