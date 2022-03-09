
import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import CircleButton from 'components/UI/Buttons/CircleButton';
import LogoIcon from '../../components/Icons/LogoIcon'
import { Link } from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1)
    },
    display: 'flex',
    opacity: 0,
    '-webkit-animation': '$slideDown .7s linear forwards',
    animation: '$slideDown .7s linear forwards',
    animationDelay: '.7s',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    },
  },
  '@-webkit-keyframes slideDown': {
    'from': { transform: 'translate(0, -100%)', opacity: 1},
    'to': { transform: 'translate(0, 0%)', opacity: 1}
  },

  '@keyframes slideDown': {
    'from': { transform: 'translate(0, -100%)', opacity: 1},
    'to': { transform: 'translate(0, 0%)', opacity: 1}
  },
  height: {
    height: '100%'
  },
  logotxt: {
    backgroundColor: theme.custom.palette.purple,
    borderRadius: '0px 0px 10px 10px',
    fontSize: '1.2em',
    fontWeight: 900,
    fontFamily: 'lulo-clean-w01-one-bold,lulo-clean-w05-one-bold,sans-serif',
    letterSpacing: 3,
    margin: 0,
    marginTop: -10,
    padding: '20px 20px 12px 20px',
    
  }
}));

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const LogoWithTitle = ({ history, titleVariant, className }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [playing, toggle] = useAudio('assets/audio/Music.mp3');

  return (
    <div className={clsx(classes.root, className)}>
      <Link to="home" className={classes.logotxt} spy={true} smooth={true} offset={0} duration={1000}>
        VYNDSTAD
      </Link>
      <CircleButton style={{ display: 'flex', backgroundColor: 'transparent', marginLeft: theme.spacing(5) }} icon={<LogoIcon playMusic={playing}/>} onClick={toggle} />
    </div>
  );
};

export default withRouter(LogoWithTitle);
