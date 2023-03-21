// REF = refs provide a way to access our Virtual Dom 
// is gonna check if we change something in this page anduse it where the website needs it
// spread operation to check what ...props is
// forward ref is able to return what we write in our function so we can actually use it

import { forwardRef } from 'react';
import { TextField } from '@mui/material';

interface InputType {
    name: string,
    placeholder: string
}

const Input = forwardRef(( props: InputType, ref ) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
    >
    </TextField>
  )
});

export default Input
