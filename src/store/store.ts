import { configureStore } from '@reduxjs/toolkit';
import {authApi} from "./auth/auth.api.ts";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authReducer} from './auth/auth.slice.ts'
import {userReducer} from "./user/user.slice.ts";
import {walletReducer} from "./wallet/wallet.slice.ts";
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]:authApi.reducer,
        auth:authReducer,
        user:userReducer,
        wallet:walletReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
