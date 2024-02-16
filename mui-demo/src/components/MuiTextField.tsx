import { InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'


export const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}  marginTop={4}>
        <Stack direction='row' spacing={2} >
            <TextField variant='outlined' label= 'Name'/>
            <TextField variant='filled' label= 'Name'/>
            <TextField variant='standard' label= 'Name'/>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label="Small Secondary" size='small' color='secondary'></TextField>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label= 'Form Input' 
            required 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            error= {!value}
            helperText={!value ? 'Required' : 'Do not share your password with anyone'}/>

            <TextField label= 'Password' type='password' helperText='Do not share your password to anyone'></TextField>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='Amount'
            InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
           />
             <TextField label='Weight'
            InputProps={{
                endAdornment: <InputAdornment position='end'>kg</InputAdornment>
            }}
           />
        </Stack>

    </Stack>
  )
}
