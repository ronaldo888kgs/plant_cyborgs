import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'left'
  },
  imgDiv: {
    padding: '0rem'
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '20px',
    [theme.breakpoints.down(500)]: {
      width: '70px',
      height: '70px',
      borderRadius: '10px'
    }
  },
  bridge: {
    height: '110px',
    [theme.breakpoints.down(400)]: {
      height: '140px'
    },
    [theme.breakpoints.down(500)]: {
      height: '120px'
    }
  },
  content: {
    textAlign: 'left',
    fontSize: '20px',
    fontFamily: 'Play,sans-serif',
    fontWeight: 400,
    marginLeft: '4rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      marginLeft: '2rem'
    },
    [theme.breakpoints.down(500)]: {
      fontSize: '14px',
      marginLeft: '10px'
    },
    [theme.breakpoints.down(400)]: {
      fontSize: '13px',
      marginLeft: '10px'
    }
  },
  header: {
    color: '#52A6BF',
    marginTop: '2rem',
    fontFamily: 'Play,sans-serif',
    fontWeight: 600,
    [theme.breakpoints.down(500)]: {
      marginTop: '0.5rem'
    }
  }
}));
const RoadMapTemplate = ({
  image,
  bridge,
  title,
  header,
  body,
  mt
}) => {

  const classes = useStyles();
  const [isExpand, setExpand] = useState(false)
  const onClick = (e) => {
    e.preventDefault();
    setExpand(!isExpand)
  }
  return (
    <div className={classes.root}>
      <div className={classes.imgDiv}>
        <img
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
          className={classes.img}
          src={"assets/images/gallery/" + image + ".jpg"}
        />
        {bridge&&
          <div>          
            <img className={classes.bridge} src={"assets/images/" + bridge} />
          </div>
        }        
      </div>
      <div
        className={classes.content}
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        style={{marginTop: mt}}
      >
        <div className={classes.title}>
          {title}
        </div>
        <div className={classes.header}>          
         {header}
        </div>
        <div className={classes.body}>
          {body}
        </div>        
      </div>
    </div>
  )
}

export default RoadMapTemplate;

