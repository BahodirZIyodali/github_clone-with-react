import React from 'react';
import './style.css'
const  index = () => {
    return (
        <div className='container mt-5 wrapProject'>
            <h2>Welcome to the all-new projects</h2>
            <p>Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.</p>
            <button className="btn btn-light w-25 border"><a href="https://docs.github.com/en/issues/ planning-and-tracking-with-projects" className='text-dark' target='_blank'>Learn More</a></button>
            <div className='card border h-50 mt-5'>
                <a className='text-center mt-5' href="">   <svg  height="24" viewBox="0 0 24 24" version="1.1" width="24"  className="octicon octicon-table blankslate-icon">
                <path fillRule="evenodd" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0120.25 22H3.75A1.75 1.75 0 012 20.25V3.75zM3.5 9v11.25c0 .138.112.25.25.25H7.5V9h-4zm4-1.5h-4V3.75a.25.25 0 01.25-.25H7.5v4zM9 9v11.5h11.25a.25.25 0 00.25-.25V9H9zm11.5-1.5H9v-4h11.25a.25.25 0 01.25.25V7.5z"></path>
           </svg></a>
           <h3 className='text-center mt-3 '>Create your first GitHub project</h3>
           <p className='text-center mt-1 '>Projects are a customizable, flexible tool for planning and tracking your work.</p>
              <div className='text-center mt-3'>
              <button className='w-10 btn btn-success'><a href="https://github.com/users/BahodirZIyodali/projects/1"className='text-light' target='_blank' >New project</a></button>
              </div>

            </div>
        </div>

    );
};

export default index;