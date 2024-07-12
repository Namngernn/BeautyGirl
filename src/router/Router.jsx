import React from 'react';
import {createBrowserRouter} from "react-router-dom";

import Navbar from "../components/Navbar"
import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Notifications from "../pages/Notifications/Notifications";
import Post from "../pages/Post/Post";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Search from "../pages/Search/Search";
import Settings from "../pages/Settings/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        children:[
            {
                path: "/Main",
                element: <Main/>        
            },
            {
                path: "/Home",
                element: <Home/>        
            },
            {
                path: "/Login",
                element: <Login/>        
            },
            {
                path: "/Notifications",
                element: <Notifications/>        
            },
            {
                path: "/Post",
                element: <Post/>        
            },
            {
                path: "/Profile",
                element: <Profile/>        
            },
            {
                path: "/Register",
                element: <Register/>        
            },
            {
                path: "/Search",
                element: <Search/>        
            },
            {
                path: "/Settings",
                element: <Settings/>        
            }
            
        ]
    }
]);

export default router;