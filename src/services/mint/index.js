import { nftABI } from '../../abis/nfttoken';
import { nftContractAddress } from '../../constants/contractAddresses';

const getSaleState = async (web3) => {
    let ret = 'locked';
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try{
        console.log('isSaleAcive----------------------')
        let saleIsActive = await contractMinter.methods.isSaleActive().call();
        ret = saleIsActive;
        console.log(saleIsActive)
    } catch(e) {
        console.log(e)
    }
    return ret;
}

const isPresaleUser = async(web3, ownerAddress) => {
    let ret = 'nouser';
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try{
        console.log('isPresaleUser============================')
        let presaleType = await contractMinter.methods._isPresaleUser(ownerAddress).call();
        ret = presaleType;
        console.log(ret)
    } catch(e) {

    }
    return ret;
}

const nftMint = async (web3, ownerAddress, amount, price, presaleType) => {
    let ret = {msg:'',type:''};
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try{
        let saleIsActive = await contractMinter.methods.isSaleActive().call();
         
        if(saleIsActive == 'locked') {
            ret.msg = "NFT Sale not started. Please wait.";
            ret.type = "error";
        } else if(saleIsActive == 'presale') {
            if(presaleType == "nouser") {
                ret.msg = "NFT Sale not started. Please wait.";
                ret.type = 'error';
                return ret;
            }
            
            let mintedCount = await contractMinter.methods.salerListPurchases(ownerAddress).call();
            if(amount + mintedCount * 1 > 2) {
                ret.msg = "You can not mint exceeds maximum NFT. Please try again";
                ret.type = 'error';
                return ret;
            }
            
            await contractMinter.methods.presaleBuy(amount)
                .send({ from: ownerAddress, value: (price*amount*1e18).toString() }, (_error, tx) => {
                    if(_error) {
                        ret.msg = "NFT mint failed. Please try again later.";
                        ret.type = 'error';
                    }
                })
        } else if(saleIsActive == 'public') {
            let mintedCount = await contractMinter.methods.salerListPurchases(ownerAddress).call();
            if(amount + mintedCount * 1 > 3) {
                ret.msg = "You can not mint exceeds maximum NFT. Please try again";
                ret.type = 'error';
                return ret;
            }

            await contractMinter.methods.buy(amount)
                .send({ from: ownerAddress, value: (price*amount*1e18).toString() }, (_error, tx) => {
                    if(_error) {
                        ret.msg = "NFT mint failed. Please try again later.";
                        ret.type = 'error';
                    }
                })
        } else if(saleIsActive == 'private') {
            let mintedCount = await contractMinter.methods.privatesalerListPurchases(ownerAddress).call();
            amount = 100;
            if(amount + mintedCount * 1 > 100) {
                ret.msg = "You can not mint exceeds maximum NFT. Please try again";
                ret.type = 'error';
                return ret;
            }
            await contractMinter.methods.privatesaleBuy(amount)
                .send({ from: ownerAddress }, (_error, tx) => {
                    if(_error) {
                        ret.msg = "NFT mint failed. Please try again later.";
                        ret.type = 'error';
                    }
                })            
        }
    }
    catch(e) {
    }

    return ret;
}

const initSettingData = async (web3) => {
    let ret = {sale: '', reveal: ''};
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);

    try {
        console.log('aaa===========================')
        const saleState = await contractMinter.methods.isSaleActive().call();
        const revealState = await contractMinter.methods.revealState().call();
        ret.sale = saleState;
        ret.reveal = revealState;
        console.log(saleState)
        console.log('bbb===========================')
    } catch(e) {

    }
    console.log(ret)
    return ret;
}
const setSale = async (web3, ownerAddress, state) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        console.log('state=============================')
        await contractMinter.methods.toggleSaleStatus(state)
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
const setReveal = async (web3, ownerAddress, state) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        await contractMinter.methods.setReveal(state)
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
const setBaseURL = async (web3, ownerAddress, url) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        await contractMinter.methods.setDefaultBaseURI(url)
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
const setUnRevealURL = async (web3, ownerAddress, cidArr) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        await contractMinter.methods.setBaseURI(cidArr)
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
const setPublicRevealURL = async (web3, ownerAddress, cidArr) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        await contractMinter.methods.setPubBaseURI(cidArr)
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
const setAllRevealURL = async (web3, ownerAddress, cidArr) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        await contractMinter.methods.setRevealURI(cidArr)
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
const setWhitelist = async (web3, ownerAddress, arr) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        await contractMinter.methods.setWhiteList(arr)
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
const setRafflelist = async (web3, ownerAddress, arr) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        await contractMinter.methods.setRaffleList(arr)
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
const withDraw = async (web3, ownerAddress) => {
    let ret = false;
    const contractMinter = new web3.eth.Contract(nftABI, nftContractAddress);
    try {
        await contractMinter.methods.withdraw()
            .send({ from: ownerAddress }, (_error, tx) => {
                if(!_error) {
                    ret = true;
                }
            })
    } catch(e) {
    }
    return ret;
}
export {
    nftMint,
    getSaleState,
    isPresaleUser,
    initSettingData,
    setSale,
    setReveal,
    setBaseURL,
    setUnRevealURL,
    setPublicRevealURL,
    setAllRevealURL,
    setWhitelist,
    setRafflelist,
    withDraw
}
