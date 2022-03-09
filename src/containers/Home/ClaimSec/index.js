import React,  {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import Image from 'components/UI/Image';
import Incrementer from 'components/UI/Incrementer';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import Carousel from 'react-multi-carousel';
import { AppContext } from 'contexts';
import { PUBLIC_SALE_DATE } from '../../../config'
import FlipDateCounter from './FlipDateCounter'
import {nftMint, getSaleState, isPresaleUser} from '../../../services/mint'

const useStyles = makeStyles((theme, isConnected) => ({
  root: {
    borderBottom: '1px solid #42879B',
    padding: '40px 5px',

    [theme.breakpoints.up('sm')]: {
      padding: '60px 10px'
    }
  },
  largeSvgIcon: {
    '& svg': {
      fontSize: 40
    }
  },
  mintDig: {
    borderRadius: 20,
    background: '#213B43',
    padding: '5px 5px 3px 5px',
    margin: 'auto',

    [theme.breakpoints.up('sm')]: {
      minWidth: 500,
      maxWidth: 600,
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 960 //960
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: 1200,
      maxWidth: 1300,
      margin: 'auto'
    },
    [theme.breakpoints.up(1440)]: {      
      minWidth: 1430,
      maxWidth: 1440,
      borderRadius: 30,
      margin: 'auto'
    },
    [theme.breakpoints.up(1660)]: {
      minWidth: 1440,
      maxWidth: 1440,
      margin: 'auto'
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
      letterSpacing: '0.07em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50px',
      letterSpacing: '0.1em',
    },
    [theme.breakpoints.up(1440)]: {
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
    marginTop: 10,
    fontSize: 14,
    margin: 10,

    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 15
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 8
    },
    [theme.breakpoints.up(1440)]: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10
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
  mintCounter: {     
    backgroundColor: "#417585", 
    color: 'white',  
    textAlign: 'center', 
    verticalAlign: 'center',
    width: 40, 
    height: 50,      
    margin: 5, 
    borderRadius: 5,
    
    [theme.breakpoints.up('sm')]: {
      width: 50, 
      height: 60,      
      margin: 5, 
      borderRadius: 5,
    },
    [theme.breakpoints.up('lg')]: {
      width: 50, 
      height: 60,      
      margin: 5, 
      borderRadius: 5,
    },
    [theme.breakpoints.up(1440)]: {
      width: 60, 
      height: 60,      
      margin: 5, 
      borderRadius: 5,
    }
  },
  mintRouter: {
    animation: `$myEffect 1000ms`
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
  mintCounterContainer: {
    display: 'inline-block',
    [theme.breakpoints.up('lg')]: {
      marginBottom: 10
    },
    [theme.breakpoints.up(1440)]: {
      marginBottom: 20
    }
  },
  mintCounterDesc: {
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
  mintNumberContainer: {
    display: 'flex', 
    flexWrap: 'wrap', 
    flexDirection: 'row',
    alignItems: 'center', 
    height: 'inherit', 
    justifyContent: 'center'
  },
  mintNumber :{
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
  mintDivider: {
    borderTop: '1px solid',
    borderColor: '#417585',
    position: 'absolute', 
    width: 20,
    [theme.breakpoints.up('lg')]: {
      borderTop: '2px solid',
      width: 40,
      borderColor: '#417585'
    }
  },
  image: {
    borderRadius: 20,
    padding: 0,
    width: 355,
    height: 355,
    [theme.breakpoints.up(414)]: {
      width: 394,
      height: 394
    },
    [theme.breakpoints.up('sm')]: {
      width: 550,
      height: 550
    },
    [theme.breakpoints.up('md')]: {
      margin: 0,
      width: 400,
      height: 400
    },
    [theme.breakpoints.up('lg')]: {
      width: 500,
      height: 500
    },
    [theme.breakpoints.up(1440)]: {
      width: 600,
      height: 600,
      borderRadius: 30
    }
  },
  cover: {
    margin: 0,
    width: 355,
    height: 355,
    [theme.breakpoints.up(414)]: {
      width: 394,
      height: 394
    },
    [theme.breakpoints.up('sm')]: {
      margin: '20px 0 20px 0',
      width: 550,
      height: 550
    },
    [theme.breakpoints.up('md')]: {
      margin: 0,
      width: 400,
      height: 400
    },
    [theme.breakpoints.up('lg')]: {
      margin: 0,
      width: 500,
      height: 500
    },
    [theme.breakpoints.up(1440)]: {
      width: 600,
      height: 600
    }
  },
  carouselContainer: {
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start'
    }
  },

  mintCountController: {
    width: '160px !important',
    height: '47px',

    [theme.breakpoints.up('sm')]: {
      width: '200px !important',
      height: 55
    },
    [theme.breakpoints.up('lg')]: {
      width: '260px !important',
      height: 60
    }
  },
  mintTotalPrice: {
    color: '#8ACBDE',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Play,sans-serif',
    fontWeight: 500,
    marginBottom: 5,
    marginTop: '5px',
    
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
      fontWeight: 600
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
      fontWeight: 600
    },
    [theme.breakpoints.up(1440)]: {
      fontSize: 24,
      fontWeight: 600 
    }
  },
  mintButtonSmall:{
    color: '#3D6E7D',
    borderRadius: '100px',
    border: '2px solid',
    borderColor: '#3D6E7D',
    fontSize: isConnected? 24 : 13,
    fontFamily: 'Play,sans-serif',
    fontWeight: 500,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '160px !important',
    height: '47px',
    backgroundColor: '#8ACBDE',

    [theme.breakpoints.up('sm')]: {
      width: '200px !important',
      height: 55,
      fontSize: isConnected? 23 : 16,
      fontWeight: 600
    },
    [theme.breakpoints.up('lg')]: {
      width: '260px !important',
      height: 60,
      fontSize: isConnected? 26 : 20,
      fontWeight: 600
    },
    [theme.breakpoints.up(1440)]: {
      width: '260px !important',
      height: 60,
      fontSize: isConnected? 30 : 22,
      fontWeight: 600 
    }
  },
  mintButton: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#3D6E7D',
    backgroundColor: '#000',
    alignItems: 'center',
    border: '2px solid',
    borderColor: '#000',
    height: 35,
    width: 35,
    borderRadius: 35,
    fontSize: 14,
    fontFamily: 'Play,sans-serif',
    fontWeight: 500,
    cursor: 'pointer !important',

    [theme.breakpoints.up('lg')]: {
      height: 40,
      width: 40,
      borderRadius: 40,
      fontSize: 16,
      fontWeight: 600
    },
    [theme.breakpoints.up(1440)]: {
      height: 50,
      width: 50,
      borderRadius: 50,
      fontSize: 20,
      fontWeight: 600
    }
  },
  buttonDiv: {
    display:'flex',
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    margin: '0 10px',

    [theme.breakpoints.up('sm')]: {
      display:'flex'
    }
  }
}));

const ClaimSec = props => {
  const {onConnect, connected, showMsg, loadingStatus, setLoadingStatus, web3, address} = useContext(AppContext)
  const { className, ...rest } = props;
  const classes = useStyles(connected);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [inputValues, setInputValues] = useState(1);
  const [ days, setDays ] = useState();
  const [ hours, setHours ] = useState();
  const [ minutes, setMinutes ] = useState();
  const [saleState, setSaleState] = useState('locked')
  const [mintDate, setMintDate] = useState();
  const [maxMint, setMaxMint] = useState(2);
  const [price, setPrice] = useState(0.18);
  const [presaleType, setPresaleType] = useState('nouser');

  useEffect(()=>{
    const w_today = new Date();
    const w_mintDate = new Date(PUBLIC_SALE_DATE);
    setMintDate(w_mintDate.toDateString())
    
    let miliseconds = (w_mintDate - w_today); 
    let w_days = Math.floor(miliseconds / 86400000);
    let w_hours = Math.floor((miliseconds % 86400000) / 3600000);
    let w_mins = Math.round(((miliseconds % 86400000) % 3600000) / 60000);

    setDays(w_days);
    setHours(w_hours);
    setMinutes(w_mins);
  },[])
 
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
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    if(address == '' || web3 == undefined) return;
    const init = async () => {
      console.log('test mint=======================')
      let state = await getSaleState(web3);
      console.log(state)
      setSaleState(state);
      let type = await isPresaleUser(web3, address);
      console.log('type--------------------')
      console.log(type)
      setPresaleType(type);
    }
    init();
  },[address])

  useEffect(() => {
    if(saleState == 'presale') {
      setMaxMint(2);
      console.log('setprice==========================')
      console.log(presaleType)
      if(presaleType == 'whitelist') {
        setPrice(0.16);
      }
    } else if(saleState == 'public') {
      setMaxMint(3);
    } else if(saleState == 100) {
      setMaxMint(100);
    }
  }, [saleState, presaleType])

  useEffect(() => {
    if(inputValues < 1)
      setInputValues(1)
    else if(inputValues > maxMint)
      setInputValues(maxMint)
  },[inputValues])

  const mint = async () => {
    if(!connected) return;
    setLoadingStatus(true)
    const ret = await nftMint(web3, address, inputValues, price, presaleType)
    showMsg(ret.msg, ret.type)
    setLoadingStatus(false)
  }

  return (
    <div id='prologue' className={clsx(classes.root, className)} {...rest}>
      <div className={classes.mintDig}                                    
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1300">
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
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={500}
              keyBoardControl={false}
              customTransition="all .5"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
              deviceType={'desktop'}
              dotListClass="custom-dot-list-style"
              itemClass={"carousel-item-padding-40-px"}
              className={classes.cover}
            >
              {images.map((image,index) => {
                return  <Image
                  src={image}
                  key={index}
                  alt={index + '_img'}
                  lazy={false}
                  className={classes.image}
                />
              })}
            </Carousel>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={7}
            data-aos={'fade-up'}
          >  
            <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content', flexWrap: 'wrap', marginLeft: '60px'}}>
                <span className={classes.mintTitle}>
                    CLAIM YOUR CYBORGS
                </span>
                <span className={classes.mintDesc}>
                    Public sale available on {mintDate&& mintDate}
                    <br />
                </span>                
                <center>
                  {days&& 
                    <FlipDateCounter day={days} hour={hours} min={minutes} />
                  }
                  
                </center>
                

                <span className={classes.mintMaxDesc}>
                    Enter how many Cyborgs you would like to mint here ( {maxMint} Max )
                    <br />
                </span>
                
                <div className={classes.buttonDiv}>
                  <div style={{display:'flex',flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
                    <Incrementer
                      label=""
                      min="1"
                      max={maxMint}
                      onChange={e=>setInputValues(e.target.value)}
                      value={inputValues}
                      className={classes.mintCountController}
                      />
                  </div>
                  <div style={{display:'flex',flexWrap: 'wrap',flexDirection: 'column', alignItems: 'center'}}>
                    <ContainedButton
                      loading={loadingStatus}
                      // disable={!isSale}
                      onClick={() => 
                        connected? mint() : onConnect()
                      }
                        className={[classes.mintButtonSmall].join(" ")}
                      >
                        {connected? 'Mint' : 'Connect Wallet'}                    
                    </ContainedButton>
                  </div>
                </div>
                <div style={{display:'flex',flexWrap: 'wrap',flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '15px 0px 0px'}}>
                  <span className={classes.mintDesc} style={{color: 'white', marginRight: 20}}>
                      Price per Cyborg:
                  </span>
                  <span className={classes.mintPrice}>
                      Ξ {Math.round(inputValues * price * 100) / 100} + GAS
                  </span>
                </div>
{/*                 
                <div style={{display:'flex',flexWrap: 'wrap',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'}}>
                  <span className={classes.mintMaxDesc}>
                    CLAIM FEATURED CYBORGS
                  </span>
                  {/* <button
                    className={[classes.mintButton, classes.largeSvgIcon].join(" ")}
                  > */}
                  {/* <Link to="featured" spy={true} smooth={true} offset={0} duration={1000} className={[classes.mintButton, classes.largeSvgIcon].join(" ")}>
                    <KeyboardArrowDown />
                  </Link> */}
                  {/* </button> */}
                {/* </div> */}
                
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

ClaimSec.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ClaimSec;
