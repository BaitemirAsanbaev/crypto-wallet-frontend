import {IUser} from "./user.ts";
import {IWallet} from "./wallet.ts";

export interface AuthResponse{
    token:string
    user:IUser
    wallet:IWallet
}