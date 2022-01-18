import React from 'react'
import { useMediaQuery } from 'react-responsive'

import MenuList from './MenuList'
import MenuLogo from './MenuLogo'
import MenuImg from './MenuImg'

import './Menu.css'

function Menu() {
    const isWidth990 =  useMediaQuery({
        query: '(min-width: 990px)'
      })

    return (
        <header>
            <div className='menu'>
                <MenuLogo/>  
                {
                    isWidth990 ? 
                        <>
                            <MenuList/>
                            <MenuImg/>
                        </>
                    :<div className='width990'> 
                        <MenuList/>
                        <MenuImg/>
                    </div> 
                }       
                           
            </div>
        </header>
    )
}

export default Menu
