/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { bodyMedium, headingMedium } from '../styles/typographyStyle'

const taskStyle = css`
    background-color: var(--secondary-background);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.25rem;
    max-width: 400px;
    transition: all var(--transition-speed) ease;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    > h1 {
        transition: all var(--transition-speed) ease;
    }
    :hover > h1{
        color: var(--primary);
    }
    :hover{
        box-shadow: 0px 4px 10px rgba(54, 78, 126, 0.3);
    }
`
interface Props {
    taskId: number;
}

export default function Task({taskId}:Props){
    function test(taskId: number){
        console.log(`Task(${taskId}) has been clicked`)
    }

    return (
        <div css={taskStyle} onClick={()=>test(taskId)}>
            <h1 css={css`${headingMedium}; margin-bottom: .5rem;`}>Build UI for onboarding flow</h1>
            <p css={css`${bodyMedium} color: var(--text-secondary)`}>0 of 3 substasks</p>
        </div>
    )
}
