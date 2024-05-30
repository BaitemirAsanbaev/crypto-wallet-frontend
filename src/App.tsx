import {Sidebar} from "./components/Sidebar/Sidebar.tsx";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {HomePage} from "./pages/home-page.tsx";
import {ProfilePage} from "./pages/profile-page.tsx";
import {NotFoundPage} from "./pages/not-found-page.tsx";
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {WalletView} from "./components/WalletView/WalletView.tsx";

export const App = () => {

    return <div className='App'>
        <Layout hasSider className='cont'>
            <Sider className='sider' width='320px' breakpoint='md' collapsedWidth={'60px'}>
                <Sidebar/>
            </Sider>
            <Layout className='not-sider'>
                <Header className='header'><WalletView/></Header>
                <Content className='content'>
                    <Routes>
                        <Route index path={'/'} element={<HomePage/>}/>
                        <Route path={'/profile'} element={<ProfilePage/>}/>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                    </Routes>
                </Content>
            </Layout>
        </Layout>

    </div>
}