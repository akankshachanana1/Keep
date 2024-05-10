import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Note=(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return(
        [


  <div class="card"id="abc" >

  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.content}</p>
    <IconButton aria-label="delete" size="large" style={{color:"orange"}} onClick={deleteNote}>
        <DeleteIcon />
      </IconButton>
  </div>
</div>
 
        ]
    )
}
export default Note;