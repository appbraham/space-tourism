export default function CrewTab({setEvent}) {

    return (

        <button
            onClick = { () => setEvent() } 
            className="w-3 h-3 bg-tab rounded-full hover:bg-white active:bg-white lg:w-4 lg:h-4">
        </button>
    )

}