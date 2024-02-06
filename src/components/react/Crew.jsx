import { useState } from "react";
import CrewTab from "./CrewTab";

const response = await fetch("http://192.168.1.48:4321/data.json");
const resData = await response.json();

export default function Crew() {

    const data  = resData.crew;
    const [ astronaut, setAstronaut ] = useState(data[0]);

    return(

        <section className="flex-grow flex flex-col items-center gap-8 lg:flex-row lg:px-124px">
            <div className="w-full self-start text-center flex flex-col gap-10 justify-center items-center 
                            lg:items-start lg:gap-8">
                    <h1 className="font-barlow-condensed tracking-2.7px w-full 
                                md:text-xl md:text-left
                                lg:text-subtitle-desktop">
                        <span className="text-gray-500 font-semibold tracking-2.7px mr-2">02</span> MEET YOUR CREW
                    </h1>
                    <div className="w-full border-b border-b-divider md:hidden">
                        <img src={ astronaut.images.png } alt={ astronaut.name + " - " +astronaut.role } className="mx-auto max-h-crew-mobile" />
                    </div>
                    <div className="flex gap-4 justify-center md:hidden">
                        {
                            data.map( astronaut =>  (
                                <CrewTab
                                    key = { astronaut.id}
                                    setEvent = { () => setAstronaut(astronaut) }
                                />                     
                            ))
                        }
                    </div>
                    <span className="font-bellefair text-white/50 -mb-6 md:text-2xl md:mt-6 lg:text-[32px] lg:mt-32">{astronaut.role.toUpperCase()}</span>
                    <h2 className="text-balance font-bellefair text-2xl md:text-[40px] md:mt-1 lg:text-[56px] lg:leading-normal lg:text-left">{astronaut.name.toUpperCase()}</h2>
                    <p className="font-barlow text-lightblue text-pretty text-lg max-w-paragraph-mobile 
                                  md:max-w-[458px] md:leading-paragraph-tablet 
                                  lg:text-left lg:leading-paragraph-desktop lg:max-w-[444px] lg:mb-12">
                        {astronaut.bio}
                    </p>
                    
                    <div className="hidden md:block">                
                        <div className="flex gap-4 justify-center lg:gap-8">
                            {
                                data.map( astronaut =>  (
                                    <CrewTab
                                    key = { astronaut.id}
                                    setEvent = { () => setAstronaut(astronaut) }
                                    />                     
                                    ))
                                }
                        </div>
                    </div>
                </div>
                <img src={ astronaut.images.png } alt={ astronaut.name + " - " +astronaut.role } 
                className="max-h-crew-tablet hidden md:block lg:max-h-crew-desktop lg:self-end" />
        </section>
    );

}