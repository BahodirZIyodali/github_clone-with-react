import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Intro from'./pages/intro'
import Home from'./components/Home'
import  Route  from './routes';
const App = () => {
  return (
    <>
      <Navbar/>
      <Intro/>
       <div className='container '>
       <main className='basis'> 
       <Home/>
       <Route/>
      </main>
       </div>
      <Footer/>
    </>
  );
};

export default App;