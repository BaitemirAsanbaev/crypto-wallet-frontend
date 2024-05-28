import {IWallet} from "./wallet.ts";

export interface IUser {
    id: number
    email: string
    firstname: string
    lastname: string
    avatar: string
    password: string
    createdAt: string
    updatedAt: string
}