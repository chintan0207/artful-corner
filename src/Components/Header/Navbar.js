import React from 'react'
import './navbar.css'
import { FaBars } from "react-icons/fa";
import 'react-modern-drawer/dist/index.css'
import Drawerreact from './Drawerreact';
import { Link } from 'react-router-dom';
const Navbar = (props) => {

   const [isOpen, setIsOpen] = React.useState(false)
   const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
   }

   return (
      <>
         <div className='navbar'>
            <FaBars className='menu' onClick={toggleDrawer} />
            <div className='logo'>
               <h3>Artful Corner</h3>
            </div>
            <ul className='list'>
               <li><Link to="/home">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/portfolio">Portfolio</Link></li>
               <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className='last'>
               <a className='a' href="mailto:imchintan0207@gmail.com">artful-corner@gmail.com</a>
               <a className='a' href="tel:+1234567890">1800-125-444</a>
            </div>


         </div>

         <div className='drawer'>
            <Drawerreact
               open={isOpen}
               onClose={toggleDrawer}
               direction='right' />

         </div>
      </>
   )
}

export default Navbar