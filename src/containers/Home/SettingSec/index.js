import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import styled from 'styled-components'
import { useSnackbar } from 'notistack';
import { Radio } from "antd";
import "antd/dist/antd.css";
import {AppContext} from '../../../contexts';
import {ADMIN_ADDRESS, WITHDRAW_ADDRESS} from '../../../config';
import {initSettingData, setSale, setReveal, setBaseURL, setUnRevealURL, setPublicRevealURL, setAllRevealURL, setWhitelist, setRafflelist, withDraw} from '../../../services/mint'

const useStyles = makeStyles(theme => ({
    root: {
        width: '95%',
        margin: 'auto',
        maxWidth: 1500,
        color: '#8ACBDE',
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
        width: '100%',
        textAlign: 'center',
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
    shortDiv: {
        width: '100%',
        margin: '20px 0 0 0',
        fontSize: '14px',
        justify: 'space-between',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            width: '50%',
            margin: '20px 0 0 0'
        }
    },
    InputTag: {
        color: '#fff',
        background: 'transparent',
        border: 0,
        borderBottom: '1px solid #52A6BF',
        fontSize: '13px',
        width: '100%',
        margin: '10px 0 0 0',
        "&:focus, &:hover": {
            outline: 'none'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
            margin: '5px 0 0 0',
        }
    },
    longDiv: {
        width: '100%',
        margin: '20px 0 0 0',
        fontSize: '14px',
        justify: 'space-between',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            margin: '20px 0 0 0'
        }
    },
    description: {
        width: '100%',
        margin: '20px 0 0 0',
        fontSize: '14px',
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            margin: '20px 0 0 0'
        }
    },
    send: {
        background: 'rgb(138,203,222)',
        color: 'rgb(66,117,133)',
        fontWeight: 400,
        borderRadius: '20px',
        border: 0,
        width: '100px',
        height: '35px',
        cursor: 'pointer',
        fontSize: 14,
        fontFamily: 'Play,sans-serif',
        "&:hover": {
            background: 'rgb(173 230 247)'
        },

        [theme.breakpoints.up('lg')]: {
            fontSize: 18
        }
    },
    withdrawDiv: {
        textAlign: 'center',
        marginTop: '50px',
        paddingBottom: '50px',
        borderBottom: '2px solid #8ABCDE'
    },
    withdraw: {
        background: 'rgb(138,203,222)',
        color: 'rgb(66,117,133)',
        fontWeight: 600,
        borderRadius: '20px',
        border: 0,
        width: '200px',
        height: '50px',
        cursor: 'pointer',
        fontSize: 16,
        fontFamily: 'Play,sans-serif',
        "&:hover": {
            background: 'rgb(173 230 247)'
        },

        [theme.breakpoints.up('lg')]: {
            fontSize: 25
        }
    }
}));

const saleState = [
    { id: 1, value: "locked" },
    { id: 2, value: "presale" },
    { id: 3, value: "public" },
    { id: 4, value: "private" }
  ];
const revealState = [
    { id: 1, value: "locked" },
    { id: 2, value: "public" },
    { id: 3, value: "all" }
  ];

const SettingSec = props => {
    const { className, ...rest } = props;
    const classes = useStyles();
    const theme = useTheme();
    const {web3, address, showMsg} = useContext(AppContext);
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    const [checkedSale,setCheckedSale] = useState(1);
    const [checkedReveal,setCheckedReveal] = useState(1);
    const [baseURI, setBaseURI] = useState('')
    const [unRevealURI, setUnRevealURI] = useState('')
    const [publicRevealURI, setPublicRevealURI] = useState('')
    const [allRevealURI, setAllRevealURI] = useState('');
    const [whiteList, setWhiteList] = useState('');
    const [raffleList, setRaffleList] = useState('');

    useEffect(() => {
        if(address == '' || web3 == undefined) return;
        console.log('test-----------------------------')
        const init = async () => {
            const initData = await initSettingData(web3);  
            console.log('##################')
            console.log(initData)         
            for (let key in saleState) {
                console.log('--------------------')
                console.log(key)
                if(saleState[key].value == initData.sale){
                    console.log('+++++++++++++++++++++')
                    console.log(saleState[key].value)
                    console.log(initData.sale)
                    setCheckedSale(saleState[key].id);
                    break;
                }
            }
            for (let key in revealState) {
                if(revealState[key].value == initData.reveal){
                    setCheckedReveal(revealState[key].id);
                    break;
                }
            }
        }
        init();
    },[])

    const saleChecked = async (e, id) => {
        e.preventDefault();
        setCheckedSale(id);
        for (let key in saleState) {
            if(saleState[key].id == id){
                let isSetSale = await setSale(web3, address, saleState[key].value);
                if(isSetSale) {
                    showMsg("Sale State has been changed", 'success');
                } else {
                    showMsg("To Change Sale State failed", 'error');
                }
                break;
            }
        }
    }

    const revealChecked = async (e, id) => {
        e.preventDefault();
        setCheckedReveal(id);
        for (let key in revealState) {
            if(revealState[key].id == id){
                let isSetReveal = await setReveal(web3, address, revealState[key].value);
                if(isSetReveal) {
                    showMsg("Reveal State has been changed", 'success');
                } else {
                    showMsg("To Change Reveal State failed", 'error');
                }
                break;
            }
        }
    }
       
    const send = async (e, val) => {
        if(val == 'base') {
            if(baseURI == ''){
                showMsg("IPFS base url Field is empty.", "error")
                return;
            } 
            let isSend = await setBaseURL(web3, address, baseURI);
            if(isSend) {
                showMsg("IPFS base url has been saved.", 'succed')
            } else {
                showMsg("IPFS base url save failed.", "error")
            }
        } else if(val =='unreveal') {
            if(unRevealURI == '') {
                showMsg("UnReveal url Field is empty.", "error")
                return;
            } 
            let isSend = await setUnRevealURL(web3, address, JSON.parse(unRevealURI));
            if(isSend) {
                showMsg("UnReveal url has been saved.", 'succed')
            } else {
                showMsg("UnReveal url save failed.", "error")
            }
        } else if(val=='public') {
            if(publicRevealURI == '') {
                showMsg("Public Reveal url Field is empty.", "error")
                return;
            } 
            let isSend = await setPublicRevealURL(web3, address, JSON.parse(publicRevealURI));
            if(isSend) {
                showMsg("Public Reveal url has been saved.", 'succed')
            } else {
                showMsg("Public Reveal url save failed.", "error")
            }
        } else if(val == 'all') {
            if(allRevealURI == '') {
                showMsg("Reveal url Field is empty.", "error")
                return;
            } 
            let isSend = await setAllRevealURL(web3, address, JSON.parse(allRevealURI));
            if(isSend) {
                showMsg("Reveal url has been saved.", 'succed')
            } else {
                showMsg("Reveal url save failed.", "error")
            }
        } else if(val == 'whitelist') {
            if(whiteList == '') {
                showMsg("Whitelist Field is empty.", "error")
                return;
            } 
            let isSend = await setWhitelist(web3, address, JSON.parse(whiteList));
            if(isSend) {
                showMsg("Whitelist has been saved.", 'succed')
            } else {
                showMsg("Whitelist save failed.", "error")
            }
        } else if(val == 'rafflelist') {
            if(raffleList == '') {
                showMsg("Raffle List Field is empty.", "error")
                return;
            } 
            let isSend = await setRafflelist(web3, address, JSON.parse(raffleList));
            if(isSend) {
                showMsg("Raffle List has been saved.", 'succed')
            } else {
                showMsg("Raffle List save failed.", "error")
            }
        }
    }

    const withdraw = async (e) => {
        let isWithdraw = await withDraw(web3, address);
        if(isWithdraw) {
            showMsg("Withdraw succeed!", 'success');
        } else {
            showMsg("Withdraw failed", 'error');
        }
    }

    const handleKeyPress = (e, target) => {
        if(e.key === 'Enter'){
            document.getElementById(target).focus();           
        }
    }
    
    return (
        <div className={clsx(classes.root, className)} {...rest}>       
            <div className={classes.title}>
                Settings
            </div>  
            {address == ADMIN_ADDRESS&& 
                <div>     
                    <S.Control>
                        <S.Title>Setting NFT Sale</S.Title>
                        <S.Content>
                            <S.SaleDiv>
                                <S.SubTitle>Sale Date</S.SubTitle>
                                <S.SubContent>
                                    {saleState.map(({value, id}) => {
                                        return (
                                            <div key={id} style={{width: '100%'}}>
                                                <S.Radio onChange={(e)=>saleChecked(e, id)} checked={id==checkedSale}>
                                                    {value}
                                                </S.Radio>
                                            </div>
                                        );
                                    })}
                                </S.SubContent>
                            </S.SaleDiv>
                            <S.RevealDiv>
                                <S.SubTitle>Reveal Date</S.SubTitle>
                                <S.SubContent>
                                    {revealState.map(({value, id}) => {
                                        return (
                                            <div key={id} style={{width: '100%'}}>
                                                <S.Radio onChange={(e)=>revealChecked(e, id)} checked={id===checkedReveal}>
                                                    {value}
                                                </S.Radio>
                                            </div>
                                        );
                                    })}
                                </S.SubContent>
                            </S.RevealDiv>
                        </S.Content>
                    </S.Control>
                    <S.InitializeDiv>
                    <S.Title>Basic Data Initialize</S.Title>
                    <div className={classes.description}>IPFS Base URL</div>
                    <div className={classes.shortDiv}>
                        <input type="text" className={classes.InputTag} onChange={e => setBaseURI(e.target.value)} id='base'  onKeyPress={(e) => handleKeyPress(e, 'unreveal')} value={baseURI}/>
                        <button className={classes.send} onClick={e=>send(e, 'base')} >Send</button>
                    </div>
                    <div className={classes.description}>UnReveal URI</div>
                    <div className={classes.longDiv}>                    
                        <input type="text" className={classes.InputTag}  onChange={e => setUnRevealURI(e.target.value)} id='unreveal'  onKeyPress={(e) => handleKeyPress(e, 'public')} value={unRevealURI}/>
                        <button className={classes.send} onClick={e=>send(e, 'unreveal')} >Send</button>
                    </div>
                    <div className={classes.description}>Public Reveal URI</div>
                    <div className={classes.longDiv}>
                        <input type="text" className={classes.InputTag}  onChange={e => setPublicRevealURI(e.target.value)} id='public'  onKeyPress={(e) => handleKeyPress(e, 'all')} value={publicRevealURI}/>
                        <button className={classes.send} onClick={e=>send(e, 'public')} >Send</button>
                    </div>
                    <div className={classes.description}>All Reveal URI</div>
                    <div className={classes.longDiv}>
                        <input type="text" className={classes.InputTag}  onChange={e => setAllRevealURI(e.target.value)} id='all'  onKeyPress={(e) => handleKeyPress(e, 'whitelist')} value={allRevealURI}/>
                        <button className={classes.send} onClick={e=>send(e, 'all')} >Send</button>
                    </div>
                    <div className={classes.description}>WhiteList</div>
                    <div className={classes.longDiv}>
                        <input type="text" className={classes.InputTag}  onChange={e => setWhiteList(e.target.value)} id='whitelist'  onKeyPress={(e) => handleKeyPress(e, 'rafflelist')} value={whiteList}/>
                        <button className={classes.send} onClick={e=>send(e, 'whitelist')} >Send</button>
                    </div>
                    <div className={classes.description}>Raffle List</div>
                    <div className={classes.longDiv}>                    
                        <input type="text" className={classes.InputTag}  onChange={e => setRaffleList(e.target.value)} id='rafflelist'  onKeyPress={(e) => handleKeyPress(e, 'withdraw')} value={raffleList}/>
                        <button className={classes.send} onClick={e=>send(e, 'rafflelist')} >Send</button>
                    </div>
                </S.InitializeDiv>
                </div>
            }
            {address==WITHDRAW_ADDRESS&&
                <div className={classes.withdrawDiv}>
                    <button className={classes.withdraw} onClick={e=>withdraw(e)} id='withdraw'>WithDraw</button>
                </div>
            }
        </div>
    );
};

SettingSec.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default SettingSec;

const S = {
    InitializeDiv: styled.div `
        margin-top: 50px;
    `,
    Control: styled.div`
        border: 1px solid #8ABCDE;
        width: 100%;
        margin: auto;
        border-radius: 10px;
        padding: 5px;
        color: #8ACBDE;
        @media (min-width: 800px) {            
            width: 100%;
            padding: 20px;
        }
        @media (min-width: 1280px) {            
            width: 80%;
            padding: 20px;
        }
    `,
    Content: styled.div`
        margin-top: 10px;
        @media (min-width: 800px) {            
            justify-content: center;
            display: flex;
            gap: 2%;
        }        
        @media (min-width: 920px) {            
            gap: 4%;
        }
        @media (min-width: 1050px) {            
            gap: 8%;
        }
    `,
    SaleDiv: styled.div `
        text-align: center;
        width: 100%;
        border: 1px solid #8ABCDE;
        border-radius: 10px;
        @media (min-width: 800px) {            
            width: 48%;
        }
        @media (min-width: 920px) {            
            width: 45%;
        }
        @media (min-width: 1050px) {            
            width: 40%;
        }
    `,
    SubContent: styled.div `
        display: flex;
        padding: 5px 5px 20px;
    `,
    SubTitle: styled.div `
        width: 100%;
        margin-top: 10px;
        text-align: center;
        font-size: 18px;
        @media (min-width: 800px) {            
            font-size: 22px;
        }
    `,
    RevealDiv: styled.div `
        text-align: center;
        width: 100%;
        border: 1px solid #8ABCDE;
        border-radius: 10px;
        margin-top: 5px;
        @media (min-width: 800px) {      
            margin-top: 0px;      
            width: 48%;
        }
        @media (min-width: 920px) {  
            width: 45%;
        }
        @media (min-width: 1050px) {            
            width: 40%;
        }
    `,
    Title: styled.div `
        width: 100%;
        text-align: center;
        font-size: 22px;
        @media (min-width: 800px) {            
            font-size: 30px;
        }
    `,
    Radio: styled(Radio)`
        color: #8ACBDE !important;
        line-height: 2 !important;
        font-size: 15px !important;
        @media (min-width: 800px) {            
            font-size: 16px !important;
        }
        @media (min-width: 1000px) {            
            font-size: 18px !important;
        }
    `
}
