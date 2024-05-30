import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {App} from "./App.tsx";
import './index.scss'
import {ConfigProvider} from "antd";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ConfigProvider theme={{cssVar: true, token: {colorLink: 'white', colorTextBase: 'white'}}}>
                    <App/>
                </ConfigProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
