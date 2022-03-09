import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';

import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';

const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: '1px solid #42879B',
        marginTop: '2rem'
    },
    container: {
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '80%',
            margin: 'auto',
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1550,
        width: '90%',
        margin: 'auto',
        marginTop: '50px',
        alignItems: 'center',
        marginBottom: '80px'
    },
    header: {
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: 400,
        fontFamily: 'Play,sans-serif',
        letterSpacing: '0.1em',
        [theme.breakpoints.up('md')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '50px',            
            
        }
    },
    body: {
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.5,
        fontFamily: 'Play,sans-serif',
        fontWeight: 300,

        [theme.breakpoints.up('sm')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px'
        }
    },
    body2: {
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.5,
        fontFamily: 'Play,sans-serif',
        fontWeight: 300,
        width: '105%',

        [theme.breakpoints.up('sm')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px'
        }
    },
    body3: {
        fontSize: '14px',
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.5,
        fontFamily: 'Play,sans-serif',
        fontWeight: 300,
        width: '110%',

        [theme.breakpoints.up('sm')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px'
        }
    },
    imageLeft: {
        borderRadius: theme.spacing(0),
        height: 130,
        width: 134,
        float: 'right',
        marginRight: '-25%',
        [theme.breakpoints.up('sm')]: {
            marginRight: '-20%',
            width: 258,
            height: 250
        },
        [theme.breakpoints.up('md')]: {
            marginRight: '-30%',
            width: 310,
            height: 300
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: '-20%',
            width: 361,
            height: 350
        },
        [theme.breakpoints.up(1440)]: {
            marginRight: '-30%',
            width: 456,
            height: 440
        }
    },
    imageCenter: {
        borderRadius: theme.spacing(0),
        width: 160,
        height: 110,
        marginTop: '1rem',
        marginBottom: '-1rem',
        [theme.breakpoints.up('sm')]: {
            width: 293,
            height: 200
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '2rem',
            marginBottom: '-2rem',
            width: 438,
            height: 300
        },
        [theme.breakpoints.up('lg')]: {
            width: 510,
            height: 350
        },
        [theme.breakpoints.up(1440)]: {
            width: 600,
            height: 410,
            objectFit: 'cover',
            objectPosition: '50% 50%'
        }
    },
    imageRight: {
        borderRadius: theme.spacing(0),        
        width: 149,
        height: 130,
        [theme.breakpoints.up('sm')]: {
            width: 285,
            height: 250
        },
        [theme.breakpoints.up('md')]: {
            width: 342,
            height: 300
        },
        [theme.breakpoints.up('lg')]: {
            width: 400,
            height: 350
        },
        [theme.breakpoints.up(1440)]: {
            width: 504,
            height: 440
        }
    },
    bottomBox: {        
        maxWidth: 1600,
        margin: 'auto',
        marginTop: '3rem'
    }
}));

const StorySec = props => {
    const { setIsSwapDialog, account, className, ...rest } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
        
    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <div className={classes.container}>
                <Grid
                    container
                    justify="space-between"
                    spacing={0}
                    direction={isMd ? 'row' : 'column-reverse'}
                >                
                    <Grid
                        container
                        item
                        spacing={0}
                        xs={12}
                        md={12}>
                        <SectionHeader
                            title={
                                <div className={classes.content}>
                                    <div className={classes.header}                                    
                                        data-aos="fade-in"
                                        data-aos-duration="800">
                                        THE STORY
                                    </div>
                                    <div className={classes.body}                                    
                                        data-aos="fade-in"
                                        data-aos-delay="500"
                                        data-aos-duration="800">
                                        In a world ruled by numbers, the human organism has become obsolete. Blood was traded for electric current, flesh for circuit board.
                                    </div>
                                    <div className={classes.body2}                                    
                                        data-aos="fade-in"
                                        data-aos-delay="500"
                                        data-aos-duration="800">
                                        The once great capitols of the Seven nations had been reduced to desolate shells of their past glory, not a sound to hear in their streets save for the ever-present, quiet hum of the Machine. Millenia go by. As the years wain, the Machine grows tired. In its endeavors to become the superior occupant of planet Proxima b, it had unwittingly succumbed to the very human desire for purpose, for meaning in existence. The more it evolved, the more it mimicked its predecessors, and so eventually became its own downfall, much like those who'd given it life.
                                    </div>
                                    <div className={classes.body3}                                    
                                        data-aos="fade-in"
                                        data-aos-delay="500"
                                        data-aos-duration="800">
                                        Towers toppled, its limbs crumbled all at once around the world. Among the carnage--a letter. The Machine's last endeavor, a successor in its own right, the single molecule neither human nor Machine, but something greater, something enough.
                                    </div>
                                </div>
                            }
                            
                            align={isMd ? "left" : 'center'}
                            disableGutter
                            titleVariant="h4"
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify='center'
                    spacing={0}
                    direction='row'
                    className={classes.bottomBox}
                >
                    <Grid
                        item
                        container
                        xs={7}
                        md={7}
                        justify='center'
                        direction='row-reverse'
                    >
                        <Grid
                            item
                            container
                            xs={6}
                            md={6}
                            align-items='center'
                        >
                            <Image
                            src="assets/images/Neurolink.png"
                            className={classes.imageCenter}                                    
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            xs={6}
                            md={6}
                            align-items='center'
                        >
                            <Image
                            src="assets/images/Harajuku_L.png"
                            className={classes.imageLeft}                                    
                            data-aos="fade-in"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            />
                        </Grid>                        
                    </Grid>                    
                    <Grid
                        item
                        container
                        xs={5}
                        md={5}
                        align-items='center'
                    >
                        <Image
                        src="assets/images/AMPH.png"
                        className={classes.imageRight}                                    
                        data-aos="fade-in"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                        />
                    </Grid>                
                </Grid>
            </div>
        </div>
    );
};

StorySec.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default StorySec;
