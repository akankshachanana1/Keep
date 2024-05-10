
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";
const App=()=> {
  const[addItem,setAdd]=useState([
      
  ]);
  const addNote=(note)=>{
    // alert("I m clicked");
    setAdd((pre)=>{
      return [...pre,note]
    })
  }
  const onDelete=(id)=>{
setAdd((p)=>{
 return  p.filter((curr,ind)=>ind!==id
  )
})
  }
  return (
 [
<Header />,
<CreateNote passNote={addNote }/>,

addItem.map((val,index)=>{
  return <Note 
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
  />
  
}),
<Footer />
 ]
  );
}

export default App;
