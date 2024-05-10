import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
const CreateNote =(props)=>{
    const [data,setData]=useState({
        title:"",
        content:"",
    });
    
    const InputEvent=(e)=>{
        const v=e.target.value;
        const n =e.target.name;
        const{name,value}=e.target;
        setData((prev)=>{
            return{
                ...prev,[name]:value,
            }
        })
    }
    const addEvent=()=>{
props.passNote(data);
setData({
    title:"",
    content:"",
});
    }
    return(
[
/* <div className="main_note">
    <form >
        <input name="title" type="text" value={data.title} onChange={InputEvent}placeholder="Title"/>
        <textarea name="content"rows=''colum="" value={data.content} onChange={InputEvent} placeholder="Write a note..." autoComplete='off'></textarea>
        <IconButton aria-label="add" size="medium" style={{backgroundColor:"white",color:"orange"}} onClick={addEvent}>
        <AddIcon fontSize="inherit" />
      </IconButton>
    </form>

</div>,
<form>
  <div class="form-group">
    <label for="exampleInputEmail1"></label>
    <input type="text" name="title" value={data.title} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={InputEvent} placeholder="Title" />
   
  </div>
  <div class="form-group">
   
    <textarea type="text" name="content"rows=''colum="" value={data.content} onChange={InputEvent} class="form-control" id="exampleInputPassword1" placeholder="Write a note..." autoComplete='off'/>
  </div>

  
  <IconButton aria-label="add" size="medium" style={{backgroundColor:"white",color:"orange"}} onClick={addEvent}>
        <AddIcon fontSize="inherit" />
      </IconButton>
</form>, */
<div class="card text-center">
  <div class="card-header">
 WhatToDo?
  </div>
  <div class="card-body">
    <h5 class="card-title"><input type="text" name="title" value={data.title} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"onChange={InputEvent} placeholder="Title" />
   </h5>
    <p class="card-text"> <textarea type="text" name="content"rows=''colum="" value={data.content} onChange={InputEvent} placeholder='Write a note ....'/></p>
 
  </div>
 
  <IconButton aria-label="add" size="large" style={{backgroundColor:"white",color:"orange"}} onClick={addEvent}>
        <AddIcon fontSize="inherit" />
      </IconButton>
</div>
]        
    )
}
export default CreateNote;