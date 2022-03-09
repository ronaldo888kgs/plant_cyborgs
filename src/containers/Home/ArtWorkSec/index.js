import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';

import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1500,
        width: '100%',        
        margin: 'auto',
        marginTop: '0px',
        paddingTop:'2rem',
        paddingBottom: '4rem',
        // borderBottom: '1px solid #42879B',
        backgroundColor: '#0d171b',
    },
    container: {
        maxWidth: 1500,
        width: '96%',        
        margin: 'auto',
        marginTop: '2rem',
        paddingBottom: '4rem',
        // borderBottom: '1px solid #42879B',
        backgroundColor: '#0d171b',
        [theme.breakpoints.up('sm')]: {
            marginTop: '3rem'
        },
        [theme.breakpoints.up(1600)]: {
            width: '100%',
            margin: 'auto',
            marginTop: '5rem'
        }
    },
    image: {
        borderRadius: '20px',
        marginTop: '5rem',
        width: 300,
        height: 300,
        [theme.breakpoints.up('sm')]: {
            width: 350,
            height: 350
        },
        [theme.breakpoints.up('lg')]: {
            width: 400,
            height: 400
        },
        [theme.breakpoints.up(1440)]: {
            width: 490,
            height: 490
        }   
    },
    image2: {
        marginTop: '5rem',
        width: '100%',
        height: 300,
        [theme.breakpoints.up('sm')]: {
            height: 350
        },
        [theme.breakpoints.up('lg')]: {
            height: 400
        },
        [theme.breakpoints.up(1440)]: {
            height: 490
        }   
    },
    title: {
      fontSize: '30px',
      letterSpacing: '0.2em',
      fontWeight: 400,
      color: 'rgb(194, 93, 245)',
      fontFamily: 'Play,sans-serif',

      [theme.breakpoints.up('sm')]: {
        fontSize: '40px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '50px'
      }
    },
    content: {
      marginTop: '1.5rem'
    },
    body: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: 'Play,sans-serif',
      [theme.breakpoints.up('sm')]: {
          fontSize: '16px'
      },
      [theme.breakpoints.up('md')]: {
          fontSize: '20px'
      }
    }
}));

const ArtWorkSec = props => {
    const { setIsSwapDialog, account, className, ...rest } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
        
    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <div className={classes.container}>
            <SectionHeader
                    title={
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <div className={classes.title}                                    
                                    data-aos="fade-in"
                                    data-aos-delay="100"
                                    data-aos-duration="800">
                                THE ARTWORK
                            </div>          
                            <div className={classes.content}                                    
                                    data-aos="fade-in"
                                    data-aos-delay="300"
                                    data-aos-duration="800">
                                <div className={classes.body} >
                                    <span style={{fontStyle: 'italic'}} >Planet of Cyborgs  </span>&nbsp;&nbsp;is a one of a kind NFT collection composed of 6,622 Cyborgs generated from 200 traits. Vyndstad, the team's lead NFT artist, has worked on this artwork for over 3 months now. The main idea behind Planet of Cyborgs is artistic impression and originality. 
                                </div>
                            </div>          
                            <div className={classes.content}                                    
                                    data-aos="fade-in"
                                    data-aos-delay="300"
                                    data-aos-duration="800">
                                <div className={classes.body}>
                                Our goal is not only to immerse you in the world of Planet of Cyborgs with its engrossing story and incredible design but to have you profit from it as well! All Cyborgs are custom generated and will be launching on the Ethereum Blockchain.
                                </div>
                            </div>          
                        </div>
                    }
                    
                    align={'center'}
                    disableGutter
                    titleVariant="h4"
                />  
                <Grid
                    container
                    justify="space-between"
                    spacing={0}
                    direction={isMd ? 'row' : 'column-reverse'}
                >
                    <Grid
                        item
                        container
                        justify="start"
                        //alignItems="center"
                        xs={12}
                        md={4}>
                        <Image
                            src="assets/images/HAZ-Sketch.gif"
                            className={classes.image}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        justify="center"
                        // alignItems="center"
                        xs={12}
                        md={8}>
                        <Image
                            src="assets/images/DIAGRAM3sm.png"
                            className={classes.image2}
                        />
                    </Grid>
                </Grid>
            </div>
            
        </div>
    );
};

ArtWorkSec.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default ArtWorkSec;
