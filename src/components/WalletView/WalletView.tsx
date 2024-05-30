import {useWalletSelector} from "../../hooks/redux.ts";
import classes from './WalletView.module.scss';
// @ts-ignore
import usd from './assets/usd.svg';
// @ts-ignore
import btc from './assets/btc.svg';
// @ts-ignore
import eth from './assets/eth.svg';
// @ts-ignore
import bnb from './assets/bnb.svg';
// @ts-ignore
import doge from './assets/doge.svg';
// @ts-ignore
import dropdown from './assets/dropdown.svg';
import React, {useEffect, useState} from "react";


export const WalletView: React.FC = () => {
    interface ICoin {
        title: string,
        image: string,
        quantity: number
    }

    const wallet = useWalletSelector(state => state.wallet.wallet);
    const [coins, setCoins] = useState<ICoin[]>([
        {title: 'usd', image: usd, quantity: wallet.usd},
        {title: 'btc', image: btc, quantity: wallet.btc},
        {title: 'eth', image: eth, quantity: wallet.eth},
        {title: 'bnb', image: bnb, quantity: wallet.bnb},
        {title: 'doge', image: doge, quantity: wallet.doge}
    ]);

    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth < 1100) {
                setCoins(coins.slice(0, -1));
            }
            if (window.innerWidth < 1000) {
                setCoins(coins.slice(0, -2));
            }
            if (window.innerWidth < 870) {
                setCoins(coins.slice(0, -3));
            }
            if (window.innerWidth < 480) {
                setCoins(coins.slice(0, -4));
            }
            if(window.innerWidth>1100){
                setCoins(coins);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={classes.WalletView}>
            {coins.map((coin) => {
                return <div key={coin.title}><img src={coin.image} alt={coin.title}/>{coin.quantity}</div>
            })}
            {coins.length < 5 && <div className={classes.dropdown}><img src={dropdown} alt='dropdown'/></div>}

        </div>

    )
        ;
}
