import {createApi,  fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseUrl} from "../baseUrl.ts";
import {LoginRequest, RegisterRequest} from "../../models/requests.ts";
import {AuthResponse} from "../../models/response.ts";

function toFormData<T>(data: T): FormData {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
            formData.append(key, value);
        } else if (Array.isArray(value)) {
            value.forEach((val, index) => {
                formData.append(`${key}[${index}]`, val);
            });
        } else if (value !== null && value !== undefined) {
            formData.append(key, value as string | Blob);
        }
    });

    return formData;
}

export const authApi = createApi({
    reducerPath:'auth/api',
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl,
    }),
    refetchOnFocus:true,
    endpoints:build =>  ({
        login:build.mutation<AuthResponse, Partial<LoginRequest>>({
            query:(req:LoginRequest)=>({
                url:'/auth/login',
                method:'POST',
                body:req
            })
        }),
        register:build.mutation<AuthResponse, Partial<RegisterRequest>>({
            query:(req:RegisterRequest)=>({

                url:'/auth/register',
                method:'POST',
                body:toFormData(req),

            })
        })
    })
})

export const {useLoginMutation, useRegisterMutation} = authApi