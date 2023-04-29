/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, {MouseEvent} from 'react'
import threeDots from '../assets/icon-vertical-ellipsis.svg'
import { modalStyle } from '../styles/modalStyle'
import { inline, flex } from '../styles/utilStyle'
import { bodyMedium, bodyLarge, headingLarge } from '../styles/typographyStyle'
import { buttonOptions } from '../styles/buttonStyles'
import { useForm } from "react-hook-form"

type ViewTaskInput = {
    status: string,
    subtasks: {
        title: string;
        isComplete: boolean;
    }[]
}

const flow = css`
    div:not(:last-child) {
        margin-bottom: .75rem;
    }
`
const checkboxStyle = css`
    ${inline}; width: auto; 
    margin-right: 2rem;
`
const checkboxLabelStyle = css`
    ${inline};  
    ${bodyMedium}; 
    color: var(--text-primary);
    padding-block: 1.75rem;
    border-bottom: 1px solid transparent;
`
const checkboxContainer = css`
    padding: .75rem;
    background-color: var(--primary-background);
    border-radius: 4px;
    transition: all var(--transition-speed) ease;
    :hover{
        background-color: var(--primary-hovered)
    }
`

function test(){
    console.log('I work')
}

export default function ViewTaskModal(){
    const { register, handleSubmit } = useForm<ViewTaskInput>()
    const onSubmit = (data: ViewTaskInput) => {
        console.log(data)
    }
    
    return (
        <div css={modalStyle}>
            <div css={css`margin-bottom: 1rem; display: flex; align-items: center;`}>
                <h1 css={headingLarge}>Research pricing points of various competitors and trial different business models</h1>
                <button css={buttonOptions} type="button" onClick={test}>
                    <img src={threeDots} alt="options"/>
                </button>
            </div>
            <div>
                <p css={css`${bodyLarge} margin-bottom: 1rem; color: #828FA3`}>
                    We know what we're planning to build for version one. Now we need to finalize the 
                    first pricing model we'll use. Keep iterating the subtasks until we have a coherent 
                    proposition.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div css={flow}>
                    <label css={css`margin-bottom: 1rem`}>Subtasks (1 of 1)</label>
                    <div  css={checkboxContainer}>
                        <input 
                            css={checkboxStyle} 
                            type="checkbox" 
                            {...register('subtasks')} 
                            id="Research competitor pricing and business models" />
                        <label 
                            css={checkboxLabelStyle}  
                            htmlFor="Research competitor pricing and business models">
                        Research competitor pricing and business models
                        </label>
                    </div>
                    <div  css={checkboxContainer}>
                        <input 
                            css={checkboxStyle} 
                            type="checkbox" 
                            {...register('subtasks')} 
                            id="love" />
                        <label 
                            css={checkboxLabelStyle}  
                            htmlFor="love">
                        Share as much love as you can
                        </label>
                    </div>
                    <div  css={checkboxContainer}>
                        <input 
                            css={checkboxStyle} 
                            type="checkbox" 
                            {...register('subtasks')} 
                            id="hate" />
                        <label 
                            css={checkboxLabelStyle}  
                            htmlFor="hate">
                        Reduce as much hate as you can
                        </label>
                    </div>
                </div>

                <div>
                    <label>Current Status</label>
                    <select {...register("status")}>
                        <option value="todo">todo</option>
                        <option value="doing">doing</option>
                        <option value="done">done</option>
                    </select>
                </div>
            </form>
        </div>
    )
}