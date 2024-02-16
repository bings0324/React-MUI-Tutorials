import React, { useState }  from 'react'
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FormatUnderlined, Send, FormatBold, FormatItalic } from '@mui/icons-material'
export const MuiButton = () => {

  const [formats, setFormats] = useState<string | null>(null);

  console.log (formats,);
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null ) =>{
        setFormats(updatedFormats);
  }
  return (
    <Stack spacing={4} marginTop={5}>
        
            <Stack spacing={2} direction='row' marginTop={5}>
            <Button variant='text' href='https://google.com'>Text</Button>
                    <Button variant='contained'>Contained</Button>
                    <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack spacing={2} direction= 'row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained'color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<Send/>} disableRipple>Send</Button>
                <Button variant='contained' endIcon={<Send/>} disableElevation disableRipple >Send</Button>
 
            <IconButton aria-label='send' color='success' size='small'>
                  <Send/>
            </IconButton>

            </Stack>

            <Stack direction='row'>
              <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary'>
              <Button onClick={() => alert("Hey You Click Left Button")}>Left</Button>
                <Button >Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Stack>

            <Stack direction='row'>
              <ToggleButtonGroup aria-label='text formatter' value={formats} size='small' orientation='vertical' color='success' exclusive onChange={handleFormatChange}>
                    <ToggleButton value='bold' aria-label='bold'><FormatBold /></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalic/></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlined/></ToggleButton>
              </ToggleButtonGroup>

            </Stack>
    </Stack>
 
  )
}
 