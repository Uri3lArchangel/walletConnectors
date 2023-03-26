import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

// This is a chainID to rpcURL map, enter the chainID and appropriate url
/*
ex.
56: 'http://bsc.infura.io/aoj3ojooeoejeojefrfr'

note this is just an example this is an invalid url
*/
const INFURA_NETWORK_URLS = {
  1: `https://mainnet.infura.io/v3/011b1e17991746548b8fc0eac345158e`,
  137: `https://polygon-mainnet.infura.io/v3/011b1e17991746548b8fc0eac345158e`,
};

// This is for the walletconnect function these are the settings used from the walletconnect this can also be modified
const options = {
  rpc: INFURA_NETWORK_URLS,
  qrcode: true,
};





export let isConnected = false;
let web3;

export const metamask = async () => {
  if (typeof window.ethereum) {
    try {
      await window.ethereum.enable();
      web3 = new Web3(window.ethereum);
      isConnected = true;
    } catch (error) {
      console.error(error);
    }
  }
};

// WalletConnect function 

export const walletconnect = async () => {
  try {
    let provider = new WalletConnectProvider(options);
    await provider.enable();
    web3 = new Web3(provider);
    console.log(web3);
    isConnected = true;
    
  } catch (error) {
    console.error(error)
  }


};

//coinbase wallet connector function

export const coinbase = new WalletLinkConnector({
  url: ``, // input rpc url here
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
 });

 
/*NOTE: ALL THESE ARE CONNECT FUNCTIONS AS WANTED REMEMBER TO PROVIDE DISCONNECT FUNCTIONS USING EVENT LISTNERS ON THE FRONTEND*/