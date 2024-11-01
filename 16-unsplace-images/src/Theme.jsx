import React from 'react'
import { HiMiniSun } from "react-icons/hi2";
import { FaMoon } from "react-icons/fa6";
import { useGlobalContext } from './context';

const Theme = () => {
    const {isdarkTheme,toggleTheme} = useGlobalContext()
  return (
    <section className='toggle-container'>
       <button onClick={toggleTheme} className='dark-toggle'>
        {
            isdarkTheme ? <HiMiniSun className='toggle-icon'/>:<FaMoon className='toggle-icon'/>
        }
       </button>
        
      
    </section>
  )
}

export default Theme
