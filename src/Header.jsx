import logo from "./Images/logo.png"
const Header=()=>{
    return(
        [
<div className="header">
    <img src={logo} alt="logo" width="70" height="70"  />
    <h1 style={{display:"inline"}}>Akanksha Keep</h1>
</div>
        ]
    )
}
export default Header;