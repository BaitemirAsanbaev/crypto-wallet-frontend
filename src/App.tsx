import {Sidebar} from "./components/Sidebar/Sidebar.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {HomePage} from "./pages/home-page.tsx";
import {ProfilePage} from "./pages/profile-page.tsx";
import {NotFoundPage} from "./pages/not-found-page.tsx";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {WalletView} from "./components/WalletView/WalletView.tsx";
import {AuthPage} from "./pages/auth-page.tsx";
import {useWalletSelector} from "./hooks/redux.ts";

export const App = () => {

    const {isAuthed, token} = useWalletSelector(state => state.auth)

    return <div className='App'>
        <Layout hasSider className='cont'>

            {isAuthed
                ?
                <>
                    <Sider className='sider' width='320px' breakpoint='md' collapsedWidth={'60px'}>
                        <Sidebar/>
                    </Sider>
                    <Layout className='not-sider'>
                        <div className='header'><WalletView/></div>
                        <Content className='content'>
                            <Routes>
                                <Route index path={'/'} element={<HomePage/>}/>
                                <Route path={'/profile'} element={<ProfilePage/>}/>
                                <Route path={'*'} element={<NotFoundPage/>}/>
                            </Routes>

                        </Content>
                    </Layout>
                </>
                : <Routes>
                    <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                    <Route path={'/:path'} element={<AuthPage/>}/>
                    <Route path={'/:path'} element={<AuthPage/>}/>
                </Routes>
            }
        </Layout>

    </div>
}