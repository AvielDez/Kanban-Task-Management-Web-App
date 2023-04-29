/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import useStore from '../../bearStore'

import { headingSmall, headingMedium } from '../../styles/typographyStyle'
import { buttonBase, buttonPrimaryLarge } from '../../styles/buttonStyles'
import { flex } from '../../styles/utilStyle'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import iconHideSidebar from '../../assets/icon-hide-sidebar.svg'

const sideBarContainer = css`
    position: absolute;
    background-color: var(--secondary-background);
    margin-right: 1rem;
    border-right: 1px solid var(--lines);
    z-index: 2;
    left: 0;
    padding: 1rem 1rem 2rem 1rem;
    cursor: default;
    display: none;
    transition: width 150ms ease-out;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        height: calc(100%-5rem);
        top: 5rem;
        bottom: 0;
        left: 0;
        width: 18.75rem;
    }
    @media (min-width: 1440px){
        top: 6rem;
    }
`

const hideSidebar = css`
    @media (min-width: 768px) {
        width: 0;
    }
    
`

export default function SideBar(){
    const [isSidebarOpen, setSidebarOpen] = React.useState(true)

    function toggleSidebar(){
        setSidebarOpen(prev => !prev)
    }
    return (
        <div css={css`${sideBarContainer} ${!isSidebarOpen && hideSidebar}`}>
            <h1 css={css`${headingSmall}; text-transform: uppercase;`}>all boards (4)</h1>
            <ThemeToggle/>
            <div onClick={toggleSidebar} css={css`${flex} ${buttonPrimaryLarge} ${buttonBase} gap: 1rem; margin-top: 1rem;`}>
                <img src={iconHideSidebar}/>
                <h1 css={css`${headingMedium} color: #828FA3;`}>Hide Sidebar</h1>
            </div>
            
        </div>  
    )
}