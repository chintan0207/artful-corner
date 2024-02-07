import React from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { ImCalculator } from "react-icons/im";
import { FaRegStar } from "react-icons/fa6";
import './contact.css'
import Cform from './Cform';

const Contact = () => {
    return (
        <div className='contactus'>
            <div className='c-title'>
                <h1>Book a free designer</h1>
                <h1>consultation</h1>
                <h5 className='pt-3'>A great way to your new interior</h5>
            </div>
            <div className='row g-0'>
                <div className='col-12 col-md-4 c-box'>
                    <IoChatbubbleEllipsesOutline className='icon' />
                    <h5>Discuss every aspect of your </h5>
                    <h5>interior with one of our designers</h5>
                    <div className='border-div'>  </div>

                </div>
                <div className='col-12 col-md-4 c-box'>

                    <ImCalculator className='icon' />
                    <h5>Discuss every aspect of your </h5>
                    <h5>interior with one of our designers</h5>
                    <div className='border-div'>  </div>
                </div>
                <div className='col-12 col-md-4 c-box'>

                    <FaRegStar className='icon' />
                    <h5>Discuss every aspect of your </h5>
                    <h5>interior with one of our designers</h5>
                    <div className='border-div'> </div>

                </div>

            </div>
            <div className='contactform mt-5'>
            <Cform/>
                
            </div>
        </div>
    )
}

export default Contact