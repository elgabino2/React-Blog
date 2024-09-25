import React from "react";
import computer from "./computer.jpg"

function Blog(props:any){
    return(
        <>
        <article className=" w-[90%] h-[19rem] flex justify-between mx-[1.5rem] my-[3rem] border-[1.5px] shadow-xl">
            <div className="w-[40%] h-[18.5rem] flex justify-center items-center">
                <img src={props.img} alt="" className="h-[17rem] w-[92%] "/>
            </div>
            <div className="w-[58%]">
                <div className="w-[85%] h-[6rem]   my-[0.1rem] flex flex-row">
                    <a href="#" className="text-[2rem] font-bold">{props.title}</a>
                </div>
                <div className="w-full h-[2rem]   flex flex-row items-center ">
                    <span className="font-semibold">Zongo</span> <span className="mx-[2rem] text-gray-500">25/09/2024</span>
                </div>
                <div className="w-[83%] h-[6rem]  flex flex-row ">
                    <p className="text-[1.29rem] text-gray-500 font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eos dicta dolorum sequi blanditiis assumenda cum dolore culpa incidunt vitae nemo quam harum recusandae labore nesciunt aperiam, molestiae aspernatur soluta?</p>
                </div>
            </div>
        </article>
        </>
    );
}

export default Blog