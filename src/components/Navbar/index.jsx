// import React, {useState} from 'react';
// import Search from '../../pages/Search';
// import axios from 'axios';
import './style.scss';
const index = () => {
  //  const [user,setUser]=useState([])
  // const searchUsers = async (searchUser)=>{
  //       axios.get(`https://api.github.com/search/users?q=${searchUser}`).then((res)=>{
  //       setUser(res.data); 
  //      })  
  //   }  
  //   const [input, setInput] = useState("")
  //   const submitHandler = (e)=>{
  //     e.preventDefault()
  //     searchUsers(input)}
   return (
    <>
      <div className='navbar-bgc'>
   
<nav className="navbar navbar-expand-lg  ">

  <div className="container-fluid">

    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
      <svg className="" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill="currentColor">
        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
        </path>
      </svg>
      </a>
    
       <div className="flex w-64 min-w-0 mr-5 bg-gray-700 rounded">
       <form >
      <input type="text"   placeholder="Search or jump to..."  size="30" className="h-8 w-full px-2  border-0 outline-none inputs"/>
      <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="mr-2"/>
      </form>
      </div>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        <li className="nav-item">
          <a target='_blank' className="nav-link" href="https://github.com/pulls">Pull requests</a>
        </li>
        <li className="nav-item">
          <a target='_blank' className="nav-link" href="https://github.com/issues">Issues</a>
        </li>
        <li className="nav-item">
          <a target='_blank' className="nav-link" href="https://github.com/codespaces">codespaces</a>
        </li>
        <li className="nav-item">
          <a target='_blank' className="nav-link" href="https://github.com/marketplace ">Marketplace</a>
        </li>
        <li className="nav-item">
          <a target='_blank' className="nav-link" href="https://github.com/explore">Explore</a>
        </li>
      </ul>

    </div>



    <div className="d-flex align-items-center">

      <a className="text-reset me-3" href="#">

      <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-info">1</span>
      </a>


      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
              <i className="fa-solid fa-plus"></i>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href=""> New repository</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">import repository</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">New codespaces</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">New gist</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">New organization</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">New project</a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://avatars.githubusercontent.com/u/113345966?s=40&amp;v=4"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item w-100" href="#"> <strong className="css-truncate-target">BahodirZIyodali</strong></a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://github.com/BahodirZIyodali">Your profile</a>
          </li>
          
          <li>
            <a target='_blank' className="dropdown-item" href="https://github.com/BahodirZIyodali?tab=repositories"> Your repositories</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://github.com/BahodirZIyodali?tab=projects"> Your projects</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://github.com/BahodirZIyodali?tab=stars">Your stars</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://gist.github.com/BahodirZIyodali">Your gits</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://github.com/sponsors/accounts">Your sponsors</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://github.com/settings/billing/plans">Upgrade</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://github.com/organizations/enterprise_plan?ref_cta=Try%2520Enterprise&ref_loc=user_drawer_side_panel&ref_page=Header+Avatar">Try Enterprise</a>
          </li>
          <li>
            <a target='_blank'  className="dropdown-item" href="#">Feature preview</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://docs.github.com/en">Help</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="https://github.com/settings/profile">Setting</a>
          </li>
          <li>
            <a target='_blank' className="dropdown-item" href="#">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</nav>

      </div>
      {/* <Search user={user}/> */}
      </>
   );
};

export default index;


