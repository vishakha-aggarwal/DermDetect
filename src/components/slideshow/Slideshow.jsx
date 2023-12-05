import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../../images/slider1.png'
import img2 from '../../images/slider2.jpeg'
import img3 from '../../images/slider3.jpeg'
import img4 from '../../images/slider4.jpeg'
import img5 from '../../images/slider5.jpeg'
import './slideshow.css'
import { Projects } from './Card';

const slideImages = [img1, img2, img3, img4, img5];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <hr style={{margin: "20px"}}/>
        <div className='home-heading' style={{margin: "20px"}}>What do we do? </div>

        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div  key={index}>
              {/* <img className = "sliderImg" src = {slideImage} /> */}
              <Projects />
            </div>
          ))} 
        </Slide>
       </div>
    )
}
export default Slideshow;