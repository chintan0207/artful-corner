import React from 'react'
import Drawer from 'react-modern-drawer'
import { FaBars } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './navbar.css'

const Drawerreact = (props) => {
    return (
        <div className='dr'>
            <Drawer
                open={props.open}
                onClose={props.onClose}
                direction='left'
            >

                <div className='d-logo '>
                    <IoArrowBack onClick={props.onClose} className='d-back' />
                    <h3>Artful corner</h3>

                </div>

                <div className='d-menu' onClick={props.onClose}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </div>
            </Drawer>
        </div>
    )
}

export default Drawerreact