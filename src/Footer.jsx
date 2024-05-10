const Footer=()=>{
    const date = new Date().toLocaleDateString();
    const year=new Date(date).getFullYear();
    
    return(
        [
            <div className="container">
      <div className="content">
       
      </div>
     
    </div>,
<footer className="footer">copyright © {year}</footer>,

        ]
    )
}
export default Footer;