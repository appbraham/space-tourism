import { useState } from "react";
import TechTab from "./TechTab";

const response = await fetch("http://192.168.1.48:4321/data.json");
const resData = await response.json();

export default function Technology() {

    const data  = resData.technology;
    const [ technology, setTechnology ] = useState(data[0]);

    return (

        <section className="flex-grow flex flex-col gap-8 -mx-6 items-center md:mr-0 md:gap-16 lg:pl-124px">
            <h1 className="w-full font-barlow-condensed text-center tracking-2.7px pl-6 md:text-xl md:text-left lg:text-subtitle-desktop">
                <span className="text-gray-500 font-semibold tracking-2.7px mr-2">03</span> SPACE LAUNCH 101
            </h1>            
            <div className="w-full text-center flex flex-col gap-10 justify-center items-center md:gap-12 lg:gap-12 lg:flex-row lg:justify-between">
               <div className="w-full flex flex-col gap-10 items-center lg:flex-row">
                    <img src={ technology.images.landscape } alt={ technology.name } className="w-full  object-cover lg:hidden" />
                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
                        <div className="flex gap-4 justify-center md:text-2xl md:gap-6 lg:flex-col">
                            {
                                data.map( tech =>  (
                                    <TechTab
                                        key = { tech.id}
                                        title= { tech.id }
                                        setEvent = { () => setTechnology(tech) }
                                    />                     
                                ))
                            }
                        </div>
                        <div className="">
                            <span className="font-barlow-condensed tracking-tab-mobile text-lightblue  md:text-base lg:text-[32px] lg:block lg:text-left">THE TERMINOLOGY...</span>
                            <h2 className="text-balance font-bellefair text-2xl mt-2 mb-4 md:text-[40px] md:mt-4 md:mb-6 lg:text-[56px] lg:leading-normal lg:text-left">{technology.name.toUpperCase()}</h2>
                            <p className="font-barlow text-lightblue text-pretty text-[15px] leading-paragraph-mobile max-w-paragraph-mobile 
                                        md:max-w-[458px] md:leading-paragraph-tablet md:pb-12
                                        lg:text-left lg:text-lg lg:leading-paragraph-desktop lg:max-w-[444px]">
                                {technology.description}
                            </p>
                        </div>
                    </div>
                </div>            
                <img src={ technology.images.portrait } alt={ technology } 
                className="lg:w-[40%] hidden lg:block lg:max-h-crew-desktop" />
            </div>
        </section>
        
    )

}