import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderStyles.css";


const Header = () => {
 const [mobileOpen, setMobileOpen] = useState(false);

// handle menu click
const handleDrawerToggle =()=>{
  setMobileOpen(!mobileOpen)
};


//  menu drawer
const drawer = (
  <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
      <Typography
          color={"goldenrod"} 
          variant='h6'
          component={"div"}
          sx={{flexGrow:1, my:2}}>
          <FastfoodIcon/>
          𝔅𝔥𝔬𝔩𝔞 𝔉𝔬𝔬𝔡𝔰
          </Typography>
          <Divider/>
            <ul className='mobile-navigation'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          
  </Box>
);


  return (
    <div>
      <Box>
        <AppBar className='main' component={"nav"} sx={{bgcolor:" rgba(173, 40, 40, 0.991)"}}>
          <Toolbar>
          <IconButton color='inherit' 
          aria-label='open-drawer'
          edge="start"
          sx={{
          mr:2,
          display: {sm:"none"},

          }}
          onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography color={"goldenrod"} 
          variant='h6' component={"div"} sx={{flexGrow:1,fontSize:'30px'}}>
          <FastfoodIcon/>
          𝔅𝔥𝔬𝔩𝔞 𝔉𝔬𝔬𝔡𝔰
          </Typography>
          <Box sx={{display:{xs : "none", sm:"block" }}} >
            <ul className='navigation-menu'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
              <Link to={'/about'}>About</Link>
              </li>
              <li>
              <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{display:{xs:'block', sm:'none'},"& .MuiDrawer-paper":{
              boxSizing:"border-box",
              width:"240px",
            }, 
            }}>
                {drawer}
            </Drawer>
        </Box>
        <Box >
         <Toolbar/>
        </Box>
      </Box>
    </div>
  )
};

export default Header
