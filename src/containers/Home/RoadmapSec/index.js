
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SectionHeader from 'components/UI/SectionHeader';
import { LoadmapData } from './LoadmapData';
import RoadMapTemplate from 'components/UI/RoadMapTemplate';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: '1px solid #42879B',
    margin: '3rem 0 0 0',
    zIndex: 101,
  },
  frame: {
    width: '95%',
    margin: 'auto',
    marginTop: '0.5rem',
    maxWidth: '1200px',
    [theme.breakpoints.up('sm')]: {
      width: '95%',
      marginTop: '3rem'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%'
    }
  },
  title: {
    color: 'rgb(194, 93, 245)',
    fontSize: '30px',
    fontFamily: 'Play,sans-serif',
    fontWeight: 400,
    letterSpacing: '0.2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '40px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50px'
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '2rem'
  },
  imgDiv: {
    width: '100px',
    [theme.breakpoints.down(500)]: {
      width: '70px'
    }
  },
  titleDiv: {
    width: 'calc(100% - 100px)',
    marginLeft: '4rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2rem'
    },
    [theme.breakpoints.down(500)]: {
      marginLeft: '10px'
    },
    [theme.breakpoints.down(400)]: {
      marginLeft: '10px'
    }
  }
}));

const RoadmapSec = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  
  return (
    <div id='roadmap' className={clsx(classes.root, className)} {...rest}>
      <div className={classes.frame}>
        <div className={classes.container}>
          <div className={classes.imgDiv}></div>
          <div className={classes.titleDiv}>
            <span className={classes.title}>
              ROADMAP
            </span>
          </div>
        </div>
        <SectionHeader
          title={
            LoadmapData.map((item, index) => {
              return (
                <RoadMapTemplate
                  key={index}
                  image={item?.image}
                  bridge={item?.bridge}
                  title={item?.title}
                  header={item?.header}
                  body={item?.body}
                  mt={item?.mt}>
                </RoadMapTemplate>
              )
            })
          }
        />
      </div>
    </div>
  );
};

RoadmapSec.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default RoadmapSec;
