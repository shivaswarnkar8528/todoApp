import React, { useState } from "react";

function TodoInput({ setFormdata, formData }) {
  const [data,setData]=useState({});
  ///change handle
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value ,status:"pending"  });
  }

  //submit handle
  function onSubmit(e){
    e.preventDefault();
    if(data.title){
      e.target.reset();
    setFormdata([...formData,data]);
    setData({})
    }
    else{
      alert("Please must Fill titile details")
    }
  }

  return (
    <div className="formmain">
      <form action="" onSubmit={onSubmit} className="form">
        <div>
          <label htmlFor="">Task : </label> <br /><br />
          <input
            type="text"
            placeholder="Enter Your Task"
            name="title"
            onChange={(e) => handleChange(e)}
          />{" "}
          &emsp;{" "}
        </div>
        <div>
          <label htmlFor="">Task Description: </label> <br /><br />
          <textarea
            name="description"
            placeholder="Task Description"
            onChange={(e) => handleChange(e)}
          />{" "}
          &emsp;{" "}
        </div>
        <div>
        <label htmlFor="">Priority: </label><br /><br />
        
        Low
       <input
         onClick={(e) => handleChange(e)}
         type="radio"
         value={"low"}
         name="priority"
       />{" "}
       Itermediate
       <input
         onClick={(e) => handleChange(e)}
         type="radio"
         name="priority"
         value={"itermediate"}
       />{" "}
       High
       <input type="radio" name="priority" value={"high"} onClick={(e) => handleChange(e)} />
        </div>
        <div>
          <input type="submit" />
        </div>
        {/* <Priority/> */}
      </form>
    </div>
  );
}

export default TodoInput;
