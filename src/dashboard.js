import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { AppBar, Box, Toolbar } from '@mui/material';
import './App.css';
import Chat from './chat';

export default class Dashboard extends Component {
  render() {
    return (
        <Box>
             <AppBar position="static">
             <Toolbar>
                <div className='title'>
                    PayThr
                </div>
                <Button color="inherit">Login</Button>
             </Toolbar>
             </AppBar>

             <Chat/>
        </Box>
    )
  }
}
