/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, {MouseEvent} from 'react'
import iconCross from '../assets/icon-cross.svg'
import { modalStyle, warningBorder, warningMessageStyle, appendInputStyle } from '../styles/modalStyle'
import { inline } from '../styles/utilStyle'
import { headingLarge } from '../styles/typographyStyle'
import { buttonBase, buttonRemove, buttonPrimarySmall, buttonSecondary} from '../styles/buttonStyles'
import { useForm, useFieldArray } from "react-hook-form"

type addBoardInput = {
    name: string,
    columns: {
        name: string;
    }[]
}

export default function AddBoardModal(){
    const { register, control, handleSubmit, formState: {errors} } = useForm<addBoardInput>()
    const { fields, append, remove } = useFieldArray({
       name: "columns",
       control
    })
    const onSubmit = (data: addBoardInput) => {
        console.log(data)
    }
    
    const namePlaceholder = 'e.g. Web Design'
    const columnPlaceholder = 'e.g. Todo'
    const errorMessage = "Can't be empty"

    return (
        <div css={modalStyle}>
            <h1 css={css`${headingLarge} margin-bottom: 1.5rem`}>Add New Board</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label data-error={errors.name && errorMessage}>Name</label>
                    <input css={errors.name && warningBorder} type="text" placeholder={namePlaceholder} {...register("name", {required: true})} />
                </div>

                <div>
                    <label>Columns</label>
                    {fields.map((field, index) =>{
                        return (
                            <div css={appendInputStyle} key={field.id}>
                                <input css={[inline, errors.columns && warningBorder]}
                                    placeholder= {columnPlaceholder}
                                    {...register(`columns.${index}.name` as const,
                                        {required: true}
                                    )}
                                />
                                <div css={warningMessageStyle}>{errors.columns && errorMessage}</div>
                                <button css={buttonRemove} type="button" onClick={() => remove(index)}>
                                    <img src={iconCross} alt="delete"/>
                                </button> 
                            </div>
                        )
                    })}
                    <button css={[buttonBase, buttonSecondary]} onClick={(event: MouseEvent)=>{
                                event.preventDefault()
                                append({
                                    name: ""
                                })
                            }
                        }
                    >
                    +Add New Column
                    </button>
                </div>

                <button css={[buttonBase, buttonPrimarySmall]} type="submit">Create New Board</button>
            </form>
        </div>
    )
}