import React from 'react'
import { FormControl, Input , InputLabel} from '@mui/material';
import styles from './FormInput.module.css'

export const FormInput = ({placeholder, inpuId, type, handleChange, message, defaultValue}) => {

    function ErrorMessage(value) {
        if (value.length > 10) {
            return 'Maximum uzunluq 10 olmalıdır'
        }else if (value < 0 ) {
            return 'Minimum yaş həddi 1 olmalıdır'
        }else if (value.length>9 ) {
            return 'Maximum uzunluq 10 olmalıdır'
        }else {
            return ''
        }
        
    }

    return (
        <>
            <FormControl className={styles.customCard}>
                <Input onChange={handleChange} value={defaultValue}  name={inpuId} id={inpuId} type={type} placeholder={placeholder}/>
                <span className={styles.message} >{ErrorMessage(defaultValue)}</span>
            </FormControl>
        </>
    )
}
