import React from 'react'
import { RiTeamLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import './about.css'

const About = () => {
    return (
        <div className='aboutus'>
            <div className='au'>
                <div className='row g-0'>

                    <div className='col-md-12 col-lg-6 left '>
                        <div>
                            <h1>Why Choose Us</h1>
                            <p className='pp'>Besides great interior design, there are lots of reasons to choose Interia.
                                Here are some of the most popular ones.</p>
                        </div>
                        <div className='d-box flex-column'>
                            <div className='d-flex gap-3'>
                                <div className=''>
                                    <RiTeamLine className='icon' />
                                </div>
                                <div className=''>
                                    <h5>Professional Team</h5>
                                    <p>Our team includes only the best decorators and interior designers in the industry.</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className=''>
                                    <FaRegLightbulb className='icon' />
                                </div>
                                <div className=''>
                                    <h5>Unusual Ideas</h5>
                                    <p>Our designers generate various yet always original ideas that will surely fit your needs.</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className=''>
                                    <FaRegHeart className='icon' />
                                </div>
                                <div className=''>
                                    <h5>Made with Respect</h5>
                                    <p>All our work is built around respect to our clients, great service, and creativity.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-12 col-lg-6 row g-0'>
                        <div className='col-md-12 pics'>
                            <img className='pic1 pt-4' src="./Img/about2.jfif" height={400} width={250} />
                            <img className='pic2' src="./Img/about3.jpg" height={250} width={300} />

                        </div>
                        <div className='col-md-12 pics2'>
                            <img className='pic3 p-4' src="./Img/about4.jpg"/>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default About