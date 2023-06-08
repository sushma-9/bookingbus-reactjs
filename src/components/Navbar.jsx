import { useState } from "react";
import '../styles/navbar.css'
function Navbar()
{
    let {drop,setdrop} = useState(false)
    return(
        <nav>
            <div id="logo">
            <i className='bx bxs-leaf'></i>
            </div>
 
            <div id="hamberger" onClick={()=>{setdrop(!drop)}}>
                {drop==false ? <i className='bx bx-menu'></i> :
                                <i className='bx bx-menu-alt-left' ></i>}
            
            </div>

            <div id="dropdown">
                <li>
                    <ul><a href="">about us</a></ul>
                    <ul><a href="">about us</a></ul>
                    <ul><a href="">about us</a></ul>
                    <ul><a href="">about us</a></ul>
                    <ul><a href="">about us</a></ul>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;