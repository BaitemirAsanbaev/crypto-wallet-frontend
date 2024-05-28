import {Sidebar} from "./components/Sidebar.tsx";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {HomePage} from "./pages/home-page.tsx";
import {ProfilePage} from "./pages/profile-page.tsx";
import {NotFoundPage} from "./pages/not-found-page.tsx";

export const App = () => {
    return <>
        <Sidebar/>
        <Routes>
            <Route index path={'/'} element={<HomePage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    </>
}