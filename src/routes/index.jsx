
import Overview from'../pages/Overview'
import Packages from'../pages/Packages'
import Project from'../pages/Project'
import Repos from'../pages/Repos'
import Stars from'../pages/Stars'
import Follower from'../pages/Follower'
import Following from'../pages/Following'
import { Route,Routes } from 'react-router-dom';

import Error from '../components/Error'
import React from 'react'

const index = () => {
  return (
    
 <Routes>
 <Route path='/follower' element={<Follower/>}/>
 <Route path='/following' element={<Following/>}/>
 <Route path="/" element={<Overview />}/>
 <Route path="/repositories" element={<Repos/>}/>
 <Route path="/project" element={<Project />}/>
 <Route path="/packeges" element={<Packages />}/>
 <Route path="/stars" element={<Stars />}/>
 <Route path='*' element={<Error/>}/>
</Routes>
  )
}

export default index