/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { buttonBase, buttonPrimaryLarge, buttonOptions } from '../../styles/buttonStyles'

export const headerStyle = css `
    display: flex;
    justify-content: space-between;
    height: 4rem;
    align-items: center;
    padding-inline: 1rem;
    background-color: var(--secondary-background);
    border-bottom: 1px solid var(--lines);

    @media (min-width: 768px) {
        height: 5rem;
    }
    @media (min-width: 1440px){
        height: 6rem;
    }
`
export const addTaskButton = css`
    ${buttonBase}; 
    ${buttonPrimaryLarge}; 
    margin-left: auto;
    width: 48px;
    padding: .75rem;
    @media (min-width: 768px) {
        padding: .75rem 1.5rem;
        width: max-content;
    }
`
export const boardsButton = css `
    display: flex; 
    align-items: center; 
    gap: .5rem;
    cursor: pointer;
`
export const chevronStyle = css `
    height: 7px;
    width: 10px;
    transition: all var(--transition-speed) ease;
    @media (min-width: 768px) {
        display: none;
    }
`
export const showMobile = css `
    display: inline;
    @media (min-width: 768px) {
        display: none;
    }
`
export const showDesktop = css `
    display: none;
    @media (min-width: 768px) {
        display: block;
    }
`
export const rotate = css`
    rotate: 180deg;
`
export const verticalLine = css`
    background-color: var(--lines);
    width: 1px;
    height: 100%;
`