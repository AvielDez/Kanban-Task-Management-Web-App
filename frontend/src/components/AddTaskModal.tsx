/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, {MouseEvent} from 'react'
import iconCross from '../assets/icon-cross.svg'
import { modalStyle, warningBorder, warningMessageStyle, appendInputStyle } from '../styles/modalStyle'
import { inline } from '../styles/utilStyle'
import { headingLarge } from '../styles/typographyStyle'
import { buttonBase, buttonRemove, buttonPrimarySmall, buttonSecondary} from '../styles/buttonStyles'
import { useForm, useFieldArray } from "react-hook-form"

type addTaskInput = {
    title: string,
    description: string,
    status: string,
    subtasks: {
        title: string;
        isComplete: boolean;
    }[]
}

export default function AddTaskModal(){
    const { register, control, handleSubmit, formState: {errors} } = useForm<addTaskInput>({
        defaultValues: {
            subtasks: [{}]
        }
     })
    const { fields, append, remove } = useFieldArray({
       name: "subtasks",
       control
    })
    const onSubmit = (data: addTaskInput) => {
        console.log(data)
    }
    
    const titlePlaceholder = 'e.g. Take coffee break'
    const descriptionPlaceholder =  'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
    const subtaskPlaceholder = 'e.g. Make coffee'
    const errorMessage = "Can't be empty"

    return (
        <div css={modalStyle}>
            <h1 css={css`${headingLarge} margin-bottom: 1.5rem`}>Add New Task</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label data-error={errors.title && errorMessage}>Title</label>
                    <input css={errors.title && warningBorder} type="text" placeholder={titlePlaceholder} {...register("title", {required: true})} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea css={css`height: 112px;`} placeholder={descriptionPlaceholder} {...register("description")}/>
                </div>
                <div>
                    <label>Subtasks</label>
                    {fields.map((field, index) =>{
                        return (
                            <div css={appendInputStyle} key={field.id}>
                                <input css={[inline, errors.subtasks && warningBorder]}
                                    placeholder= {subtaskPlaceholder}
                                    {...register(`subtasks.${index}.title` as const,
                                        {required: true}
                                    )}
                                />
                                <div css={warningMessageStyle}>{errors.subtasks && errorMessage}</div>
                                <button css={buttonRemove} type="button" onClick={() => remove(index)}>
                                    <img src={iconCross} alt="delete"/>
                                </button> 
                            </div>
                        )
                    })}
                    <button css={[buttonBase, buttonSecondary]} onClick={(event: MouseEvent)=>{
                                event.preventDefault()
                                append({
                                    title: "",
                                    isComplete: false
                                })
                            }
                        }
                    >
                    +Add New Subtask
                    </button>
                </div>

                <div>
                    <label>Status</label>
                    <select {...register("status")}>
                        <option value="todo">todo</option>
                        <option value="doing">doing</option>
                        <option value="done">done</option>
                    </select>
                </div>

                <button css={[buttonBase, buttonPrimarySmall]} type="submit">Create Task</button>
            </form>
        </div>
    )
}