import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import Image from 'components/UI/Image';
import Carousel, { consts } from 'react-elastic-carousel';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({

    rec:{
        '& $rec-slider-container':{
            [theme.breakpoints.up('xs')]: {
                width:'250px'
            },
        }
    },
    'rec-slider-container':{

    },

    container:{
        position:'relative', display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' , marginRight: '25px'
    },
    imageCard:{
        overFlow: 'hidden',
        width: "200px",
        height: "200px",
        marginTop: '10px',
        mariginLeft: '5px',
        mariginRight: '5px',
        
        [theme.breakpoints.up(414)]: {
            width: "250px",
            height: "250px"
        },

        [theme.breakpoints.up('sm')]: {
            marginTop: '20px'
        },
        [theme.breakpoints.up('md')]: {
            width: "350px",
            height: "400px"
        },
        [theme.breakpoints.up('lg')]: {
            width: "350px",
            height: "470px"
        },
        [theme.breakpoints.up(1440)]: {
            width: '400px',
            height: '520px',
            marginTop: '30px'
        },
    },
    arrowButton:{
        minWidth: "32px",
        height: "20px",
        [theme.breakpoints.up('sm')]: {            
            width: "25px",
            height: "40px"
        },
        [theme.breakpoints.up('md')]: {            
            minWidth: "40px",
        },
        [theme.breakpoints.up(1600)]: {            
            minWidth: "64px",
        }
    },
    largeSvgIcon: {
        '& svg': {
          height: 20,
          [theme.breakpoints.up('sm')]: {            
                height: 40
            }
        }
      },
    title: {
        color: 'white',
        fontSize: '25px',
        lineHeight: 1,
        [theme.breakpoints.up('sm')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '40px',
        }
    },
    subTitle: {
        color: '#8acbde',
        fontSize: '20px',
        lineHeight: 1,
        [theme.breakpoints.up('sm')]: {
            fontSize: '25px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '30px',
        }
    },
}));
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 1 }
  ];

const ImageCard = ({src, title, subTitle, clazz}) => {

    const [isZoom, setIsZoom] = useState(false);
    
    const onMouseOver = function(e){
        setIsZoom(true);
    }

    return (
        <div className={clazz.container}  onMouseEnter={e => onMouseOver(e)} onMouseLeave={() => setIsZoom(false)}>
            <div className={clazz.imageCard} >
                <Image
                    src={src}
                    alt={'_img'}
                    lazy={false}
                    style={{ zoom: isZoom ? 1.2 : 1 }}
                ></Image>
            </div>
            
            <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column', marginTop:'10px' }}>
                <span className={clazz.title}>{title}</span>
                <span className={clazz.subTitle}>{subTitle}</span>
            </div>
            {isZoom&&
                <div style={{ position:'absolute', width: '100%', height: '100%' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <a onClick={() => console.log('clicked')} style={{ cursor: 'pointer' }}>
                            <svg viewBox="0 0 18 17" fill="currentColor" width="20" height="20"><path d="M12.221 2.361l4.453 4.722-4.453 4.723v-1.7l-.758-.19a9.37 9.37 0 0 0-2.274-.283c-2.936 0-5.684 1.228-7.673 3.211 2.179-8.31 8.905-8.783 9.758-8.783h.947v-1.7zm-.947.756C9.189 3.21.664 4.627 0 17c1.516-3.778 5.116-6.328 9.19-6.328.663 0 1.326.095 2.084.19v3.305L18 7.083 11.274 0v3.117z"></path></svg>
                        </a>
                    </div>
                </div>
            }
        </div>
    );
}

const PrevSvg = function(){
    return(
        <svg width="23" height="39" viewBox="0 0 23 39" style={{transform: "scaleX(-1) scale(1)", fill: "#8acbde"}}>
            <path d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z" transform="translate(-855 -230)"></path>
        </svg>
    );
}

const NextSvg = function(){
    return (
        <svg style={{fill: "#8acbde"}} width="23" height="39" viewBox="0 0 23 39">
            <path d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z" transform="translate(-855 -230)"></path>
        </svg>
    );
}
const Gallery = function({items}){
    const clazz = useStyles();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true,
    });

    const myArrow = function ({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? 
                <PrevSvg />
            : 
                <NextSvg />
        return (
            <div style={{ display: 'flex', alignItems:'center' }}>
                {
                    <Button onClick={onClick} disabled={isEdge} className={[clazz.arrowButton, clazz.largeSvgIcon].join(' ')}>
                        {pointer}
                    </Button>
                }

            </div>
          
        )
      };

    return (
        <>
            <div style={{ display:'flex', justifyContent: 'center' }}>
                <div style={{ width: '98%'}}>
                <Carousel breakPoints={breakPoints} pagination={false} renderArrow={myArrow} >
                        {items.map((item,index) => {
                        return  <ImageCard
                            src={item.src}
                            key={index}
                            clazz={clazz}
                        />
                        })}
                    </Carousel>
                    
                </div>
            </div>
            
            
        </>
    )
}
export default Gallery;