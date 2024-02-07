import { useState } from 'react'
import SatButton from "./SatButton";

const response = await fetch(import.meta.env.PUBLIC_JSON);

const resData = await response.json();

export default function Satellite() {

    const data = resData.destinations;
    const [satellite, setSatellite] = useState(data[0]);    
    
    return (
        <section className="h-full flex flex-col text-center items-center gap-8 md:gap-12 md:pb-8 lg:text-left">
            <h1 className="text-center font-barlow-condensed tracking-2.7px w-full md:text-xl md:text-left 
                           lg:text-subtitle-desktop lg:pl-28 lg:my-8 ">
                <span className="text-gray-700 font-semibold tracking-2.7px mr-2">01</span> PICK YOUR DESTINATION
            </h1>     

            <div className="flex flex-col gap-8 items-center md:gap-12 lg:flex-row lg:gap-40 lg:justify-between">
                <img src = { satellite.images.png } alt="Moon" className="size-satellite-mobile md:size-satellite-tablet lg:size-satellite-desktop" />
                <div className="flex flex-col gap-8 lg:gap-10">
                    <div className="flex justify-center gap-6 lg:justify-start">
                        {
                            data.map( (sat) => (                       
                                <SatButton
                                    key={sat.name.toLowerCase()} 
                                    title={sat.name.toUpperCase()} 
                                    setEvent={ () => setSatellite(sat) } 
                                />                                      
                            ))
                        }
                    </div>
                    <h2 className="font-bellefair text-title-mobile uppercase -mt-2 -mb-10 md:text-title-mobile lg:text-title-sat-desktop">{satellite.name}</h2>
                    <p className="font-barlow text-lightblue tracking-wider leading-paragraph-mobile text-paragraph-mobile
                                md:text-base md:leading-paragraph-tablet md:max-w-paragraph-des-tablet 
                                lg:max-w-paragraph-desktop lg:text-lg lg:leading-paragraph-desktop">
                        { satellite.description }
                    </p>
                    <span className="block w-full h-2px bg-gray-500/40 md:max-w-paragraph-des-tablet"></span>
                    <div className="w-full flex flex-col gap-6 md:flex-row md:justify-center md:gap-16 lg:justify-start">
                        <div className="flex flex-col items-center gap-2 lg:items-start">
                            <span className="font-barlow text-tab-mobile text-lightblue tracking-tab-mobile">AVG. DISTANCE</span>
                            <span className="font-bellefair text-menu-desktop">{ satellite.distance.toUpperCase() }</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 lg:items-start">
                            <span className="font-barlow text-tab-mobile text-lightblue tracking-tab-mobile">EST. TRAVEL TIME</span>
                            <span className="font-bellefair text-menu-desktop">{ satellite.travel.toUpperCase() }</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};