import "../Style/header.css";
import Link from "next/link";


function Header(){
    return(
        <div className="Header-container">
            <div className="Left-Div">
                <h1>MSK</h1>
            </div>
            <div className="Right-Div">
                <ul className="Div-Nav">
                    <li>
                        <Link className="Nav-Link" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="Nav-Link" href="./aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link className="Nav-Link" href="./contactus">Contact Us</Link>
                    </li>
                
                </ul>
            </div>

             
        </div>
         
        
    )
}

export default Header

