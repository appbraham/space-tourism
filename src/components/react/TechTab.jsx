export default function TechTab({title, setEvent}) {

    return (

        <button
            onClick = { () => setEvent() } 
            className="font-bellefair size-10 border rounded-full hover:text-darky active:text-darky hover:bg-white active:bg-white
                       md:size-[60px] md:text-2xl lg:size-20"
            >{title}
        </button>
    )

}