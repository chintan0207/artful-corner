import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './portfolio.css'

var pData = require("../projects.json")

const Portfolio = () => {
    // console.log(pData);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            // slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 700 },
            items: 2,
            // slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            // slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='portfolio'>
            <div className='row g-0 mb-3'>
                <div className='col-12 col-md-6'>
                    <h1>Our Projects</h1>
                </div>
                <div className='col-12 col-md-6 pt-2'>
                    <p>All our projects are unique and designed to last.
                        Take a look at our recent works to find it out for yourself.</p>
                </div>
            </div>
            <div className='row g-0 mt-5'>
                <Carousel responsive={responsive}
                          autoPlay={true}
                          autoPlaySpeed={3000} infinite className='car g-0'>

                {pData.map((item) =>{
                    return(
                        <div className='one-box' key={item.id}>
                        <img src={item.projectImg} alt="" height={275} width={300} />
                        <h4 className='mt-3'>{item.projectPlace}</h4>
                        <p className='mt-1 mb-2'>{item.projectType}</p>
                    </div>
                )})}
                   

                </Carousel>;
            </div>
        </div>
    )
}

export default Portfolio