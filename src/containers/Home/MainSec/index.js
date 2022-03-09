
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import { FOOTER_MENUS } from 'constants/links/footer-menu-items';
import Image from 'components/UI/Image';

const useStyles = (isMd) => makeStyles(theme => ({
  root: {
    borderBottom: '1px solid #42879B',
    paddingBottom: '5px'
  },
  backImage: {
    backgroundImage: 'url(/assets/images/Website_reduced.jpg)',
    height: 150,    
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.up('sm')]: {
      height: 300
    },
    [theme.breakpoints.up('md')]: {
      height: 400
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 500
    },
    [theme.breakpoints.up(1600)]: {
      minHeight: 604
    }
  },  
  backLogoImageContainer:{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftImage: {
    borderRadius: theme.spacing(0),
    width: 193,
    height: 150,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      width: 380,
      height: 300,
      marginLeft: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: 500,
      height: 400
    },
    [theme.breakpoints.up('lg')]: {
      width: 650,
      height: 500
    },
    [theme.breakpoints.up(1600)]: {
      width: 863,
      height: 670
    }
  },
  leftId: {
    borderRadius: theme.spacing(0),
    height: 75,
    width: 20,
    marginLeft: '-1.6rem',
    transformOrigin: '51.5px 0px',
    transform: 'perspective(850px)  rotateX(-90deg)',
    '-webkit-animation': '$ctmSqr 1s  linear forwards',
    animation: '$ctmSqr 1.2s  linear forwards',
    animationDelay: '1.5s',
    display: 'none',
    [theme.breakpoints.up(414)]: {
      marginLeft: '-2rem'
    },
    [theme.breakpoints.up('sm')]: {
      height: 150,
      width: 40,
      marginLeft: '-3rem'
    },
    [theme.breakpoints.up('md')]: {
      height: 200,
      width: 55,
      marginLeft: '20%'
    },
    [theme.breakpoints.up('lg')]: {
      height: 250,
      width: 75,
      marginLeft: '10%'
    },
    [theme.breakpoints.up(1600)]: {
      height: 355,
      width: 100,
      marginLeft: '20%'
    }
  },
  rightImage: {
    borderRadius: theme.spacing(0),
    width: 150,
    height: 130,
    marginTop: 20,
    display: 'none',
    [theme.breakpoints.up(414)]: {
      marginLeft: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: 305,
      height: 270,
      marginTop: 30
    },
    [theme.breakpoints.up('md')]: {
      width: 390,
      height: 360,
      marginTop: 40
    },
    [theme.breakpoints.up('lg')]: {
      width: 510,
      height: 450,
      marginTop: 50,
      marginLeft: 0      
    },
    [theme.breakpoints.up(1600)]: {
      width: 660,
      height: 580,
      marginTop: 90,
      marginLeft: '10%'
    }
  },
  rightId: {
    borderRadius: theme.spacing(0),
    height: 75,
    width: 20,
    marginLeft: '0.8rem',
    marginRight: '-2.5rem',
    transformOrigin: '51.5px 0px',
    transform: 'perspective(850px)  rotateX(-90deg)',
    animationDelay: '2s',
    '-webkit-animation': '$ctmSqr .8s  linear forwards',
    animation: '$ctmSqr 1.2s  linear forwards',
    display: 'none',
    [theme.breakpoints.up(414)]: {
      marginLeft: '-0.5rem'
    },
    [theme.breakpoints.up('sm')]: {
      height: 150,
      width: 40,
      marginLeft: '1rem',
      marginRight: '-4.3rem'
    },
    [theme.breakpoints.up('md')]: {
      height: 200,
      width: 55
    },
    [theme.breakpoints.up('lg')]: {
      height: 250,
      width: 75,
      marginRight: '-5.5rem'
    },
    [theme.breakpoints.up(1600)]: {
      height: 355,
      width: 100,
      marginLeft: '150%',
      marginRight: '0'
    }
    
  },
  '@-webkit-keyframes ctmSqr': {
    from: {
      '-webkit-transform':  'translateX(-90px)',
      transform:  'translateX(-90px)'
    },
    to: {
      '-webkit-transform': 'translateX(0px)',
              transform: 'translateX(0px)'
    }
  },
  '@keyframes ctmSqr': {
    from: {
      '-webkit-transform': 'rotateX(-90px)',
              transform:'rotateX(-90px)'
    },
    to: {
      '-webkit-transform': 'rotateX(0deg)',
      transform: 'rotateX(0deg)'
    }
  },
  container: {
    flexWrap: 'nowrap'
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    justifyContent: 'center',
    gap: '50px',
    padding: '10px 0'
  },
  button: {
    width: 30,
    height: 30,
    cursor: 'pointer',
    objectFit: 'cover',
    objectPosition: '50% 50%',

    [theme.breakpoints.up('sm')]: {
      width: 41,
      height: 41
    }
  }
}));

const MainSec = props => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
  });
  const classes = useStyles(isMd)();
  const onClickHandler = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.backImage}>
        <div className={classes.backLogoImageContainer}>
        <Image src="assets/images/Logo.png" width={434} height={457} />
        </div>
      {!isMd?
        <Grid container className={classes.container}>
          <Grid
            item
            container
            xs={12}
            md={5}
          >
            <Grid
              item
              container
              xs={8}
              md={8}
              data-aos={'fade-up'}
            >
              <Image
                src="assets/images/BM.png"
                className={classes.leftImage}
                data-aos="fade-right"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500"
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
              xs={2}
              md={2}
            >
              <Image
                src="assets/images/BM-ID.png"
                className={classes.leftId}
              />
            </Grid>
            <Grid
              item
              container
              xs={1}
              md={1}
              data-aos={'fade-up'}
            >
            </Grid> 
          </Grid>
          <Grid
            item
            container
            xs={1}
            md={1}
            data-aos={'fade-up'}
          >
          </Grid>
          <Grid
              item
              container
              xs={1}
              md={1}
              justify={'flex-end'}
            >
              <Image
                src="assets/images/AMPH-ID.png"
                className={classes.rightId}
              />
            </Grid>
          <Grid
            item
            container
            xs={5}
            md={5}
            justify={'flex-end'}          
          >
            <Image
                src="assets/images/AMPH.png"
                className={classes.rightImage}
                data-aos="fade-left"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500"
              />
          </Grid>
        </Grid>
      :
        <Grid container className={classes.container}>
          <Grid
            item
            container
            xs={12}
            md={5}
          >
            <Grid
              item
              container
              xs={8}
              md={8}
              data-aos={'fade-up'}
            >
              <Image
                src="assets/images/BM.png"
                className={classes.leftImage}
                data-aos="fade-right"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500"
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
              xs={2}
              md={2}
            >
              <Image
                src="assets/images/BM-ID.png"
                className={classes.leftId}
              />
            </Grid>
            <Grid
              item
              container
              xs={1}
              md={1}
              data-aos={'fade-up'}
            >
            </Grid> 
          </Grid>
          <Grid
            item
            container
            xs={2}
            md={2}
            data-aos={'fade-up'}
          >
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={5}
            
          >
            <Grid
              item
              container
              xs={1}
              md={1}
              justify={'flex-end'}
            >
              <Image
                src="assets/images/AMPH-ID.png"
                className={classes.rightId}
              />
            </Grid>
            <Grid
              item
              container
              xs={11}
              md={11}
              data-aos={'fade-up'}
            >
              <Image
                src="assets/images/AMPH.png"
                className={classes.rightImage}
                data-aos="fade-left"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500"
              />
            </Grid> 
          </Grid>
        </Grid>
      }
      </div>
      <div className={classes.social}>
        {FOOTER_MENUS.map((footerMenu, index) => {
            return (
              footerMenu.img ? 
              <img key={index} src={footerMenu.icon} className={classes.button} onClick={() => onClickHandler(footerMenu.url)} alt={footerMenu.id} />
              :
              <a href={footerMenu.url}>
                <span style={{fontSize:'36px', fontFamily:'Play', color: '#C7C7C7', marginLeft: '10px', fontWeight: 'bold'}}>{footerMenu.name}</span>
              </a>
              
            )
        })}
      </div>
    </div>
  );
};

MainSec.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MainSec;
