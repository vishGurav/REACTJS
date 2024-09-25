
import React from 'react'
import useSlider from './useSlider'
import img1 from './img/rs1.jpg'
import img2 from './img/rs2.jpg'
import img3 from './img/rs3.jpg'
import si from "./SliderImages.module.css"

const SliderUsingCustomHook = () => 
{

    let {images,change,updatePrev,updateNext}=useSlider([img1,img2,img3])    
    
    return (
        <div className={si.div}>
            <img className={si.image} src={images.at(change)} alt="" />
            <div className={si.btndiv}>
            <button className={si.btn} onClick={updatePrev}>Previous</button>
            <button className={si.btn} onClick={updateNext}>Next</button>
            </div>
        </div>
    )
}

export default SliderUsingCustomHook
