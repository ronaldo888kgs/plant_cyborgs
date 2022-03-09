import React, {useState, useEffect, useMemo, useRef} from 'react';
import clsx from 'clsx';
// import './style.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    flipClock: {
        display: 'flex',
        justifyContent: 'center',
    },
    clockLabels: {
        color: '#3D6E7D',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
        fontWeight: 300,
    
        [theme.breakpoints.up('sm')]: {
          fontSize: 18,
          fontWeight: 400
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 20,
          fontWeight: 500
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 18,
          fontWeight: 600
        }
      },

    flipUnitContainer: {
        display: 'block',
        position: 'relative',
        width: 55, 
        height: 55,
        perspectiveOrigin: '50% 50%',
        perspective: '300px',
        backgroundColor: '#417585',
        borderRadius: 10,
        margin: 5,
        [theme.breakpoints.up('sm')]: {   
            borderRadius: 5,
          },
          [theme.breakpoints.up('lg')]: {  
            borderRadius: 5,
          },
          [theme.breakpoints.up(1440)]: {
            width: 65, 
            height: 65,      
            borderRadius: 5,
          }
    },
    lowerCard: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        overflow: 'hidden',
        alignItems: 'flex-end',
        borderBottom: 'solid .5px #3D6E7D',
        '& span': {
            color: 'white',
            transform: 'translateY(50%)',
            fontSize: 20,
            fontWeight: 400,

            [theme.breakpoints.up('lg')]: {
            fontSize: 25,
            fontWeight: 600
            },
            [theme.breakpoints.up(1440)]: {
            fontSize: 30,
            fontWeight: 600
            }
        }
    },
    upperCard: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        overflow: 'hidden',
        alignItems: 'flex-start',
        borderRadius: '10px',
        borderBottom: 'solid .5px #3D6E7D',
        '& span': {
            color: 'white',
            transform: 'translateY(-50%)',
            fontSize: 20,
            fontWeight: 400,

            [theme.breakpoints.up('lg')]: {
            fontSize: 25,
            fontWeight: 600
            },
            [theme.breakpoints.up(1440)]: {
            fontSize: 30,
            fontWeight: 600
            }
        }
    },

    flipCard: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '50%',
        overflow: 'hidden',
        borderRadius: '10px',
        
        '-webkit-backface-visibility': 'hidden',
        backfaceVisibility: 'hidden',
        '& span': {
            color: 'white',
            fontSize: 20,
            fontWeight: 400,

            [theme.breakpoints.up('lg')]: {
            fontSize: 25,
            fontWeight: 600
            },
            [theme.breakpoints.up(1440)]: {
            fontSize: 30,
            fontWeight: 600
            }
        },

        '&$fold': {
            top: '0%',
            alignItems: 'flex-end',
            transformOrigin: '50% 100%',
            transform: 'rotateX(0deg)',
            backgroundColor: '#417585',
            borderBottom: 'solid .5px #3D6E7D',
            '-webkit-animation': '$fold .5s .3s linear both',
            animation: '$fold .5s  0.3s linear both',
            transformStyle: 'preserve-3d',
            '& span': {
                transform: 'translateY(50%)',
            }
        },
        '&$unfold': {
            top: '50%',
            alignItems: 'flex-start',
            transformOrigin: '50% 0%',
            transform: 'rotateX(180deg)',
            backgroundColor: '#417585',
            borderBottom: 'solid .5px #3D6E7D',
            '-webkit-animation': '$unfold .5s .3s linear both',
            animation: '$unfold .5s .3s linear both',
            transformStyle: 'preserve-3d',
            "& span": {
                transform: 'translateY(-50%)',
            }
        },
    },
    fold:{},
    unfold:{},
    
    

    '@-webkit-keyframes fold': {
        '0%': {
            transform: 'rotateX(0deg)',
            zIndex:2
        },
        '100%': {
            transform: 'rotateX(-180deg)',
            zIndex:10
        }
    },
    
    '@keyframes fold': {
        '0%': {
        transform: 'rotateX(0deg)',
        zIndex:2
        },
        '100%': {
        transform: 'rotateX(-180deg)',
        zIndex:10
        }
    },
    '@-webkit-keyframes unfold': {
        '0%': {
        transform: 'rotateX(180deg)',
        zIndex:2
        },
        '100%': {
        transform: 'rotateX(0deg)',
        zIndex:10
        }
    },
    '@keyframes unfold': {
        '0%': {
            transform: 'rotateX(180deg)',
            zIndex:2
        },
        '100%': {
            transform: 'rotateX(0deg)',
            zIndex:10
        }
    }
}));
const AnimatedCard = ({ animation, digit, classes }) => {
    return(
      <div className={clsx(classes.flipCard, animation)}>
        <span>{digit}</span>
      </div>
    );
  };

// function component
const StaticCard = ({ position, digit }) => {
    return(
      <div className={position}>
        <span>{digit}</span>
      </div>
    );
  };


// function component
const FlipUnitContainer = ({ digit, shuffle, unit, classes }) => {	
  
    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit + 1;
  
    // to prevent a negative value
    if ( unit !== 'hours') {
      previousDigit = previousDigit === 60 
        ? 59 
        : previousDigit;
    } else {
      previousDigit = previousDigit === 60 
        ? 23 
        : previousDigit;
    }
  
    // add zero
    if ( unit !== 'days' && currentDigit < 10 ) {
      currentDigit = `0${currentDigit}`;
    } 
    if ( unit !== 'days' && previousDigit < 10 ) {
      previousDigit = `0${previousDigit}`;
    }
  
    // shuffle digits
    const digit1 = shuffle 
      ? previousDigit 
      : currentDigit;
    const digit2 = !shuffle 
      ? previousDigit 
      : currentDigit;
  
    // shuffle animations
    const animation1 = shuffle 
      ? classes.fold
      : classes.unfold;
    const animation2 = !shuffle 
      ? classes.fold
      : classes.unfold;
    return(
      <div className={classes.flipUnitContainer}>

        <StaticCard 
          position={classes.lowerCard} 
          digit={currentDigit} 
          />  
        <StaticCard 
          position={classes.upperCard} 
          digit={previousDigit} 
          />
        

        <AnimatedCard   
          digit={digit1}
          animation={animation1}
          classes={classes}
          />
        
        <AnimatedCard 
          digit={digit2}
          animation={animation2}
          classes={classes}
          />
      </div>
    );
  };

const FlipDateCounter = ({day, hour, min}) => {
    const classes = useStyles();
    const totalSec = useRef(day * 24 * 60 * 60 + hour * 60 * 60 + min * 60);
    const currentTime = useRef(new Date);
    const [days, setDays] = useState(day);
    const [hours, setHours] = useState(hour);
    const [minutes, setMinutes] = useState(min);
    const [seconds, setSeconds] = useState(0);

    const [daysShuffle, setDaysShuffle] = useState(true);
    const [hoursShuffle, setHoursShuffle] = useState(true);
    const [minutesShuffle, setMinutesShuffle] = useState(true);
    const [secondsShuffle, setSecondsShuffle] = useState(true);

    const [ count, setCounts ] = useState(0);

    useEffect(()=>{
        let myInterval = setInterval(() => {
            let timeStamp = (new Date) - currentTime.current
            if(timeStamp >= 1000)
            {
                totalSec.current = totalSec.current - 1;
                currentTime.current = new Date;
            }
                
            let currentSec = totalSec.current % 60;
            let currentMins = parseInt(totalSec.current/60) % 60;
            let currentHours = parseInt(totalSec.current/60/60) % 24;
            let currentDays = parseInt(totalSec.current/60/60/24);
            if(currentSec != seconds)
            {
                setSeconds(currentSec);
                setMinutesShuffle(false);
                setHoursShuffle(false);
                setDaysShuffle(false);
                setSecondsShuffle(true);
            }else if(currentMins != minutes)
            {
                setMinutes(currentMins);
                setMinutesShuffle(true);
                setHoursShuffle(false);
                setDaysShuffle(false);
                setSecondsShuffle(false);
            }else if(currentHours != hours)
            {
                setHours(currentHours);
                setMinutesShuffle(false);
                setHoursShuffle(true);
                setDaysShuffle(false);
                setSecondsShuffle(false);
            }else if(currentDays != days)
            {
                setDays(currentDays);
                setMinutesShuffle(false);
                setHoursShuffle(false);
                setDaysShuffle(true);
                setSecondsShuffle(false);
            }else{
                setMinutesShuffle(false);
                setHoursShuffle(false);
                setDaysShuffle(false);
                setSecondsShuffle(false);
            }
        }, 50);
        return ()=> {
          clearInterval(myInterval);
        };   
      });
    

    return (
        <div className={classes.flipClock}>
            <div>
                <FlipUnitContainer 
                    unit={'days'}
                    digit={days} 
                    shuffle={daysShuffle} 
                    classes={classes}
                    />
                <span className={classes.clockLabels}>Days</span>
            </div>
            <div>
            <FlipUnitContainer 
                unit={'hours'}
                digit={hours} 
                shuffle={hoursShuffle} 
                classes={classes}
                />
                <span className={classes.clockLabels}>Hours</span>
            </div>
            <div>
            <FlipUnitContainer 
                unit={'minutes'}
                digit={minutes} 
                shuffle={minutesShuffle} 
                classes={classes}
                />
                <span className={classes.clockLabels}>Mins</span>
            </div>
            <div>
            <FlipUnitContainer 
                unit={'seconds'}
                digit={seconds} 
                shuffle={secondsShuffle} 
                classes={classes}
                />
                <span className={classes.clockLabels}>Secs</span>
            </div>
            
        </div>
    );
  }

  export default FlipDateCounter;