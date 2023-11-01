import { Button, FormGroup } from '@mui/material'
import React from 'react'
import { FormInput } from '../FormInput'
import styles from './FormBox.module.css'

export const FormBox = ({ handleChange, handleSubmit, disabledBtn , form}) => {

  return (
    <>
      <FormGroup className={styles.formBox}>
        <FormInput handleChange={handleChange} defaultValue={form.fullname}  inpuId='fullname' type='text' placeholder='fullname' />
        <FormInput handleChange={handleChange} defaultValue={form.position}  inpuId='position' type='text' placeholder='position' />
        <FormInput handleChange={handleChange} defaultValue={form.age} inpuId='age' type='number' placeholder='age' />
        <FormInput handleChange={handleChange} defaultValue={form.phone}  inpuId='phone' type='number' placeholder='phone' />

        <Button className={styles.btnForm} disabled={disabledBtn}  onClick={handleSubmit} variant='outlined' color='secondary'>Add</Button>
      </FormGroup>
    </>
  )
}