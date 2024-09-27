import React from "react";
import Blog from "./Blog";
import Article from "./article";
// import { Link, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';
// import { createBrowserRouter } from "react-router-dom";
// import path from "path";


// const router=createBrowserRouter([{
//     path:'/',
//     element:<Blog/>

// },{
//     path:'/Article',
//     element:<Article/>

// }

// ])



function Header(){
    // return <RouterProvider router={router}/>
    return(
        <>
        <div className="w-[91%] h-[5rem]  flex   ">
            <div className="w-[66%] m-5 flex items-center ">
                <h1 className="text-[2.5rem] font-semibold">MyBlog</h1>
            </div>
            <div className="flex w-[20%] items-center justify-evenly  mx-[4rem]">
                <a href="#" className="text-[1.6rem] text-gray-600">Login</a>
                {/* <Link to={'/S'}>ef</Link> */}
                <a href="#" className="text-[1.6rem] text-gray-600">Register</a>
            </div>
        </div>
        </>
    );
}

export default Header