import React from "react";
import fox from "../fox.jpg"


function Article(props:any){
    return(
        <>
        <div className="h-[8rem] w-[90%]  my-[2rem] mx-[2rem]">
            <h1 className="text-[3rem] font-semibold text-center">{props.title}</h1>
            <p className="text-[1.29rem] text-gray-500 font-serif text-center">The Convention on the Protection and Promotion of the Diversity of Cultural Expressions entered into force on 18 March 2007,  in accordance with its article 29. The objective of the Convention </p>
        </div>
        <div className="h-[30rem] w-[90%] mx-[2rem] my-[11rem] bg-[red] flex justify-center items-center">
            <img src={props.img} alt="" className="h-[40rem] w-[100%]"/>
        </div>
        <div className="h-[10rem] w-[90%] my-[-4rem] mx-[2rem]">
            <h1 className="text-[3rem] font-semibold text-center">Introduction</h1>
            <p className="text-[1.3rem] font-normal text-justify">
            At the initiative of eight Member States, the item “Preliminary study on the technical and legal aspects relating to the desirability of a standard-setting instrument on cultural diversity” was placed on the agenda of the Executive Board of UNESCO in 2002. A group of experts, established by the Director-General of UNESCO, produced a draft text in May 2004. At the invitation of the Executive Board, the Director-General convened meetings of government experts to take forward the preparation of the preliminary draft convention. At the first session of the Intergovernmental Meeting of Experts, a drafting committee was established to prepare a revised text of the preliminary draft convention. At the third and final session of the Intergovernmental Meeting of Experts, in June 2005, a thorough review of all the articles of the preliminary draft convention adopted by the drafting committee was completed. The General Conference of UNESCO thereafter adopted the Convention on the Protection and Promotion of the Diversity of Cultural Expressions on 20 October 2005.
            </p>
        </div>
        </>
    );
}

export default Article