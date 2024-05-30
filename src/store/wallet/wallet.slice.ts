import {createSlice} from "@reduxjs/toolkit";
import {IWallet} from "../../models/wallet.ts";

interface WalletState{
    wallet:IWallet
}
const initialState:WalletState = {
    wallet:{
        id: 1,
        usd: 10000,
        btc: 2.43,
        eth: 2.11,
        bnb: 3.55,
        doge: 53.43,
        user_id: 0,
        createdAt: 'string',
        updatedAt: 'string'
    }
}

const walletSlice = createSlice({
    name:'wallet',
    initialState,
    reducers:{
        setWallet:(state, action)=>{
            state.wallet = action.payload
        }
    }
})

export const walletReducer = walletSlice.reducer
export const walletActions = walletSlice.actions
