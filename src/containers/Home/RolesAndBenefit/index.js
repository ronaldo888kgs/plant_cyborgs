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
    },
    container: {
        maxWidth: 1500,
        width: '96%',        
        margin: 'auto',
        marginTop: '2rem',
        paddingBottom: '4rem',
        // borderBottom: '1px solid #42879B',
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
        marginTop: '5rem',
        width: '100%',
        height: '100%',
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

const RolesAndBenefit = (props) => {
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
                                ROLES & BENEFITS
                            </div>          
                            <Image className={classes.image} src="/assets/images/Bemefits.jpg" />          
                        </div>
                    }
                    
                    align={'center'}
                    disableGutter
                    titleVariant="h4"
                />  
            </div>
        </div>
    );
}

export default RolesAndBenefit;