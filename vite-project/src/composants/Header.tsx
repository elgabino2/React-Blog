import React from "react";


function Header(){
    return(
        <>
        <div className="w-[91%] h-[5rem]  flex  ">
            <div className="w-[66%] m-5 flex items-center ">
                <h1 className="text-[2rem] font-semibold">MyBlog</h1>
            </div>
            <div className="flex w-[20%] items-center justify-evenly  mx-[4rem]">
                <a href="#" className="text-[1.4rem] text-gray-600">Login</a>
                <a href="#" className="text-[1.4rem] text-gray-600">Register</a>
            </div>
        </div>
        </>
    );
}

export default Header