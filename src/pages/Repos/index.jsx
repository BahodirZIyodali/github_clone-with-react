import React ,{useEffect,useState,useMemo}from 'react'
import axios from 'axios';
import './style.css'

const index = () => {
  const [rep,setRep]=useState([])
  const [point,setPoint] = useState(9);
  const [firstStep,setFirstStep] = useState(1);
  const [value,setValue] = useState()
  const[state,setState]=useState()

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
   let keyValue=''
  const inputHandl =(e)=>{
    keyValue = e.target.value;
    setValue(keyValue)
  }
   if (keyValue.trim().length > 0) {
   let filteredRep= sliceRep.filter((c)=>c.name.toLowerCase().includes(value)) 
      setRep(filteredRep)
   }
   else{
    setState(sliceRep); 
   }
  return (
    <div className='container '>
      <div className="sort d-flex">
                <input type="text" className='form-control inputW ' value={value} onChange={inputHandl}    placeholder='find a repsitory...' />
                <select className='form-cont rol btnW '>
                    <option >Type</option>
                    <option >Public</option>
                    <option >Private</option>
                    <option >Sources</option>
                    <option >Forks</option>
                    <option >Archived</option>
                    <option >Mirrors</option>
                    <option >Templates </option>
                </select>
                <select className='form-control btnW '>
                    <option>Language</option>
                    <option>All</option>
                    <option>JavaScript</option>
                    <option>Css</option>
                    <option>HTML</option>
                    <option>SCSS</option>
                </select>
                <select className='form-control btnW '>
                    <option>Sort</option>
                    <option>last updated</option>
                    <option>Name</option>
                    <option>Stars</option>
                </select>
                <a href="https://github.com/new" target='_blank'><button className="btn btn-success btnN" >New</button></a>
            </div> {
          rep.map(el =>{
          return(
            <div className='wrapRep pt-2 pl-1 ' key={el.id}>  
            <hr />   
           <div className='d-flex justify-content-between align-items-center' >
           <div className='d-flex justify-content-start gap-3 '>
          <a href={el.html_url} target='_blank' >{el.name}
             </a>
          <button className='btn'>{el.visibility}</button>
          </div>
          <div className='d-flex justify-content-end  '>
           <button className='star btn btn-secondary text-black'   >
           <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon octicon-star UnderlineNav-octicon hide-sm">
         <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
         </svg> 
             star</button>
          </div>
           </div >
          <div className='d-flex justify-content-between align-items-center'>
          <div className='mt-3'>{el.language}<p className={el.language}  ></p></div>
           <div className='line '></div>
          </div>
            </div>
              ) 
         } )
      }

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
export default  index
