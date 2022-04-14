import React, {useState, useRef, useEffect} from 'react'
import {  Nav, Container } from 'react-bootstrap';
import{FaBars, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa"
import './Navbar.css'

export default function Navbar(){

 

    return(
        <div>
            

            <nav>
                
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
            </nav>
        </div>
    )
}