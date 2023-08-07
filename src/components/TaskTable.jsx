import { color } from "@mui/system";
import React from "react";
import { RiDeleteBin6Line, RiSkipBackFill } from 'react-icons/ri';


function TaskTable({ formData, setFormdata }) {
    function handleStatus(index){
        let data=[...formData];
        let obj = {...data[index], status:'complete'};
        data[index] = obj; 
        setFormdata(data);
    }
    const handleDelete=(index)=>{
      console.log(index);
      let data=[...formData];
      data.splice(index,1);
      setFormdata(data);
    }
    function clearAll(){
        let data=[...formData];
        let AllpendingData=data.filter((ele)=>ele.status!=="complete");
        setFormdata(AllpendingData);
    }
  return (
    <div>
      <h3>Pending Task</h3>
      <table border={"1px"}>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th style={{ width: "250px" }}>Title</th>
            <th style={{ width: "400px" }}>Description</th>
            <th>Priority</th>
            <th>mark</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            formData.length?formData.map((task,index)=>{
                return <>
               {task.status=="pending"?<tr style={{background:task.priority=="high"?"red":task.priority=="itermediate"?"yellow":"black" ,color:task.priority=="itermediate"?"black":"white"}}>
                    {/* <td>{index+1}</td> */}
                    <td>{task.title}</td>
                    <td style={{ maxWidth: "500px",wordBreak:"break-all"} }>{task.description}</td>
                    <td>{task.priority}</td>
                    <td><input type="checkbox" onClick={()=>handleStatus(index)}/></td>
                    <td><RiDeleteBin6Line style={{color:"red", backgroundColor:"white",marginLeft:"10px"}} onClick={()=>handleDelete(index)}/></td>

                </tr>:""}
                </>
            }):""
          }        
         {!formData.length?"No Row Found":""}
        </tbody>
      </table>


      <h3>completed Task</h3> <button onClick={clearAll}>Clear All</button>
      <table border={"1px"}>
        <thead>
          <tr>
            <th style={{ width: "250px" }}>Title</th>
            <th style={{ width: "400px" }}>Description</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            formData.length?formData.map((task,index)=>{
                return <>
               {task.status=="complete"?<tr style={{background:task.priority=="high"?"red":task.priority=="itermediate"?"yellow":"black" ,color:task.priority=="itermediate"?"black":"white"}}>
                    <td>{task.title}</td>
                    <td style={{ maxWidth: "500px",wordBreak:"break-all"} }>{task.description}</td>
                    <td>{task.priority}</td>
                    <td>Completed</td>
                </tr>:""}
                </>
            }):""
          }
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
