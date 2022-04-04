import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './_Slider.scss'

const Slider = () => {
    return (
        <div className="demo-carousel">
            <Carousel showThumbs={false} showArrows={true} dynamicHeight={true}>
                <div className="slide">
                    <img className="slider-image" src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="slide">
                    <h4>Apple Watch Series 6 <span>уже в наличии</span></h4>
                    <img className="slider-image" src="https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider