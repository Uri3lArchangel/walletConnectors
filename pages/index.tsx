import { useWeb3React } from '@web3-react/core';
import React, { useState } from 'react'
import { coinbase, metamask, walletconnect } from '../connector/connectScript'



function index() {
    
  const { activate, deactivate } = useWeb3React();


  return (
    <div>
      <button onClick={metamask}>metamask</button>
      <button onClick={walletconnect}>Wallet Connect</button>
      <button onClick={()=>activate(coinbase)}>coinbase</button>
    </div>
  )
}

export default index
