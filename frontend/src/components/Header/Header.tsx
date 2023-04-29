/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

import useStore from '../../bearStore'

import logoMobile from '../../assets/logo-mobile.svg'
import logoLight from '../../assets/logo-light.svg'
import logoDark from '../../assets/logo-dark.svg'
import chevronDown from '../../assets/icon-chevron-down.svg'
import plus from '../../assets/icon-add-task-mobile.svg'
import threeDots from '../../assets/icon-vertical-ellipsis.svg'
import { headingLarge, headingXLarge } from '../../styles/typographyStyle'
import { buttonOptions } from '../../styles/buttonStyles'
import { 
    headerStyle, 
    addTaskButton, 
    chevronStyle, 
    boardsButton, 
    showDesktop, 
    showMobile, 
    verticalLine, 
    rotate 
} 
from './style'

export default function Header(){
    const theme = useStore(state => state.theme)
    const [isOpen, setOpen] = React.useState(false)

    function openBoards(){
        setOpen(prev => !prev)
    }
    function test(){
        console.log('I work')
    }

    return (
        <div css={headerStyle}>
            <img css={css`margin-right: 8.15rem; ${showDesktop}`} src={theme === 'light-theme' ? logoDark : logoLight} alt="logo"/>
            <div css={[verticalLine, showDesktop]}></div>
            <img css={css`margin-right: 1rem; ${showMobile}`} src={logoMobile} alt="logo"/>
            {/*Show board name */}
            <h1 css={css`${showDesktop}; ${headingXLarge}; margin-left: 1rem;`}>Platform Launch</h1>
            {/*Show button for mobile access to boards */}
            <div css={[showMobile, boardsButton]} onClick={openBoards}>
                <h1 css={headingLarge}>Platform Launch</h1>
                <img css={css`${chevronStyle} ${isOpen && rotate}`} src={chevronDown}/>
            </div>
            <button css={addTaskButton}>
                <img css={showMobile} src={plus}/>
                <p css={css`${showDesktop} color: white;`}>+ Add New Task</p>
            </button>
            <button css={buttonOptions} onClick={test}>
                <img src={threeDots} alt="options"/>
            </button>
        </div>
    )
}
