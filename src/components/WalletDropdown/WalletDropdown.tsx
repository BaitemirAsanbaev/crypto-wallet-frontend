import {ICoin} from "../WalletView/WalletView.tsx";
import React from "react";
import classes from './WalletDropdown.module.scss'
interface WalletDropdownProps{
    coins:ICoin[]
}

export const WalletDropdown:React.FC<WalletDropdownProps> = ({coins}) => {
    return <div className={classes.WalletDropdown}>
        {coins.map((coin)=>{
            return <div key={coin.title}><img src={coin.image} alt={coin.title}/>{coin.quantity}</div>
        })}
    </div>
}