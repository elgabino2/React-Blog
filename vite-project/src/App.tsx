// import React from "react";
import Header from "./composants/Header"
import Blog from "./composants/Blog";
import computer from "./computer.jpg"
import fox from "./fox.jpg"
import bird from "./bird.jpg"
import Article from "./composants/article";
import Tech from "./Tech.jpg"
import { createBrowserRouter } from "react-router-dom";

const router=createBrowserRouter

function App(){
  return(
    < >
    <div className="h-full w-full flex justify-center">
    <Header />
    <section className="my-[3rem] h-[35rem] w-[95%] bg-[] flex  justify-center  items-center absolute">
      <div className="block  h-[90%] w-[96%] absolute">
        {/* <Article img={fox} title="What is the real impact of the protection of diversity ?"></Article> */}
        {/* <Article img={computer} title="How Tech and Computer Science can change the game in Africa ?"></Article> */}
        {/* <Article img={Tech} title="What is the real impact of tech in the world economy ?"></Article> */}
        <Blog img={computer} title="How Tech and Computer Science can change the game in Africa ?"/>
        <Blog img={fox} title="What is the real impact of the protection of diversity ?"/>
        <Blog img={bird} title="What is the real impact of the protection of diversity ?"/>
        <Blog img={Tech} title="What is the real impact of tech in the world economy ?"/>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
      
    </section></div>
    </>
  );
}

export default App