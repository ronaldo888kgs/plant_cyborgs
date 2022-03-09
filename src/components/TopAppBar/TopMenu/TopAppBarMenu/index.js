
import { memo, useState, useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-scroll";

import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { useMediaQuery } from '@material-ui/core';
import * as IoIcons from 'react-icons/io';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Avatar, Divider, Grid, Fade} from '@material-ui/core';
import profilePic from '../../../../images/avatar.jpg'
import {AppContext} from '../../../../contexts'
import {ADMIN_ADDRESS} from '../../../../config';

const useStyles = makeStyles(theme => ({
  menu: {
    flexDirection: 'row',
    width: 'fit-content',
    minHeight: '100%',
    padding: 0
  },
  menuList: {
    cursor: 'pointer',
    padding: '0px 10px'
  },
  menuItem: {
    color: '#52A6BF',
    cursor: 'pointer',
    padding: '0px 10px',
    fontSize: '18px',
    fontFamily: 'Play, sans-serif',
    '&:hover': {
      color: '#6acae7'
    }
  },
  mobileMenu: {
    "& .MuiPaper-root": {
      background: 'black',
      boxShadow: '0px 0px 5px white',
      marginTop: 33
    }
  },
  avatar: {
    margin: '10px 0 20px 0',
    width: 90,
    height: 90,
    borderRadius: '50%'
  },
}));

const TopAppBarMenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  const {address} = useContext(AppContext);
  const [isShow, setIsShow] = useState(false)
  const handleClick = (e) => {
    setIsShow(!isShow)
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setIsShow(false)
    setAnchorEl(null);
  }
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <>
      {isMd?
        <ListItem className={classes.menu}>
          <Link to="mint" spy={true} smooth={true} offset={0} duration={1000}>
            <Typography variant='body2' className={classes.menuItem}>Mint</Typography>
          </Link>
          <Link to="story" spy={true} smooth={true} offset={0} duration={1000}>
            <Typography variant='body2' className={classes.menuItem}>Story</Typography>
          </Link>
          <Link to="artwork" spy={true} smooth={true} offset={0} duration={1000}>
            <Typography variant='body2' className={classes.menuItem}>ArtWork</Typography>
          </Link>
          <Link to="featured" spy={true} smooth={true} offset={0} duration={1000}>
            <Typography variant='body2' className={classes.menuItem}>Featured Cyborgs</Typography>
          </Link>
          <Link to="roadmap" spy={true} smooth={true} offset={0} duration={1000}>
            <Typography variant='body2' className={classes.menuItem}>Roadmap</Typography>
          </Link>
          <Link to="faq" spy={true} smooth={true} offset={0} duration={1000}>
            <Typography variant='body2' className={classes.menuItem}>FAQ</Typography>
          </Link>
          {address == ADMIN_ADDRESS&&
            <Link to="setting" spy={true} smooth={true} offset={0} duration={1000}>
              <Typography variant='body2' className={classes.menuItem}>Setting</Typography>
            </Link>
          }          
        </ListItem>
        :
        <div>
          <OutlinedButton onClick={e => handleClick(e)} style={{ border: 'none' }}>
            <IoIcons.IoIosMenu style={{ color: '#fff', fontSize: '35px', fontWeight:'bold'}} />
          </OutlinedButton>
          {isShow&&
            <Menu
              id="simple-menu"
              anchorEl={anchorEl} 
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              TransitionComponent={Fade}
              className={classes.mobileMenu}
            >
              <Grid container justify='center' alignItems='center'>
                <Avatar
                  alt='Profile image, just a head shot.'
                  src={profilePic}
                  className={classes.avatar}
                >
                  CS
                </Avatar>
              </Grid>
              <Divider style={{ marginTop: `10px` }} />
              <MenuItem style={{color: '#000'}} onClick={handleClose}>
                <Link to="mint" spy={true} smooth={true} offset={0} duration={1000}>
                  <Typography variant='body2' className={classes.menuItem}>Mint</Typography>
                </Link>
              </MenuItem>
              <MenuItem style={{color: '#000'}} onClick={handleClose}>
                <Link to="story" spy={true} smooth={true} offset={0} duration={1000}>
                  <Typography variant='body2' className={classes.menuItem}>Story</Typography>
                </Link>
              </MenuItem>
              <MenuItem style={{color: '#000'}} onClick={handleClose}>
                <Link to="featured" spy={true} smooth={true} offset={0} duration={1000}>
                  <Typography variant='body2' className={classes.menuItem}>Featured Cyborgs</Typography>
                </Link>
              </MenuItem>
              <MenuItem style={{color: '#000'}} onClick={handleClose}>
                <Link to="roadmap" spy={true} smooth={true} offset={0} duration={1000}>
                  <Typography variant='body2' className={classes.menuItem}>Roadmap</Typography>
                </Link>
              </MenuItem>
              <MenuItem style={{color: '#000'}} onClick={handleClose}>
                <Link to="faq" spy={true} smooth={true} offset={0} duration={1000}>
                  <Typography variant='body2' className={classes.menuItem}>FAQ</Typography>
                </Link>
              </MenuItem>
            </Menu>}
        </div>
      }
    </>
  );
};

export default memo(TopAppBarMenu);
