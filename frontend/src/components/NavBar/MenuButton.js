import React from 'react'
import {NavLink} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  
    color: black;
    text-decoration: none;
    font-size: 2rem;
  
`;

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #941212',
      background: "rgba( 213, 33, 33, 0.85)"
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: "#C70303",
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.black,
        },
      },
    },
  }))(MenuItem);
  
  export default function MenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
        //   color="secondary"
          onClick={handleClick}
        >
          <MenuIcon fontSize="small"/>
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
            <StyledLink to="/home" >
                <StyledMenuItem>
                        <ListItemIcon>
                        <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                
                </StyledMenuItem>  
            </StyledLink>

            <StyledLink to="/about" >
                <StyledMenuItem>
                    <ListItemIcon>
                    <ContactMailIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Who is Kanye?" /> 
                </StyledMenuItem>
            </StyledLink>

            <StyledLink to="/fan-diary" >
                <StyledMenuItem>
                    <ListItemIcon>
                    <MenuBookIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Your Kanye Fan Diary" /> 
                </StyledMenuItem>
            </StyledLink>
        </StyledMenu>
      </div>
    );
  }