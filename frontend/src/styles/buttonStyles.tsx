
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { headingMedium, font13 } from './typographyStyle'

const borderRadius = css`
    border-radius: 20px;
`
const padding = css`
    padding: .75rem;
`
const primaryBackground = css`
    background-color: var(--primary)
`
const primaryHovered = css`
    :hover{
        background-color: var(--primary-hovered)
    }
`
export const buttonRemove = css`
    display: inline; 
    width: auto;
    background: none;
    border: none;
    margin-left: 1rem;
    cursor: pointer;
`
export const buttonOptions = css `
    padding: .375rem;
    width: auto;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
    :hover{
        background-color: var(--primary-background);
        border-radius: 12px;
    }
`
export const buttonBase = css`
    width: 100%;
    ${padding}
    ${borderRadius}
    ${headingMedium}
    cursor: pointer;
`
export const  buttonPrimaryLarge = css `
    color: white;
    padding: 1rem;
    border-radius: 30px;
    ${primaryBackground}
    ${primaryHovered}
    
`

export const  buttonPrimarySmall = css `
    color: white;
    ${primaryBackground}
    ${font13};
    ${primaryHovered}
`

export const buttonSecondary = css `
    color: var(--primary);
    background-color: var(--secondary);
    ${font13};
    :hover{
        background-color: var(--secondary-hovered);
    }
`

export const buttonDestroy = css `
    color: white;
    background-color: var(--warning);
    :hover{
        background-color: var(--warning-hovered)
    }
`