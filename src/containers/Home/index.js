
import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import ClaimSec from './ClaimSec';
import FeaturedSec from './FeaturedSec';
import SectionAlternate from 'hoc/SectionAlternate';
import MainSec from './MainSec';
import StorySec from './StorySec';
import ArtWorkSec from './ArtWorkSec';
import RoadmapSec from './RoadmapSec';
import MoreSec from './MoreSec';
import FaqSec from './FaqSec';
import TeamSec from './TeamSec';
import SettingSec from './SettingSec';
import RolesAndBenefit from './RolesAndBenefit';
import {AppContext} from '../../contexts'

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.main
    //backgroundImage: 'url(/assets/images/homeBackground.jpg)'
  },
  carouselSection: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));

const Home = () => {
  const classes = useStyles();
  const {address} = useContext(AppContext);

  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <div className={classes.root}>
      <SectionAlternate id="main">
        <MainSec />
      </SectionAlternate>
      <SectionAlternate id="mint">
        <ClaimSec />
      </SectionAlternate>
      <SectionAlternate id="story">
        <StorySec />
      </SectionAlternate>
      <SectionAlternate id="artwork" style={{backgroundColor: '#0d171b'}}>
        <ArtWorkSec />
      </SectionAlternate>
      <SectionAlternate id="rolesAndBefefit">
        <RolesAndBenefit />
      </SectionAlternate>
      <SectionAlternate id="featured" className={classes.carouselSection}>
        <FeaturedSec />
      </SectionAlternate>
      <SectionAlternate>
        <MoreSec />
      </SectionAlternate>
      <SectionAlternate id="roadmap">
        <RoadmapSec />
      </SectionAlternate>
      <SectionAlternate id="faq">
        <FaqSec />
      </SectionAlternate>
      <SectionAlternate>
        <TeamSec />
      </SectionAlternate>      
      <SectionAlternate id="setting">
        <SettingSec />
      </SectionAlternate>

    </div >
  );
};

export default Home;
