
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const modalStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: min-content;
    margin: auto;
    max-width: 345px;
    border-radius: 8px;
    padding: 2rem;
    background-color: var(--secondary-background);
    box-shadow: var(--box-shadow);
    z-index: 4;

    > form > div:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    @media (min-width: 500px) {
        max-width: 480px;
    }
`
export const modalBackground = css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--modal-background);
    opacity: .5;
    z-index: 3;
`

export const warningBorder = css `
    border: solid 2px var(--warning);
    :focus{
        border: solid 2px var(--warning);
    }
`
export const warningMessageStyle = css `
        width: 10rem;
        color: var(--warning);
        position: absolute;
        font-family: inherit;
        font-size: .8125rem;
        font-weight: 500;
        right: -0.5rem;
        top: .875rem;
`
export const appendInputStyle = css `
    display: flex;
    margin-bottom: 12px;
    position: relative;
`