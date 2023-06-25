'use client'; 

import { FaSun, FaMoon } from 'react-icons/fa'; 
import { useEffect } from 'react';

import SideBar from "./SideBar"
import useDarkMode from "@hooks/useDarkMode"

const ThemeHandler = () => { 
    const [darkTheme, setDarkTheme] = useDarkMode(); 
    const handleMode = () => setDarkTheme(!darkTheme); 

    useEffect( () => { 
        console.log({ darkTheme }); 
    }, [darkTheme])

    return ( 
        <span className='fixed top-0 right-0 bg-color-green top-navigation' onClick = { handleMode }>
            { darkTheme ? 
                ( 
                    <FaSun size = '24' className = 'top-navigation-icon' /> 
                ) : 
                ( 
                    <FaMoon size = '24' className='top-navigation-icon' /> 
                )
            }
        </span>
    )
}

const NavBar = () => {
  return (
    <nav>
        <ThemeHandler />
        <SideBar /> 
    </nav>
  )
}

export default NavBar