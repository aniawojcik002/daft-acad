import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import "./styles.css";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Navigation = () => {
  const [navigationVisible, setNavigationVisible] = useState(true);
  const handleShowMobilNav = () => {
    setNavigationVisible(!navigationVisible)
  }
  return (
     <div className = 'Navigation' sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {/* <div> */}
          <span className='Logo'>Logo</span>
        {/* </div> */}
          {navigationVisible && <div className='nav-links'>
            <Link className="Navigation-link" to={"/"}> Home </Link>
            <Link className="Navigation-link" to={"/About"}> About </Link>
            <Link className="Navigation-link" to ={"/form"}> Form </Link>
            <Link className="Navigation-link" to={"/Contact"}> Contact</Link>
            <Link className="Navigation-link" to={"/Rick"}> Rick</Link>
          </div>}
        </AppBar>
        </div>
    

  )
}