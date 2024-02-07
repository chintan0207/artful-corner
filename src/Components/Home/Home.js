import React, { useEffect, useState } from 'react'
import './home.css'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import { Link } from 'react-router-dom'


const Home = () => {

  const [isAnimated, setIsAnimated] = useState(false);


  useEffect(() => {

    setIsAnimated(true);

  }, []);

  return (
    <>

      <div className='main'>
        <div className='h-text'>
          <h1 className={isAnimated ? 'animate' : ''}>Interior design</h1>
          <h1 className={isAnimated ? 'animate' : ''}>and decore</h1>
          <h1 className={isAnimated ? 'animate' : ''}>for your home</h1>
          <p className={isAnimated ? 'mt-3 animate2' : 'mt-3'}>Our team creates comfortable spaces for our clients.
            We’ve been designing your everyday life and work through great ideas since 1999.
          </p>
          <Link className='clink' to='/contact'> <div className={isAnimated ? 'c-btn mt-3 animate3' : 'c-btn mt-3'}>
            Contact Us
          </div>
          </Link>
        </div>
      </div>
      <About />
      <Contact />
      <Portfolio />
    </>

  )
}

export default Home