import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import SectionHeader from 'components/UI/SectionHeader';
import { useSnackbar } from 'notistack';
import * as AiIcons from 'react-icons/ai';
import Image from 'components/UI/Image';

const useStyles = makeStyles(theme => ({
    root: {
        width: '95%',
        margin: 'auto',
        maxWidth: 1500,
        [theme.breakpoints.up('md')]: {
            paddingBottom: '3rem'
        },
        [theme.breakpoints.up(1600)]: {
            width: '85%',
            margin: 'auto',
        },
        [theme.breakpoints.up(1750)]: {
            width: '70%',
            margin: 'auto',
        }
    },
    image: {
        boxShadow:
          '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
        borderRadius: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          maxWidth: 500,
          marginBottom: 60
        },
    },
    title: {
        color: 'rgb(194, 93, 245)',
        fontSize: '30px',
        fontWeight: '400',
        letterSpacing: '0.2em',
        fontFamily: 'Play,sans-serif',
        padding: '10px 20px',
        marginTop: '2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '50px'
        }
    },
    contact: {
        marginTop: '3rem',
        [theme.breakpoints.up('md')]: {
            marginTop: '8rem'
        },
        [theme.breakpoints.up('lg')]: {            
            paddingRight: '3rem'
        },
        [theme.breakpoints.up(1600)]: {
            paddingRight: '5rem'
        }
    },
    content: {
        margin: '0px !important',
        padding: '10px 25px',
        textAlign: 'left'
    },
    header: {
        fontSize: '20px',
        fontFamily: 'roboto-bold, roboto,sans-serif',
        color: 'rgb(147, 223, 245)',
        [theme.breakpoints.up('sm')]: {
            fontSize: '25px'
        }
    },
    subFormFooter : {
        marginTop: '10px',
        width: '100%',
        textAlign: 'start',
        marginLeft: '30px',
        display: 'flex',
        flexDirection: 'column',

    },
    subFormFooterHeader: {
        fontSize: '18px',
        fontFamily: 'roboto-bold, roboto,sans-serif',
        fontWeight: 'bold',
        color: 'rgb(147, 223, 245)',
    },
    subFormFooterText: {
        fontSize: '18px',
        fontFamily: 'roboto-bold, roboto,sans-serif',
        color: 'white',
        display: 'flex',
        alignItems: 'center'
    },
    body: {
        color: theme.palette.text.primary,
        fontSize: '14px',
        fontWeight: 300,
        fontFamily: 'Play,sans-serif',
        textAlign: 'justify',
        lineHeight: 1.5,
        fontFamily: 'sans-serif',
        marginLeft: '30px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px'
        }
    },
    contactDiv: {
        border: '2px solid #52A6BF',
        borderRadius: '20px',
        padding: '17px 21px 17px 17px',
        color: '#8ACBDE',
        margin: '0 30px 30px 30px',
        [theme.breakpoints.up('sm')]: {
            margin: '0 150px 30px 150px'
        },
        [theme.breakpoints.up('md')]: {
            margin: 0,
            marginLeft: '30px'
        }
    },
    contactHead: {
        fontSize: '30px',
        fontWeight: 400,        
        letterSpacing: '0.1em',
        margin: '0',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '40px',
            margin: '20px 0',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '50px',
        }
    },
    nameDiv: {
        width: '100%',
        display: 'flex',
        margin: '20px 0 0 0',
        fontSize: '14px',
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]: {
            margin: '20px 0 0 0',
        }
    },
    firstname: {
        width: '47%'
    },
    lastname: {
        width: '47%'
    },
    firstInput: {
        color: '#fff',
        background: 'transparent',
        border: 0,
        borderBottom: '3px solid #52A6BF',
        fontSize: '13px',
        width: '100%',
        margin: '10px 0 0 0',
        "&:focus, &:hover": {
            outline: 'none',
            border: 0
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
            margin: '20px 0 0 0',
        }
    },
    lastInput: {
        color: '#fff',
        background: 'transparent',
        border: 0,
        borderBottom: '3px solid #52A6BF',
        fontSize: '13px',
        width: '100%',
        margin: '10px 0 0 0',
        "&:focus, &:hover": {
            outline: 'none',
            border: 0
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
            margin: '20px 0 0 0',
        }
    },
    emailDiv: {
        width: '100%',
        fontSize: '14px',
        margin: '10px 0 0 0'
    },
    emailInput: {
        width: '100%',
        color: '#fff',
        background: 'transparent',
        border: 0,
        fontSize: '13px',
        borderBottom: '3px solid #52A6BF',
        margin: '10px 0 0 0',
        "&:focus, &:hover": {
            outline: 'none',
            border: 0
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
            margin: '20px 0 0 0',
        }
    },
    messageDiv: {
        width: '100%',
        fontSize: '14px',
        margin: '10px 0 0 0'
    },
    message: {
        width: '100%',
        margin: '10px 0 0 0',
        color: '#fff',
        background: 'transparent',
        border: 0,
        fontSize: '13px',
        borderBottom: '3px solid #52A6BF',
        lineHeight: 1.5,
        height: '120px',
        "&:focus, &:hover": {
            outline: 'none',
            border: 0
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            margin: '20px 0 0 0'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
            margin: '20px 0 0 0',
            // minHeight: '520px'
        },
        // [theme.breakpoints.up('lg')]: {
        //     minHeight: '420px'
        // },
        // [theme.breakpoints.up('lg')]: {
        //     minHeight: '420px'
        // },
        // [theme.breakpoints.up(1440)]: {
        //     minHeight: '300px'
        // },
        // [theme.breakpoints.up(1800)]: {
        //     minHeight: '320px'
        // }
    },
    submitDiv: {
        textAlign: 'center',
        marginTop: '50px'
    },
    submit: {
        background: 'rgb(138,203,222)',
        color: 'rgb(66,117,133)',
        fontWeight: 600,
        borderRadius: '20px',
        border: 0,
        width: '120px',
        height: '35px',
        cursor: 'pointer',
        fontSize: 14,
        fontFamily: 'Play,sans-serif',
        "&:hover": {
            background: 'rgb(173 230 247)'
        },

        [theme.breakpoints.up('lg')]: {
            fontSize: 16
        }
    }
}));

const FaqSec = props => {
    const { enqueueSnackbar } = useSnackbar();
    const { className, ...rest } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(()=>{
        // if(firstname!=''&&lastname!=''&&email!=''&&message!=''){
        //     document.getElementById('submit').style.display = 'initial';
        // } else {
        //     document.getElementById('submit').style.display = 'none';
        // }
    },[firstname,lastname,email,message])
       
    const submit = (e) => {
        if(!validate('Email', email)) return;
        //ydnhauqblhcdqysn
        window.Email.send({ 
            Host: "smtp.gmail.com", 
            Username: "ronaldo888kgs@gmail.com", 
            Password: "twcgbawtuwxbqwcz", 
            To: 'ronaldo888kgs@gmail.com', 
            From: email, 
            Subject: firstname + " " + lastname + " sent you a message", 
            Body: "First Name : " + firstname + " <br/>" + 
            "Last Name : " + lastname + " <br/>" +
            "email : " + email + " <br/>" + 
            "message : " + message, 
          }).then(function (message) { 
            enqueueSnackbar("mail sent successfully", { variant: 'success' });
        }); 
    }
    const validate = (field, value) => {
        let w_return = true;
        if(value === undefined || value === ''){
            enqueueSnackbar(field + ' is required', { variant: 'error' });
            w_return = false;
        }
        return w_return;
    }
    const handleKeyPress = (e, target) => {
        if(e.key === 'Enter'){
            document.getElementById(target).focus();           
        }
    }

    const [isExp1, setExp1] = useState(false)
    const [isExp2, setExp2] = useState(false)
    const [isExp3, setExp3] = useState(false)
    const [isExp4, setExp4] = useState(false)

    const expandHandle = (e, num) => {
        e.preventDefault()
        if(num == 1) {
            setExp1(!isExp1)
        } else if(num == 2) {
            setExp2(!isExp2)
        } else if(num == 3) {
            setExp3(!isExp3)
        } else if(num == 4) {
            setExp4(!isExp4)
        }
    }
    
    return (
        <div className={clsx(classes.root, className)} {...rest}>            
            <Grid
                container
                justify="space-between"
                spacing={0}
                direction={isMd ? 'row' : 'column-reverse'}
            >                
                <Grid
                    item
                    container
                    justify="center"
                    //alignItems="center"
                    xs={12}
                    md={5}
                    className={classes.contact}
                    data-aos="fade-in"
                    data-aos-delay="100"
                    data-aos-duration="1200">
                    <div className={classes.contactDiv}>
                        <div className={classes.contactHead}>
                            Contact Us
                        </div>
                        <div className={classes.nameDiv}>
                            <div className={classes.firstname}>
                                Frist Name
                                <input type="text" className={classes.firstInput} onChange={e => setFirstname(e.target.value)} id='firstname'  onKeyPress={(e) => handleKeyPress(e, 'lastname')} value={firstname}/>
                            </div>
                            <div className={classes.lastname}>
                                Last Name
                                <input type="text" className={classes.lastInput} onChange={e => setLastname(e.target.value)} id='lastname'  onKeyPress={(e) => handleKeyPress(e, 'email')} value={lastname}/>
                            </div>
                        </div>
                        <div className={classes.emailDiv}>
                            Email *
                            <input type="text" className={classes.emailInput}  onChange={e => setEmail(e.target.value)} id='email'  onKeyPress={(e) => handleKeyPress(e, 'message')} value={email}/>
                        </div>
                        <div className={classes.messageDiv}>
                            Write a message
                            <textarea className={classes.message} onChange={e => setMessage(e.target.value)} id='message'  onKeyPress={(e) => handleKeyPress(e, 'submit')} value={message} />
                        </div>
                        <div className={classes.submitDiv}>
                            <button className={classes.submit} onClick={e=>submit(e)} id='submit'>Submit</button>
                        </div>
                    </div>
                    <div className={classes.subFormFooter}>
                        <span className={classes.subFormFooterHeader}>
                            Media Contact
                        </span>
                        <span className={classes.subFormFooterText}>
                        Riley Leeson <Image src="/assets/images/coutry_flag.png" />
                        </span>
                        <span className={classes.subFormFooterText}>
                        pr@planetofcyborgs.com
                        </span>
                        <span className={classes.subFormFooterText}>
                        +1 (587) 585-1874
                        </span>

                    </div>
                </Grid>
                
                <Grid
                    item
                    container
                    // alignItems="center"
                    justify="flex-end"
                    xs={12}
                    md={7}
                    data-aos="fade-in"
                    data-aos-delay="100"
                    data-aos-duration="1200">
                    <SectionHeader
                        title={
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div className={classes.title}>
                                    FAQ
                                </div>                                
                                <div className={classes.content}
                                data-aos="fade-in"
                                data-aos-delay="100"
                                data-aos-duration="1200">
                                    <span className={classes.header}>
                                    {isExp1?
                                        <AiIcons.AiOutlineMinusCircle  style={{margin: '0 10px -4px 0'}} onClick={e=>expandHandle(e, 1)}/>
                                    :
                                        <AiIcons.AiOutlinePlusCircle  style={{margin: '0 10px -4px 0'}} onClick={e=>expandHandle(e, 1)}/>
                                    }
                                        What is <font style={{fontStyle: 'italic'}}>Planet of Cyborgs</font>?
                                    </span>
                                    {isExp1&&
                                        <div className={classes.body} data-aos={'fade-in'} data-aos-duration="700">
                                            <font style={{fontStyle: 'italic'}}>Planet of Cyborgs</font> is an exclusive NFT project featuring 3,022 unique hyperrealistic Cyborgs that have a combined mixture of rare and authentic art, backed by a special perks for holders. We are creating an unmatched community where holders have the opportunity to not only meet up in person, but also in the Metaverse where they have the potential to earn additional crypto assets!
                                        </div>
                                    }
                                </div>
                                <div className={classes.content}
                                    data-aos="fade-in"
                                    data-aos-delay="200"
                                    data-aos-duration="1200">
                                    <span className={classes.header}>
                                        {isExp2?
                                            <AiIcons.AiOutlineMinusCircle  style={{margin: '0 10px -4px 0'}} onClick={e=>expandHandle(e, 2)}/>
                                        :
                                            <AiIcons.AiOutlinePlusCircle  style={{margin: '0 10px -4px 0'}} onClick={e=>expandHandle(e, 2)}/>
                                        }
                                        When is the release date?
                                    </span>
                                    {isExp2&&
                                        <div className={classes.body} data-aos={'fade-in'} data-aos-duration="700">
                                            <font style={{fontStyle: 'italic'}}>Planet of Cyborgs</font>Collection will officially release to the public on November 10th. Pre Sale begins November 8th. For more information join our Discord!
                                        </div>
                                    }
                                </div>
                                <div className={classes.content}
                                    data-aos="fade-in"
                                    data-aos-delay="300"
                                    data-aos-duration="1200">
                                    <span className={classes.header}>
                                        {isExp3?
                                            <AiIcons.AiOutlineMinusCircle  style={{margin: '0 10px -4px 0'}} onClick={e=>expandHandle(e, 3)}/>
                                        :
                                            <AiIcons.AiOutlinePlusCircle  style={{margin: '0 10px -4px 0'}} onClick={e=>expandHandle(e, 3)}/>
                                        }
                                        Where can I buy a Cyborg?
                                    </span>
                                    {isExp3&&
                                        <div className={classes.body} data-aos={'fade-in'} data-aos-duration="700">
                                            Minting will be available through our official website and smart contract address only. (Official smart contract will be provided by our team on launch day in our Discord!) On minting day, you will be able to purchase a Cyborg at a cost of 0.08 ETH. This can change depending on the price of ETH during launch. Once minting is over, you’ll be able to showcase on your OpenSea account.
                                        </div>
                                    }
                                </div>
                                <div className={classes.content}
                                    data-aos="fade-in"
                                    data-aos-delay="400"
                                    data-aos-duration="1200">
                                    <span className={classes.header}>
                                        {isExp4?
                                            <AiIcons.AiOutlineMinusCircle  style={{margin: '0 10px -4px 0'}} onClick={e=>expandHandle(e, 4)}/>
                                        :
                                            <AiIcons.AiOutlinePlusCircle  style={{margin: '0 10px -4px 0'}} onClick={e=>expandHandle(e, 4)}/>
                                        }
                                        What makes us different?
                                    </span>
                                    {isExp4&&
                                        <div className={classes.body} data-aos={'fade-in'} data-aos-duration="700">
                                            We’ve worked with some of the best artists and developers for over the last 2 months to create unique and authentic pieces of art. What makes this project really unique and special is the utility behind it! Be sure to check out our roadmap.
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                        
                        align={isMd ? "left" : 'center'}
                        disableGutter
                        titleVariant="h4"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

FaqSec.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default FaqSec;
