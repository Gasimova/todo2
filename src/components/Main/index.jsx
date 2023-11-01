import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { FormBox } from '../FormBox'
import { TableBox } from '../TableBox'

export const MainBox = () => {

    const importData = {
        fullname: '',
        position: '',
        age: '',
        phone: '',
    }
    const [data, setData] = useState([])
    const [form, setForm] = useState(importData)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        const callBack = (prev) => {
            const newData = { ...prev, [name]: value }
            return newData
        }
        setForm(callBack)

    }


    const disabledBtn = !form.fullname.trim() || !form.position.trim() || !form.age || !form.phone

    const handleSubmit = () => {
        setData(prevData => [form, ...prevData])
        setForm(importData)
    }

    const handleDelete = (index) => {
        setData(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
    }

    return (
        <>
            <Grid container rowSpacing={2} alignItems="center" sx={{ minHeight: '100vh' }} justifyContent="center"  >
                <Grid item xs={10} margin={0}>
                    <h1>TODO APP</h1>
                    <FormBox form={form} handleChange={handleChange} handleSubmit={handleSubmit} disabledBtn={disabledBtn} />
                    <TableBox data={data} handleDelete={handleDelete} />
                </Grid>
            </Grid>

        </>
    )
}