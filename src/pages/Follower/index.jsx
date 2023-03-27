import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './style.css'
const index = () => {
  const [follower,setFollower]=useState([])
 useEffect(()=>{
 axios.get('https://api.github.com/users/BahodirZIyodali/followers').then((res)=>{setFollower(res.data)
 console.log(res.data)
})
 },[])
  return (
    <div className='container'>
    {
      follower.map((el)=>{
        return(
        <div key={el.id} >
        <div className=' h-25 mt-5  d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-start gap-4 align-items-center '>
        <img src={el.avatar_url} className='rounded-circle imgImg' alt=""  />
         <a href={el.html_url} target='_blank' className='text-secondary' key={el.id}>{el.login} </a>
        </div>
        <div className='d-flex justify-content-end'>
           <button className='btn btn-secondary'>folllow</button>
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
