/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, {MouseEvent} from 'react'
import { modalStyle } from '../styles/modalStyle'
import { flex } from '../styles/utilStyle'
import { bodyLarge, headingLarge } from '../styles/typographyStyle'
import { buttonBase, buttonSecondary, buttonDestroy} from '../styles/buttonStyles'

interface Props{
    item: "task" | "board";
}

const popOutStyle = css `
    background-color: var(--secondary-background);
    border-radius: 8px;
    padding: 1rem;
`

export default function EditPopOut({item}:Props){
    return (
        <div css={popOutStyle}>

        </div>
    )
}