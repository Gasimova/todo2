import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import styles from './TableRow.module.css'
import { Delete } from '@mui/icons-material';

export const TableBox = ({data, handleDelete}) => {
    return (
        <>
            <TableContainer component={Paper} style={{marginTop:100, width:'55%'}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className={styles.tablerow}>
                            <TableCell>Fullname</TableCell>
                            <TableCell align="right">Position</TableCell>
                            <TableCell align="right">Age&nbsp;</TableCell>
                            <TableCell align="right">Phone&nbsp;</TableCell>
                            <TableCell align="right">&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((d, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {d.fullname}
                                </TableCell>
                                <TableCell align="right">{d.position}</TableCell>
                                <TableCell align="right">{d.age}</TableCell>
                                <TableCell align="right">{d.phone}</TableCell>
                                <TableCell align="right"> <Button onClick={()=>handleDelete(index)} className={styles.deleteBtn}> <Delete /> </Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
