import React from 'react'
import{ FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa"
import './Navbar.css'

export default function Navbar(){

 

    return(
        <div>
            
            <div >
                <h1 className='not-nav'>THE MINIMALIST ARCHITECTS</h1>
            </div>
            {/* <nav>
                
                <div className="nav-header">
                    
                    <h4>THE MINIMALIST ARCHITECTS</h4>
                        
                    
                    
                    <div>
                        <ul className="social-icons">
                            <li className="twitter">
                                <a href="https://www.twitter.com"><FaTwitter /></a>
                            </li >
                            <li className="instagram">
                                <a href="https://www.instagram.com"><FaInstagram /></a>
                            </li>
                            <li className="linkedin">
                                <a href="https://www.linkedin.com"><FaLinkedin /></a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav> */}
        </div>
    )
}