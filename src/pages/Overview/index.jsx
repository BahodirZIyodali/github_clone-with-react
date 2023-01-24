import React ,{useEffect,useState}from 'react'
import axios from 'axios';
import './style.css'
const index = () => {
const [rep,setRep]=useState([])
const [point,setPoint] = useState(5);
const [firstStep,setFirstStep] = useState(1);

 useEffect(() =>{
   axios.get('https://api.github.com/users/BahodirZIyodali/repos').then((response) =>{
    setRep(response.data)
   })
 },[])
 const lastData=firstStep * point;
 const currentPage=lastData - point;
 
 const sliceRep = rep.slice(currentPage,lastData);
 const steps =[]
 for (let i = 1; i <= Math.ceil(rep.length/point) ; i++){
   steps.push(i)
 }
 const paginate=(num)=>{
   setFirstStep(num)
 }


  return (
    <div className='container '>
    <div className='d-flex justify-content-between align-items-center'>
      <h4>Popular repositories</h4>
      <small>Customize your pins</small>
    </div>
      <div className="wrappper">
      {
        sliceRep.map((el)=>{
          return(
       <div className='wrap pt-2 pl-1 ' key={el.id}>     
     <div className='d-flex justify-content-between align-items-center'>
     <a href={el.html_url} target='_blank' >{el.name}</a>
     <button className='btn btns'>{el.visibility}</button>
     </div>
     <div className='mt-3'>{el.language}<p className={el.language} ></p></div>
       </div>
         )
       })
      }
      </div>
      <nav aria-label='...' className='mx-auto  d-block mt-5'>
         <ul className='pagination pagination-sm  '>
     
         {steps.map((step,i)=>{
            return(
                <li key={i} style={{cursor:"pointer"}} className= {`page-item ${step=== firstStep ? "active": ""}`} aria-current="page"
                onClick={()=> paginate(step)}
                >
                  <span className="page-link">{step}</span>
                </li>
            )
         })}

         </ul>

      </nav>

    </div>
  )
}

export default index