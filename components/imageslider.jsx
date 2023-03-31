import React, {useState} from 'react'
import PetsData from './petsdata';
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa';

function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = PetsData.length

    // function to get to the next slide 
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }
  if(!Array.isArray(slides) || slides.length <=0) {
    return null
  }
  
  
    return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={(prevSlide)}  />
        
        {PetsData.map((slide,index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index} >
                    {index === current && (<img src={`public/images/pets/${slide.img}`} className='petspic'/>)}
                    {index === current && (<h2>{slide.title}</h2>)}
                </div>

            )
        })}
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        </section>
  )
}

export default ImageSlider;