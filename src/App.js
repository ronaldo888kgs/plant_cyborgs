
import 'typeface-roboto';
import React, { useState, useEffect, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import { SnackbarProvider } from 'notistack';
import pMinDelay from 'p-min-delay';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';
import ClimbLoading from 'components/ClimbLoading'
import Web3Modal from 'web3modal'
import Web3 from "web3";
import Message from 'components/Message'
// import WalletConnect from "@walletconnect/web3-provider";
// import WalletLink from "walletlink";
import { nftMint } from 'services/mint';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));

const useStyles = makeStyles(() => ({
  primaryTextColor: {
    color: '#fff'
  }
}));

const App = () => {
  const classes = useStyles();  
  const [web3, setWeb3] = useState()
  const [provider, setProvider] = useState()
  const [connected, setConnected] = useState()
  const [address, setAddress] = useState('')
  const [chain_id, setChainId] = useState()
  const [message, setMessage] = useState('')
  const [msgType, setMsgType] = useState('')
  const [loadingStatus, setLoadingStatus] = useState(false);

  const initWeb3 = (_provider) => {
    const _web3 = new Web3(_provider);
  
    _web3.eth.extend({
      methods: [
        {
          name: "chainId",
          call: "eth_chainId",
          outputFormatter: _web3.utils.hexToNumber
        }
      ]
    });
  
    return _web3;
  }

  const getProviderOptions = () => {
    const infuraId = 'b87b96a22d544319809fa30f8405f44d'//process.env.REACT_APP_INFURA_ID;
    const providerOptions = {
      // walletconnect: {
      //   package: WalletConnect,
      //   options: {
      //     infuraId
      //   }
      // },
      // walletlink: {
      //   package: WalletLink,
      //   options: {
      //     appName: "Web3Modal Example App",
      //     infuraId
      //   }
      // }
    };
    return providerOptions;
  };

  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: getProviderOptions()
  });

  useEffect(()=>{
    if (web3Modal.cachedProvider) {
      onConnect();
    }
  },[])

  const onConnect = async () => {
    if(web3Modal.userOptions.length == 0) {      
      showMsg('Please install Metamask', 'error')
      window.open('https://metamask.io/download', '_blank');
      return;
    }
    try{      
      const _provider = await web3Modal.connect();
      

      await subscribeProvider(_provider);

      await _provider.enable();
      const _web3 = initWeb3(_provider);

      const accounts = await _web3.eth.getAccounts();

      const address = accounts[0];

      // const networkId = await _web3.eth.net.getId();

      const _chainId = await _web3.eth.chainId();
      setWeb3(_web3)
      setAddress(address)
      setChainId(_chainId)
      setConnected(true)
      setProvider(_provider)

    } catch(e) {
      console.log('rejected error')
    }
  };

  const subscribeProvider = async (_provider) => {
    if (!_provider.on) {
      return;
    }
    _provider.on("close", () => resetApp());
    _provider.on("accountsChanged", async (accounts) => {
      if(accounts[0] == undefined) {
        resetApp()
      } else {
        setAddress(accounts[0])
      }      
    });
    _provider.on("chainChanged", async (chainId) => {
      setChainId(chainId)
    });

    _provider.on("networkChanged", async (chainId) => {
      setChainId(chainId)
    });

    _provider.on("connect", async () => {
      alert(1)
    });

    _provider.on("disconnect", async () => {
      alert(2)
    });
  };

  useEffect(()=>{
    if(!provider) return;
    subscribeProvider(provider)
  },[provider])

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();

    setWeb3('')
    setAddress('')
    setChainId('')
    setConnected(false)
    setProvider('')
  };
  
 const showMsg = (msg, type) => {
   setMessage(msg);
   setMsgType(type);
 }

  return (
    <AppContext.Provider
      value={{
        address,
        web3,
        onConnect,
        connected,
        loadingStatus,
        setLoadingStatus,
        showMsg
      }}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          classes={{
            variantSuccess: classes.primaryTextColor,
            variantError: classes.primaryTextColor,
            variantWarning: classes.primaryTextColor,
            variantInfo: classes.primaryTextColor
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          maxSnack={3}>
          <Suspense fallback={<ClimbLoading wholeOverlay />}>
            <Layout>
              <Switch>
                <Route exact path={PAGES.HOME.url} component={Home} />
              </Switch>
              <Message message={message} type={msgType} />
            </Layout>
          </Suspense>
        </SnackbarProvider>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default withRouter(App);