
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Image from 'components/UI/Image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 'auto',

    
    [theme.breakpoints.up(1660)]: {
      width: '80%'
  }
  },
  title: {
    color: 'rgb(194, 93, 245)',
    fontSize: '30px',
    fontWeight: '400',
    letterSpacing: '0.2em',
    fontFamily: 'Play,sans-serif',
    padding: '10px 20px',
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        fontSize: '40px'
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '50px'
    }
  },
  image: {
    padding: 0,
    height: '206px',
    width: '278px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 650,
    }
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20, 
    fontWeight: 800,
    color: '#fff',
    fontFamily: 'Play,sans-serif',
    
    textAlign: 'center'
  },
  role: {
    fontSize: 15,
    fontWeight: 400,
    
    color: '#52A6BF',
    fontFamily: 'Play,sans-serif',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  carousel: {
    // borderTop: '1px solid #fff',
    // borderBottom: '1px solid #fff'
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
    
  },
  carouselBackground: {
    position: 'absolute',
    height: '207px',
    width: '200%',
    borderTop: 'solid 1px #42879B',
    borderBottom: '1px solid #42879B',
  },
  carouselContainer: {
    width: '80%', 
    height: '292  px', 
    display: 'flex', 
    justifyContent: 'center', 
    position: 'relative',
    zIndex: 10
  },
  carouselContainer2: {
    width: '100%', 
    height: '100%', 
    display: 'flex !important', 
    justifyContent: 'center', 
    position: 'relative',
    zIndex: 10
  },
  logo: {
    width: 206,
    height: 206
  },
  logoDiv: {
    width: '100%',
    textAlign: 'center',
    marginTop: '1rem'
  }
}));

const TeamSec = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const images= [
    {
      name: 'Vynstad',
      role: 'Digital Creator',
      image: 'assets/images/team/1_Vyndstad_ID.png'
    },
    {
      name: 'Siva',
      role: 'Copywriter',
      image: 'assets/images/team/2_Siva_ID.png'
    },
    {
      name: 'Vlad',
      role: 'Developer',
      image: 'assets/images/team/3_Vlad_ID.png'
    },
    {
      name: 'Babymochi',
      role: 'Promoter',
      image: 'assets/images/team/4_Babymochi_ID.png'
    },
    {
      name: 'HAZ',
      role: 'Lazy Asshole',
      image: 'assets/images/team/5_HAZ_id.png'
    }
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1440 },
      items: 4
    },
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}> 
      <div className={classes.logoDiv}>
        <Image
            src="assets/images/LOGO_giphyB.gif"
            className={classes.logo}
        />  
      </div>   
      <div className={classes.title}>
        MEET THE CYBER TEAM
      </div>
      <div className={classes.carousel}>
        <div className={classes.carouselBackground}></div>
        
        <div className={classes.carouselContainer}>
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={500}
            keyBoardControl={true}
            customTransition="transform 800ms ease-in-out"
            transitionDuration={1000}
            containerClass={classes.carouselContainer2}
            removeArrowOnDeviceType={["superLargeDesktop"]}
            deviceType={'desktop'}
            itemClass={"carousel-item-padding-40-px"}
          >
            {images.map((item,index) => {
              return  <div key={index}><Image
                src={item.image}
                alt={index + '_img'}
                lazy={false}
                className={classes.image}
              />
              <div className={classes.name}>{item.name}</div>
              <div className={classes.role}>{item.role}</div>
              </div>
            })}
          </Carousel>
        </div>
        
      </div>
      
    </div>
  );
};

TeamSec.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default TeamSec;
