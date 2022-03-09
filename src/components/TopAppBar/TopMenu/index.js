
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarMenu from './TopAppBarMenu';

const useStyles = makeStyles(theme => ({
  height: {
    height: '100%'
  },
  LogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0,
    '-webkit-animation': '$slideDown .7s linear forwards',
    animation: '$slideDown .7s linear forwards',
    animationDelay: '.7s',
  },
  '@-webkit-keyframes slideDown': {
    'from': { transform: 'translate(0, -100%)', opacity: 1},
    'to': { transform: 'translate(0, 0%)', opacity: 1}
  },

  '@keyframes slideDown': {
    'from': { transform: 'translate(0, -100%)', opacity: 1},
    'to': { transform: 'translate(0, 0%)', opacity: 1}
  }
}));
const DesktopMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopAppBarLeft open = {open} setOpen={setOpen} />
      <div className={classes.LogoContainer}>
        <TopAppBarMenu />
      </div>
    </>
  );
};

export default DesktopMenu;
