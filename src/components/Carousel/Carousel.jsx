import React, {useEffect, useState, useRef} from 'react'
import { useMediaQuery } from 'react-responsive'

import CarouselImg from './CarouselImg'

import './Carousel.css'

function Carousel() {
    const [index, setIndex] = useState(1)
    const [dragStart, setDragStart] = useState(0)
    const [dragEnd, setDragEnd] = useState(0)
    const carousel = useRef()

    const isWidth1200 =  useMediaQuery({
        query: '(min-width: 1200px)'
      })

    const clickLeftBtn = () => {
        console.log(index)
        if(parseInt(index) === 1) {
            carousel.current.style.transform = `translateX(-${1090 *8}px)`;
            setIndex(9)
        }
        else {
            carousel.current.style.transform = `translateX(-${1090 *(index-2)}px)`;
            setIndex(index-1)
        }        
    }

    const clickRightBtn = () => {            
        if(parseInt(index) === 9){
            carousel.current.style.transform = `translateX(-${1090 * 0}px)`;
            setIndex(1)
        }
        else {
            carousel.current.style.transform = `translateX(-${1090 * index}px)`;
            setIndex(index+1)   
        }                
    }

    const autoClickLeft = () => {  
        if(isWidth1200) {
            clickLeftBtn()
        }
        else {
            if(parseInt(index) === 9){
                carousel.current.style.transform = `translateX(-${650 * 0}px)`;
                setIndex(1)           
            }
            else {
                carousel.current.style.transform = `translateX(-${650* index}px)`;
                setIndex(index+1)     
            }
        }      
    }

    const autoClick = () => {  
        if(isWidth1200) {
            clickRightBtn()
        }
        else {
            if(parseInt(index) === 9){
                carousel.current.style.transform = `translateX(-${650 * 0}px)`;
                setIndex(1)           
            }
            else {
                carousel.current.style.transform = `translateX(-${650* index}px)`;
                setIndex(index+1)     
            }
        }      
    }

    const dragEventStart = (e) => {        
        let img = document.createElement('img')
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        e.dataTransfer.setDragImage(img, 0, 0)
        setDragStart(e.clientX)  
    }

    const dragEventEnd = (e) => {       
        setDragEnd(e.clientX)  

        if(dragEnd > dragStart) {
            autoClick()
        }
        else {
            autoClickLeft()
        }
    }

    useEffect(() => {
        const timer = setInterval(autoClick, 5000)
       
        return () => {
            clearInterval(timer)
        }
    }, [index])

    return (
        <div className='scene'>
            <div className='carousel' ref={carousel} onDragStart={dragEventStart} onDragEnd={dragEventEnd} >
                <CarouselImg num="0" index={index} address="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg" text1="성장하는 개발자가 되려면?" text2="OOO 검색하지 말 것!"/> 
                <CarouselImg num="1" index={index} address="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg" text1="포트폴리오를 부탁해!" text2="디자이너의 포폴 살펴보기"/>
                <CarouselImg num="2" index={index} address="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg" text1="개발자 성장 비결 공개!" text2="Velog, 글 쓰는 개발자들의 이야기"/>
                <CarouselImg num="3" index={index} address="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg" text1="마케팅 주니어를 찾습니다" text2="기업 과제 풀고 취업까지 한번에!"/>
                <CarouselImg num="4" index={index} address="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" text1="개발자 되고싶은 분들!?" text2="프론트엔드 무료 교육과정 참여하기"/>
                <CarouselImg num="5" index={index} address="https://static.wanted.co.kr/images/banners/1488/baa54448.jpg" text1="UX 디자이너의 커리어 설계" text2="브랜드 가치를 더하는 디자인"/>
                <CarouselImg num="6" index={index} address="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg" text1="성과를 내는 마케팅" text2="실제 사례를 공개합니다!"/>
                <CarouselImg num="7" index={index} address="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg" text1="해, 커리어 EP 02 공개" text2="마지막 관문 2라운드의 승자는?"/>
                <CarouselImg num="8" index={index} address="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg" text1="2022년 달라지는 노동법령" text2="노무관리 쟁점 한 눈에 파악하기"/>
                <CarouselImg num="9" index={index} address="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg" text1="성장하는 개발자가 되려면?" text2="OOO 검색하지 말 것!"/>
                <CarouselImg num="0" index={index} address="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg" text1="포트폴리오를 부탁해!" text2="디자이너의 포폴 살펴보기"/>
            </div>
            {isWidth1200 
            ?<>
                <div className='leftBtn'><button onClick={clickLeftBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button></div>
                <div className='rightBtn'><button onClick={clickRightBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button></div>
            </>
            :<></>}
            
        </div>
    )
}

export default Carousel
