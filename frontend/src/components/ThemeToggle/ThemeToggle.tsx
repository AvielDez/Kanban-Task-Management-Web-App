/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import useStore from '../../bearStore'

import iconDarkTheme from '../../assets/icon-dark-theme.svg'
import iconLightTheme from '../../assets/icon-light-theme.svg'

const themeToggleContainer = css`
   width: 250px;
   height: 48px;
   border-radius: 6px;
   background-color: var(--primary-background);
   margin-inline: auto;
   display: flex;
   align-items: center;
   margin-top: auto;
   justify-content: center;
   gap: 1.5rem;
`
const themeToggle = css`
    width: 40px;
    height: 20px;
    border-radius: 12px;
    background-color: var(--primary);
    padding: 3px;
    
`
const themeToggleCircle = css`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    transition: all 150ms ease-out;
    
`
const lightTheme = css `
    transform: translateX(0px);
`
const darkTheme = css `
    transform: translateX(20px);
`
const iconTheme = css `
    width: 16px;
    height: 16px;
`

export default function ThemeToggle(){
    const theme = useStore(state => state.theme)
    const changeTheme = useStore(state => state.changeTheme)
  
    React.useEffect(() => {
      if(theme === 'light-theme'){
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
      }
      else if(theme === 'dark-theme'){
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
      }
    },[theme])

    return (
        <div css={themeToggleContainer}>
            <img css={iconTheme} src={iconLightTheme}/>
            <div onClick={()=>changeTheme('light-theme')} css={css`${themeToggle}`}>
                <div css={css`${themeToggleCircle} ${theme === 'light-theme' ? lightTheme : darkTheme}`}></div>
            </div>
            <img css={iconTheme} src={iconDarkTheme}/>
        </div>  
    )
}