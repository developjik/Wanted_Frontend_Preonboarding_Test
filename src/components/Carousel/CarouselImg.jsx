import React, {useEffect, useRef, useState} from 'react'
import { useMediaQuery } from 'react-responsive'

import './CarouselImg.css'

function CarouselImg({num, index, address, text1, text2}) {
    const isWidth1200 =  useMediaQuery({
        query: '(min-width: 1200px)'
      })

    const [state, setState] = useState(false)

    const carouselImg = useRef()
    const carouselRealImg = useRef()

    const handleResize = () => {
        console.log(carouselRealImg.current.offsetWidth)
        if(isWidth1200){
            carouselImg.current.style.left = (-(carouselRealImg.current.offsetWidth) + (document.body.clientWidth-carouselRealImg.current.offsetWidth)/2) + "px";
        }
        else {
            carouselImg.current.style.left = -(carouselRealImg.current.offsetWidth * 2 / 3) + 'px';
        }
    }

    useEffect(() => {   

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if(parseInt(index) === parseInt(num)) {
            setState(true)
            carouselRealImg.current.style.filter = "brightness(100%)"
        }
        else {
            setState(false)
            carouselRealImg.current.style.filter = "brightness(50%)"
        }
    }, [index])

    return (
        <div className='carouselImg' ref={carouselImg}>
            <div className='img' ref={carouselRealImg}>
                <img src={address} alt="address"  />            
            </div>
            {
                state ?
                <div className='text'>
                    <h2>{text1}</h2>
                    <h3>{text2}</h3>
                    {isWidth1200?<><hr/></>:<></>}   
                    <div>      
                        <span>바로가기 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></span>     
                    </div>    
                </div>
                :
                <></>
            }
        </div>
    )
}

export default CarouselImg
