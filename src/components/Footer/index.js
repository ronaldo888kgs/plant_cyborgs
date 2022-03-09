
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';

import { FOOTER_MENUS } from 'constants/links/footer-menu-items';
import Logo from 'components/Logo';

const useStyles = makeStyles(theme => ({

    root: {
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down(360)]: {
            flexDirection: 'column',
        },
        minHeight: theme.custom.layout.footerHeight,
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        backgroundColor: 'black',
    },
    logotxt: {
        backgroundColor: theme.custom.palette.purple,
        borderRadius: '0px 0px 10px 10px',
        fontSize: '1.2em',
        fontWeight: 900,
        fontFamily: 'lulo-clean-w01-one-bold,lulo-clean-w05-one-bold,sans-serif',
        letterSpacing: 3,
        margin: 0,
        padding: '15px 20px 12px 20px',
        color: '#fff'
    },
    logoDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid',
        borderColor: theme.custom.palette.purple
    },
    logowith: {
        alignItems: 'center',
        margin: 'auto',
        width: '100%'
    },
    color: {
        color: 'rgb(117,117,117)',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1.5),
        textAlign: 'center',
        paddingTop: '10px',
        borderTop: '1px solid #417585',
        width: '50%'
    },
    social: {
        width: '100%',
        display: 'flex',
        gap: '30px',
        marginBottom: '20px',
        justifyContent: 'center'
    },
    premium: {
        marginBottom: '70px',
        fontSize: '20px',
        color: '#417585',
        textAlign: 'center'
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

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const onClickHandler = (url) => {
        window.open(url, '_blank');
    }

    return (
        <footer className={classes.root}>
            <div className={classes.logowith}>
                
                <div style={{ display:'flex', justifyContent: 'center', marginBottom: '40px'}}>
                    <Typography className={classes.color} variant='subtitle1'>
                        © 2022 Vyndstad™
                    </Typography>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
