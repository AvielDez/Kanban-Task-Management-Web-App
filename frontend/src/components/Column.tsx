/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { flex } from '../styles/utilStyle'
import { headingSmall } from '../styles/typographyStyle'

const columnStyle = css`
    margin: 1rem;
    width: 280px;
    flex: 0 0 300px;
`
const circle = css `
    height: 15px;
    width: 15px;
    background-color: #49C4E5;
    border-radius: 100%;
`
const newColumn = css `
    background: linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%);
    border-radius: 6px;
    height: 400px;
`
type Props = {
    children: string | JSX.Element | JSX.Element[]
    status: string
}

export default function Column({children, status}:Props){
    return (
        <div css={columnStyle}>
            <div css={css`${flex}; gap: 1rem; margin-bottom: 2rem;`}>
                <div css={circle}></div>
                <h1 css={css`${headingSmall}; text-transform: uppercase;`}>{status} (4)</h1>
            </div>
            {children}
        </div>
    )
}