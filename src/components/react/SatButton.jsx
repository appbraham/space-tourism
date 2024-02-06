
export default function SatButton({title, setEvent}) {

    return (

        <button 
                onClick={ () => setEvent() } 
                className="relative font-barlow-condensed text-lightblue text-tab-mobile tracking-tab-mobile
                after:absolute after:w-9 after:h-1 after:rounded-full after:scale-0 after:origin-right after:duration-300 
                after:ease-in after:transition-transform after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:bg-gray-500
                hover:after:scale-100 hover:after:origin-left active:after:bg-white focus:after:bg-white
                md:text-base md:tracking-2.7px">
                {title}
        </button>

    );
};