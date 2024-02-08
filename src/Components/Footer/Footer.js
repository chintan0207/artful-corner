import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-cotainer'>
        <div className='row g-0 '>
          <div className='col col-12 col-sm-6 col-lg-4 mb-2'>
            <h6 className='pb-4 grey'>Our Address</h6>
            <p>2200 Clarendon Blvd., Suite 1400A </p>
            <p> Arlington, VA 22201, USA</p>
          </div>
          <div className='col col-sm-6 col-lg mb-2'>
            <h6 className='pb-4 grey'>Social</h6>
            <div className='social'>
              <a className='a' href='https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR'>Facebook</a>
              <a className="a" href='https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR'>Instagram</a>
              <a className='a' href='https://youtu.be/DZ-vHgffIYk?si=lKUO6BBcXxAXSSzR'>YouTube</a>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg mb-2'>
            <h6 className='pb-4 grey'>Phone</h6>
            <a className='a' href="tel:+1234567890">1800-145-789</a>
          </div>
          <div className='col-12 col-sm-6 col-lg mb-2'>
            <h6 className='pb-4 grey'>Email</h6>
            <a className='a' href="mailto:imchintan0207@gmail.com">artful-corner@gmail.com</a>
          </div>
        </div>
        <div className='row g-0 mt-4'>
          <div className='f-logo df row g-0'>
            <span className='f-span col'></span>
            <span className='col-6 col-md-3'>
              <h3 className='df'>Artful Corner</h3></span>
            <span className='f-span col'></span>
          </div>

        </div>
        <div className='p-3 pb-0 text-center grey '>
          <p>©  2024 Interia. All Rights Reserved. Design by artful-corner</p>
        </div>

      </div>
    </div>
  )
}

export default Footer