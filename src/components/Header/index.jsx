import React from 'react'
import {goToSection} from "../scroll"
import {goToSection2} from "../scroll"




const Header = () => {
    return (
        <nav className=" bg-info fixed-top">
            <div className="d-flex align-items-center container">
            <a href="#" className="navbar-brand text-white">Logo</a>
            <ul className="d-flex m-0">
                <li onClick={goToSection} className="list-unstyled p-4"><a className="text-white text-decoration-none" href="#mobile">Home</a></li>
                <li onClick={goToSection2} className="list-unstyled p-4"><a className="text-white text-decoration-none" href="#">Abut</a></li>
                <li className="list-unstyled p-4"><a className="text-white text-decoration-none" href="#">Services</a></li>
                <li className="list-unstyled p-4"><a className="text-white text-decoration-none" href="#">Contact</a></li>
            </ul>
            </div>
           
        </nav>
    )
}

export default Header
