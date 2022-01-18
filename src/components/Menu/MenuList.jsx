import React from 'react'
import { useMediaQuery } from 'react-responsive'

import './MenuList.css'

function MenuList() {
    const isWidth767 =  useMediaQuery({
        query: '(min-width: 767px)'
      })

    return (
        <div className='menulist'>    
            <ul>
                {isWidth767 
                ?<>
                    <li>채용</li>
                    <li>이벤트</li>
                    <li>직군별 연봉</li>
                    <li>이력서</li>
                    <li className='community'>커뮤니티 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">New</tspan></text></g></g></g></g></g></g></g></g></svg></li>            
                    <li>프리랜서</li>            
                    <li className='ai'>AI 합격예측 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">Beta</tspan></text></g></g></g></g></g></g></g></g></svg></li> 
                </>
                : <>
                    <li >홈</li>
                    <li>채용</li>
                    <li>이벤트</li>
                </>}
               
            </ul> 
        </div>        
    )
}

export default MenuList
