import React,  {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';

import Image from 'components/UI/Image';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import Carousel from 'react-multi-carousel';

import Gallery from './ElasticCarousel';


const useStyles = makeStyles(theme => ({
  root: {
    // borderBottom: '1px solid #42879B',
    padding: '40px 0',
    margin: 'auto',
    width: '100%',
    zIndex: 100,
    maxWidth: 1600,

    [theme.breakpoints.up(1440)]: {
      width: '90%'
    }
  },
  title: {
    color: 'rgb(194, 93, 245)',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: '30px',
    marginBottom: '50px',
    lineHeight: 1,
    padding: 0,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50px',
    }
  },

  title2: {
    color: 'rgb(194, 93, 245)',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: '30px',
    letterSpacing: '0.05em',
    marginBottom: 20,
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px',
      letterSpacing: '0.07em'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50px',
      letterSpacing: '0.1em'
    }
  },
  mintDigContainer:{
    width: '90%',
    margin: 'auto',
    "& >div:nth-child(n)":{
      marginBottom: '70px'
    },
    "& >div:nth-child(last)":{
      marginBottom: 'auto'
    },
  },

  mintDig: {
    borderRadius: 20,
    background: '#213B43',
    padding: '4px',
    margin: 'auto',    

    [theme.breakpoints.up(1600)]: {
      minWidth: 1400,
      maxWidth: 1400,
    }
  },
  mintDig2: {
    borderRadius: 20,
    padding: '4px',
    margin: 'auto',    

    [theme.breakpoints.up(1600)]: {
      minWidth: 1400,
      maxWidth: 1400,
    }
  },
  mintSubTitle: {
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: '25px',
    color: '#93dff5',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up(1600)]: {
      fontSize: '25px',
    }
  },
  mintTitle: {
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: '30px',
    letterSpacing: '0.05em',
    margin: 5,
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px',
      letterSpacing: '0.07em'
    },
    [theme.breakpoints.up(1600)]: {
      fontSize: '50px',
      letterSpacing: '0.1em'
    }
  },
  mintDesc: {
    color: '#3D6E7D',
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 5,
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      marginBottom: 8
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
      marginBottom: 8
    },
    [theme.breakpoints.up(1440)]: {
      fontSize: 20,
      marginBottom: 10
    }
  },
  mintMaxDesc: {
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 13,
    padding: '0 10px',
    lineHeight: 1.5,
    letterSpacing: 0,

    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 80,
      marginBottom: 8
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
      textAlign: 'center',
      margin: 0,
      marginTop: 100
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 120,
      marginBottom: 18
    },
    [theme.breakpoints.up(1600)]: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 170,
      marginBottom: 20
    }
  },
  mintPrice: {
    color: 'white',    
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: 600
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 22,
      marginBottom: 10,
      fontWeight: 600
    },
    [theme.breakpoints.up(1440)]: {
      fontSize: 25,
      marginBottom: 10,
      fontWeight: 600
    }
  },
  "@keyframes myEffect": {
    "25%": {
      transform: "rotateX(90deg)"
    },
    "50%": {
      transform: "rotateX(90deg)"
    },
    "100%": {
      transform: "rotateX(-180deg)"
    }
  },
  image: {
    width: '400px',
    height: '400px',
  },
  hazImage: {
    borderRadius: 15,
    width: 327,
    height: 327,
    marginTop: 20,

    [theme.breakpoints.up(414)]: {
      width: 362,
      height: 362,
    },    
    [theme.breakpoints.up('sm')]: {
      borderRadius: 20,
      width: 640,
      height: 640,
      marginBottom: 20
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      width: '400px',
      height: '550px',
      marginBottom: 0
    },
    [theme.breakpoints.up(1150)]: {
      width: '500px',
      height: '650px',
    },
    [theme.breakpoints.up(1280)]: {
      width: '500px',
      height: '650px',
    },
    [theme.breakpoints.up(1600)]: {
      width: '600px',
      height: '750px',
    }
  },
  cover: {
    margin: '20px 0 5px 0',
    width: '100%',
    height: 400,
    [theme.breakpoints.up('sm')]: {
      margin: '20px 0 20px 0',
      width: '100%',
      height: 400
    },
    [theme.breakpoints.up('md')]: {
      margin: 0,
      width: '100%',
      height: 400
    },
    [theme.breakpoints.up(1600)]: {
      margin: 0,
      width: '100%',
      height: 500
    }
  },
  carouselContainer: {
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start'
    }
  },
  mintButton: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#3D6E7D',
    alignItems: 'center',
    border: '2px solid',
    borderColor: '#3D6E7D',
    height: 35,
    width: 140,
    borderRadius: 35,
    fontSize: 14,
    fontFamily: 'Play,sans-serif',
    fontWeight: 500,
    marginTop: 10,

    [theme.breakpoints.up('lg')]: {
      height: 50,
      width: 200,
      borderRadius: 40,
      fontSize: 16,
      fontWeight: 600
    },
    [theme.breakpoints.up(1440)]: {
      height: 60,
      width: 260,
      borderRadius: 50,
      fontSize: 30,
      fontWeight: 600
    }
  },
  mintSmallButton: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#3D6E7D',
    alignItems: 'center',
    border: '2px solid',
    borderColor: '#3D6E7D',
    height: 40,
    width: 160,
    borderRadius: 20,
    fontSize: 14,
    fontFamily: 'Play,sans-serif',
    fontWeight: 500,
    marginTop: 10,

    [theme.breakpoints.up('lg')]: {
      height: 40,
      width: 160,
      borderRadius: 20,
      fontSize: 16,
      fontWeight: 600
    },
    [theme.breakpoints.up(1440)]: {
      height: 40,
      width: 160,
      borderRadius: 20,
      fontSize: 20,
      fontWeight: 600
    }
  },
  topDiv: {
    width: '100%',
    marginBottom: '4rem'
  },
  topImages:{
    textAlign: 'center',
    [theme.breakpoints.up(1440)]: {
      width:'110%',
      transform: 'translateX(-5%)'
    }    
  },
  top_image: {
    padding: '0 20px',
    width: 300,
    height: 300,
    objectFit: 'cover',
    [theme.breakpoints.up('sm')]: {
      width: 350,
      height: 350
    },
    [theme.breakpoints.up('md')]: {
      width: 400,
      height: 400
    },
    [theme.breakpoints.up(1150)]: {
      width: 350,
      height: 350
    },
    [theme.breakpoints.up(1600)]: {
      margin: 0,
      width: 400,
      height: 400
    }
  },
  galleryMintBtnDiv: {
    width: "30%", 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%'
    },
    [theme.breakpoints.up(1600)]: {
      width: '30%'
    }
  },
  hazDlg: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      maxWidth: '90%',
      marginLeft: 30
    },
    [theme.breakpoints.up(1150)]: {
      maxWidth: '90%',
      marginLeft: 30
    }
  },
  saleMsg: {
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center'
    }
  }
}));

const FeaturedSec = props => {
  const { setIsSwapDialog, account, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
 
  const [loadingStatus, setLoadingStatus] = useState(false);

  const mint = async () => {
    
  }

  const images= [
    "assets/images/gallery/1.jpg",
    "assets/images/gallery/2.jpg",
    "assets/images/gallery/3.jpg",
    "assets/images/gallery/4.jpg",
    "assets/images/gallery/5.jpg",
    "assets/images/gallery/6.jpg",
    "assets/images/gallery/7.jpg",
    "assets/images/gallery/8.jpg",
    "assets/images/gallery/9.jpg"
  ];

  
  const item_VIZIERS = [
    {
      src: "assets/images/galleryVIZIERS/1.png",
      title: "Neo Tokyo",
      subTitle: "Negotiator"
    },
    {
      src: "assets/images/galleryVIZIERS/2.png",
      title: "Black Camo",
      subTitle: "Tactician"
    },
    {
      src: "assets/images/galleryVIZIERS/3.png",
      title: "Duodec",
      subTitle: "Code Master"
    },
    {
      src: "assets/images/galleryVIZIERS/4.png",
      title: "DSV Alvin",
      subTitle: "Deep Water Explorer"
    },
    {
      src: "assets/images/galleryVIZIERS/5.png",
      title: "Kochet",
      subTitle: "C-in-C"
    },
    {
      src: "assets/images/galleryVIZIERS/6.png",
      title: "Tokamak",
      subTitle: "Fanatic"
    },
    {
      src: "assets/images/galleryVIZIERS/7.png",
      title: "Amphibian",
      subTitle: "Die-hard"
    },
    {
      src: "assets/images/galleryVIZIERS/8.png",
      title: "Black Matter",
      subTitle: "Strategist"
    },
    {
      src: "assets/images/galleryVIZIERS/9.png",
      title: "Harajuku",
      subTitle: "Engineer"
    },
  ]


  
  const item_ELITE = [
    {
      src: "assets/images/galleryElite/1.png",
      title: "Profligoth",
      subTitle: "Spaceship Captain"
    },
    {
      src: "assets/images/galleryElite/2.png",
      title: "Tarantoga",
      subTitle: "Scientist"
    },
    {
      src: "assets/images/galleryElite/3.png",
      title: "Trurl",
      subTitle: "Gunsmith"
    },
    {
      src: "assets/images/galleryElite/4.png",
      title: "Ijon Tichy",
      subTitle: "Scientist"
    },
    {
      src: "assets/images/galleryElite/5.png",
      title: "Dońda",
      subTitle: "Architect"
    },
    {
      src: "assets/images/galleryElite/6.png",
      title: "Snaut",
      subTitle: "Reconnoiter"
    },
    {
      src: "assets/images/galleryElite/7.png",
      title: "KET 171857",
      subTitle: "Polymath"
    },
    {
      src: "assets/images/galleryElite/8.png",
      title: "Klapauc",
      subTitle: "Software Engineer"
    },
    {
      src: "assets/images/galleryElite/9.png",
      title: "Elektrybałt",
      subTitle: "Data Analyst"
    },
    {
      src: "assets/images/galleryElite/10.png",
      title: "Elektrybałt",
      subTitle: "Data Analyst"
    },
    {
      src: "assets/images/galleryElite/11.png",
      title: "Elektrybałt",
      subTitle: "Data Analyst"
    },
  ]

  const respons = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1500, min: 1150 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1150, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
    <div id='prologue' className={clsx(classes.root, className)} {...rest}>
      <h3 className={classes.title}>
        <span style={{letterSpacing:'0.2em'}}>MEET OUR 22<br />
        LEGENDARY CYBORGS</span>
      </h3>      
      {/* <div className={classes.topDiv}>    
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={respons}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={50}
          keyBoardControl={false}
          customTransition="transform 800ms ease-in-out"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
          deviceType={'desktop'}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          itemWidth="400"
          className={classes.topImages}
        >
          {images.map((image,index) => {
            return  <Image
              src={image}
              key={index}
              alt={index + '_img'}
              lazy={false}
              className={classes.top_image}
            />
          })}
        </Carousel>
      </div> */}
      <div className={classes.mintDigContainer}>
        <div className={classes.mintDig}
          
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1200">
          <Grid container direction={isMd ? 'row' : 'column-reverse'}>
            <Grid
              item
              container
              alignItems="center"
              xs={12}
              md={5}
              justify={'center'}
              className={classes.carouselContainer}
            >
              <Image
                    src="assets/images/1. HAZ.png"
                    alt={'_img'}
                    lazy={false}
                    className={classes.hazImage}
                  />
            </Grid>
            <Grid
              item
              container
              justify="space-around"
              alignItems="center"
              xs={12}
              md={7}            
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200">  
              <div  className={classes.hazDlg}                                    
                    data-aos="fade-in"
                    data-aos-delay="300"
                    data-aos-duration="1000">
                  <span className={classes.mintTitle} style={{ marginBottom: 0, }}>
                    HAZ The Base Model
                  </span>
                  <span className={classes.mintSubTitle}>
                    Base Cyborg
                  </span>
                  <span className={classes.mintMaxDesc}>
                  HAZ Base Model is the Machine’s magnum opus and the beginning of a new civilization, the power of which now depletes the stars and subjugates space. Base inherited all the power of the creator, who entrusted him with the mission of creating others like himself and conquering worlds that could become a new home for cyborgs.
                  <br />
                  <br />
                  The Base Model lives in the minds of each of its subjects and uses their unique abilities for the benefit of their ultimate goal. As the leader of cyborgs, he is respected by his Viziers and the Elite alike.
                  </span>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={classes.mintDig2}
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-duration="1200">
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', flexWrap: 'wrap'}}>
            <span className={classes.mintTitle} style={{ margin:0, width: '100%'}}>
              VIZIERS
            </span>
            <div className={classes.saleMsg}>
              <span className={classes.mintDesc}>
              Click on a card to learn more about the character.
              </span>
            </div>
            <Gallery items={item_VIZIERS}></Gallery>
          </div>
        </div>

        <div className={classes.mintDig2}
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="1200">
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', flexWrap: 'wrap'}}>
            
            <span className={classes.mintTitle} style={{ margin:0, width: '100%'}}>
            ELITE
            </span>
            <div className={classes.saleMsg}>
              <span className={classes.mintDesc}>
              Click on a card to learn more about the character.
              </span>
            </div>
              <Gallery items={item_ELITE}></Gallery>
          </div>
        </div>
      </div>
      
    </div>
  );
};

FeaturedSec.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default FeaturedSec;
