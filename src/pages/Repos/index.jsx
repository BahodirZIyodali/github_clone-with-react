import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./style.css";

const index = () => {
  const [rep, setRep] = useState([]);
  const [point, setPoint] = useState(9);
  const [firstStep, setFirstStep] = useState(1);
  const [value, setValue] = useState();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/BahodirZIyodali/repos")
      .then((response) => {
        setRep(response.data);
      });
  }, []);

  const lastData = firstStep * point;
  const currentPage = lastData - point;

  const sliceRep = rep.slice(currentPage, lastData);
  const steps = [];
  for (let i = 1; i <= Math.ceil(rep.length / point); i++) {
    steps.push(i);
  }

  const paginate = (num) => {
    setFirstStep(num);
  };

  const inputHandl = (e) => {
    e.target.value;
  };

  const filteredRep = useMemo(() => {
    return sliceRep.filter((c) =>
      c.name.toLowerCase().includes(value.toLowerCase())
    );
  }, [value]);

  return (
    <div className="container ">
      <div className="sort d-flex">
        <input
          type="text"
          className="form-control inputW "
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="find a repository..."
        />
        <select className="form-control btnW ">
          <option>Type</option>
          <option>Public</option>
          <option>Private</option>
          <option>Sources</option>
          <option>Forks</option>
          <option>Archived</option>
          <option>Mirrors</option>
          <option>Templates </option>
        </select>
        <select className="form-control btnW ">
          <option>Language</option>
          <option>All</option>
          <option>JavaScript</option>
          <option>Css</option>
          <option>HTML</option>
          <option>SCSS</option>
        </select>
        <select className="form-control btnW ">
          <option>Sort</option>
          <option>Last updated</option>
          <option>Name</option>
          <option>Stars</option>
        </select>
        <a href="https://github.com/new" target="_blank">
          <button className="btn btn-success btnN">New</button>
        </a>
      </div>
      {filteredRep.map((el) => {
        return (
          <div className="wrapRep pt-2 pl-1 " key={el.id}>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-start gap-3 ">
                <a href={el.html_url} target="_blank">
                  {el.name}
                </a>
                <button className="btn">{el.visibility}</button>
              </div>
              <div className="d-flex justify-content-end  ">
                <button className="star btn btn-secondary text-black">
                  <svg
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    className="octicon octicon-star






// import React, { useEffect, useState } from 'react';
// import "./style.scss";
// import axios from 'axios';

// const index = () => {

//    const [total, setTotal] = useState(3);
//    const [totalIndex, setTotalIndex] = useState(1);
//    const firstOperator = total * totalIndex;
//    const lastOperator = firstOperator - total;
//    const [state, setState] = useState("")
//    const [users, setUsers] = useState([])
//    const [qidiruvFunc, setQidiruvFunc]= useState([])
//    const [load, setLoading] = useState(true)
//    const pushArray = [];
//    const res = async () => {
//          const res = await axios.get('https://api.github.com/users/ShohsultonCode/repos')
//          setUsers(res.data)
//       setQidiruvFunc(res.data)
//          if (res.data) {
//             setLoading(false)
//          }
//    }

//    useEffect(() => {
//          res()
//    }, [])
//    if (load) {
//       return(
//          <h2 className='load'>Loaing...</h2>
//       )
//    }

//    const keyChangeUp = (e) => {
//       const keyValue = e.target.value;
//       setState(keyValue);
  
//       if (keyValue.trim().length > 0) {
//         const filtered = users.filter((item) =>
//           item.name.toLowerCase().includes(keyValue.trim())
//         );
//         setUsers(filtered);
//       } else {
//         setUsers(qidiruvFunc);
//       }
//     };
  

//    const sliceApi = users.slice(lastOperator, firstOperator);
//    for (let i = 1; i <= Math.floor(users.length / total); i++) {
//          pushArray.push(i)
//    }

//    const ClickedBtn = (number) => {
//          setTotalIndex(number);
//    };

//    return (
//          <div className="wrapper">
            


//                <div className="ikkinchi mt-5">
//                <input 
//                   type="text"
//                   placeholder='Find a repasitory...'
//                   className='form-control'
//                   id='findres'
//                   value={state}
//                   onInput={(e) => keyChangeUp(e)}
//                   />
//                      <div className='title-line mx-2 mt-4'>
//                            <h5 className='mx-2'>Popular repositories</h5>
//                            <p>Customize your pins</p>
//                      </div>
//                      <div className="manba">
//                            {
//                                  users.length > 0 ? sliceApi.map((item, index) => {
//                                        return (
//                                              <div key={index} className="card w-100" id='ccc'>
//                                                    <div id='firrar' className="first d-flex justify-content-between align-items-center mt-2"><a style={{ textDecoration: "none" }} href={item.html_url}>{item.name}</a> <button id='pub'>Public</button></div>
//                                                    <div className="fordes w-100">
//                                                          <p className='mx-4'>{item.description}</p>
//                                                    </div>
//                                                    <div className="forlan mx-5">
//                                                    <p className='mx-4'>{item.language}<div className={item.language}></div></p>
//                                                    </div>
//                                              </div>
//                                        )
//                                  }) : "Not Found"
//                            }
//                      </div>
//                      <div className="pinnedCard-btnGroup mt-3">
//                            {pushArray.length && pushArray.map((item, index) => (
//                                 <div className="btnss">
//                                   <button
//                                        key={index}
//                                        className="pinnedCard-btnGroup__btn btn btn-primary"
//                                        type="button"
//                                        onClick={() => ClickedBtn(item)}
//                                  >
//                                        {item}
//                                  </button>
//                                 </div>
//                            ))}
//                      </div>


//                </div>
//          </div>

//    );
// };

// export default index;
