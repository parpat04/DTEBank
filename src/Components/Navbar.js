import React, { useState } from 'react'
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { faGears } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import logo from "./images/logo.png"


const Navbar = () => {
    const[open, setOpen] = useState(false)

    return (
        <div>
        <div>
            <nav className={open ? "nav" : "mini"} onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                <h2><img src={logo} alt=""/> &nbsp;&nbsp;DTE Bank</h2>
                <ul>
                    <a href='#about'><li><FontAwesomeIcon className='icon' icon={faUser} />  About</li></a>
                    <a href='#services'><li><FontAwesomeIcon className='icon' icon={faGears} />Services</li></a>
                    <a href='#login'><li><FontAwesomeIcon className='icon' icon={faBuildingColumns} /> Login</li></a>
                    <a href='#contact'><li><FontAwesomeIcon className='icon' icon={faAddressCard} />Contact</li></a>
                </ul>
            </nav>
        </div>
        </div>

    )
}

export default Navbar