"use client"
import React, { useEffect, useState } from "react";
import { Account, Address, GetAddressesReturnType, Hex, createWalletClient, http, parseEther, publicActions } from "viem";
import WETC from "../abi/WETC.json";
import { sepolia } from "viem/chains";

const walletClient = createWalletClient({
  chain: sepolia,
  transport: http(process.env.API_URL),
})



const Deposit = () => {
  const [account, setAccount] = useState<Address>()
  const WETHAddress = "0x8a7d85bbC5153396357Ee30ba0d2b964022B4DC8";
 

  const connect = async () => {
    const [address] = await walletClient.requestAddresses()
    setAccount(address)
  }

  const sendTransaction = async () => {
    if (!account) return
    await walletClient.sendTransaction({
      account,
      to: '0x0000000000000000000000000000000000000000',
      value: parseEther('0.000001'),
    })
  }


   if (account)
    return (
      <>
        <div>Connected: {account}</div>
        <button onClick={sendTransaction}>Send Transaction</button>
      </>
    )
  return <button onClick={connect}>Connect Wallet</button>
    
};

export default Deposit;
