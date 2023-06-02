import React from 'react';
import { AppBar,Toolbar,styled } from '@mui/material';
const container = styled(AppBar)`
background:#060606;
height:9vh;
`
const Header = () => {
    const logo ="https://upload.wikimedia.org/wikipedia/commons/b/bf/Front-end-logo-color%402x.png"
  return (
    <>
       <container>
        <AppBar><Toolbar>
        <img src={logo} alt="logo" style={{width:"40px"
        }}/></Toolbar></AppBar>
        </container>
    </>
  );
}

export default Header;
