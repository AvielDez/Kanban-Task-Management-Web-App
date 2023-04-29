/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, {MouseEvent} from 'react'
import { modalStyle } from '../styles/modalStyle'
import { flex } from '../styles/utilStyle'
import { bodyLarge, headingLarge } from '../styles/typographyStyle'
import { buttonBase, buttonSecondary, buttonDestroy} from '../styles/buttonStyles'

interface Props{
    choice: string;
    item: "task" | "board";
}

const flow = css`
    >:not(:last-child) {
        margin-bottom: 1.5rem;
    }
`

export default function DeleteModal({item, choice}:Props){
    return(
        <div css={[modalStyle, flow]}>
            <h1 css={css`${headingLarge}; color: var(--warning);`}>Delete this {item}?</h1>
            <p css={css`${bodyLarge}; color: #828FA3;`}>{item === 'task' ? 
            `Are you sure you want to delete the ‘${choice}’ task and its subtasks? This action cannot be reversed.` 
            : 
            `Are you sure you want to delete the ‘${choice}’ board? This action will remove all columns and tasks and cannot be reversed.`} 
            </p>
            <div css={css`${flex}; gap: 1rem;`}>
                <button css={[buttonBase, buttonDestroy]}>Delete</button>
                <button css={[buttonBase, buttonSecondary]}>Cancel</button>
            </div>
        </div>
    )
    
}