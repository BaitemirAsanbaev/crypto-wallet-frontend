import {createSlice} from "@reduxjs/toolkit";
import {IWallet} from "../../models/wallet.ts";

interface WalletState{
    wallet:IWallet
}
const initialState:WalletState = {
    wallet:{
        id: 1,
        usd: 0,
        btc: 0,
        eth: 0,
        bnb: 0,
        doge: 0,
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
