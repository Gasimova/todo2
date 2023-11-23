import { formGroupClasses, Grid } from '@mui/material'
import React, { useCallback, useReducer, useState } from 'react'
import { importData, reducer } from '../../reducer'
import { FormBox } from '../FormBox'
import { TableBox } from '../TableBox'

export const MainBox = () => {

    const [form, setForm] = useState()

    const [state, dispatch] = useReducer(reducer, importData)

    const handleChange = useCallback((e) => {
        const name = e.target.name
        const value = e.target.value

        const callBack = (prev) => {
            const newData = { ...prev, [name]: value  }
            return newData
        }
        setForm(callBack)

    })


    const disabledBtn = !form?.fullname?.trim() || !form?.position?.trim() || !form?.age || !form?.phone
    const handleSubmit = useCallback(() => {
        form.id = Math.floor(Math.random()*10)
        dispatch({
            type: "ADD_TODO",
            payload: {
                form
            }
        })
        setForm()
    })

    const handleDelete = useCallback((id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: {
                id
            }
        })
    })

    return (
        <>
            <Grid container rowSpacing={2} alignItems="center" sx={{ minHeight: '100vh' }} justifyContent="center"  >
                <Grid item xs={10} margin={0}>
                    <h1>TODO APP</h1>
                    <FormBox form={form} handleChange={handleChange} handleSubmit={handleSubmit} disabledBtn={disabledBtn} />
                    <TableBox data={state.todos} handleDelete={handleDelete} />
                </Grid>
            </Grid>

        </>
    )
}