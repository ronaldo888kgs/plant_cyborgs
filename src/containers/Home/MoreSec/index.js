
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Image from 'components/UI/Image';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 90,
    overflow: 'hidden',
  },
  backImage: {
    backgroundImage: 'url(/assets/images/sub_bg.jpg)',
    
    backgroundSize: '100% 100%',
    minHeight: 644,
    [theme.breakpoints.up('sm')]: {
      minWidth: 600 
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: 'url(/assets/images/Come_Background.jpg)',
      minWidth: 960 
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: 1280 
    },
    [theme.breakpoints.up('xl')]: {
      minWidth: 1920
    }
  },
  imageFace: {
    borderRadius: theme.spacing(0),    
    width: 311,
    height: 300,
    margin: '40px 0 0 -100px',
    
    [theme.breakpoints.up('sm')]: {
      width: 311,
      height: 300
    },
    [theme.breakpoints.up('md')]: {
      width: 500,
      height: 480,
      marginTop: 220
    },
    [theme.breakpoints.up('lg')]: {
      width: 600,
      height: 576,
      marginTop: 68
    },
    [theme.breakpoints.up(1440)]: {
      width: 634,
      height: 612,
      marginTop: 150
    }
  },
  imageId: {
    borderRadius: theme.spacing(0),
    height: 355,
    width: 100,
    zIndex: 91,
    [theme.breakpoints.down('sm')]: {
      height: 240,
      width: 70
    }
  },
  leftContainer: {
    color: '#fff',
    lineHeight: 1.5,
    padding: '20px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0%',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      marginTop: '0%',
    },
  },
  title: {
    fontSize: '30px',
    letterSpacing: '0.2rem',
    fontFamily: 'Play',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      fontSize: '50px'
    }
  },
  content: {
    marginTop: '1rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '1.5rem',
    }
  },
  header: {
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'roboto-bold, roboto,sans-serif',
    color: 'rgb(147, 223, 245)',
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
    }
  },
  body: {
    fontSize: '14px',
    [theme.breakpoints.up('sm')]: {
        fontSize: '16px'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '20px'
    }
  },
  container: {
    maxWidth: 1500,
    [theme.breakpoints.up(1440)]: {
      width: '100%'
    },
    [theme.breakpoints.up(1600)]: {
      width: '90%',
      margin: 'auto'
    },
    [theme.breakpoints.up(1750)]: {
      width: '80%',
      margin: 'auto'
    }
  }
}));

const MoreSec = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.backImage}>
        <Grid container className={classes.container}>
          <Grid
            item
            container
            xs={12}
            md={6}
          >
            <div className={classes.leftContainer}                                    
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200">
              <div className={classes.title}>
                MORE TO COME
              </div>          
              <div className={classes.content}>
                <div className={classes.header}>
                  Interactive Experiences
                </div>
                <div className={classes.body}>
                  In the future, we aim to make the perfect interactive experience for our holders to dive into and earn additional crypto assets! It is up to you to make this possible, if you are interested, visit us on the launch day and own your unique Cyborg!
                  <br />
                  <br />
                </div>
              </div>          
              <div className={classes.content}>
                <div className={classes.header}>
                  Upcoming Cyborgs in Motion Collection
                </div>
                <div className={classes.body}>
                  We have exciting plans for a future Cyborgs in Motion  animated collection. Cyborg holders will be whitelisted for pre-sale and for special discounts for featured NFTs.
                  <br />
                  <br />
                </div>
              </div>          
              <div className={classes.content}>
                <div className={classes.header}>
                  Charities
                </div>
                <div className={classes.body}>
                  Some of the team's favorite autographed cyborgs like Harajuku, Black Matter and Tokomak  will be auctioned on OpenSea on April 1st with winning bid to be donated to the Charity of community members choice. Follow our social media channels to get notified about this and other exciting events.
                  <br />
                  <br />
                </div>
              </div>     
            </div>     
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            style={{overflow: 'hidden'}}
          >
            <Grid
              item
              container
              xs={1}
              md={1}
              data-aos={'slide-down'}
            >
            </Grid>
            <Grid
              item
              container
              xs={1}
              md={1}
              data-aos={'slide-down'}
            >
              <Image
                src="assets/images/Harajuku ID.png"
                className={classes.imageId}
                data-aos="slide-down"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              />
            </Grid>
            <Grid
              item
              container
              xs={1}
              md={1}
            >
            </Grid>
            <Grid
              item
              container
              xs={9}
              md={9}
              justify={'flex-end'}
              
            >
              <Image
                src="assets/images/Harajuku.png"
                className={classes.imageFace}
                data-aos="slide-up"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1000"
                data-aos-delay="500"
              />
            </Grid> 
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

MoreSec.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MoreSec;
