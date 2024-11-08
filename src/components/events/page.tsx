import Image from "next/image";
import Link from "next/link"
import Image1 from "../../../public/service-1.jpeg"
import { FaArrowRightLong } from "react-icons/fa6";
import Buttons from "../button/page";

function Events() {
    return (
        <section id="events" className="max-h-full mx-4">
            <h3 className="md:pt-32  text-gray-900 flex md:justify-center 
            text-2xl md:text-4xl font-semibold py-4">
                Upcoming Events
            </h3>

            <div className="hidden mb-12 text-gray-800 md:flex justify-center text-center">
                <Link className="text-lg" href="/">Home</Link>
                <span className="px-4 pt-1 text-2xl">
                    <FaArrowRightLong /> </span>
                <Link className="text-lg" href="#events">Events</Link>
            </div>



            {/* heading */}


            <h3 className=" text-gray-900 flex md:justify-center 
             text-xl md:text-4xl font-semibold md:pt-8 ">
                Checkout our Upcoming Events
            </h3>
            <div className=" text-gray-600 flex md:justify-center md:mx-0 my-4 md:my-4 text-lg pb-4">
                <span>Who are in extremely love with eco friendly system.</span>
            </div>

            {/* events details */}

            {/* first box */}

            <div className="flex flex-col md:flex-row md:justify-around md:items-center md:gap-4 md:mx-32">
                <div className="md:w-1/2">
                    <Image
                        className="w-full h-52 object-cover rounded-md"
                        alt="Event related image"
                        src={Image1}
                        width={1100}
                        height={200}
                    />
                </div>
                <div className="md:w-1/2 py-2">
                    <Link href="#events" className=" text-gray-900 text-lg 
                    font-bold leading-relaxed tracking-wider">
                        Event on the Rock Solid Carbon
                    </Link>
                    <p className=" mt-2 mb-4 leading-relaxed md:tracking-wider text-xs md:text-xl text-gray-400">
                        <span className="text-gray-900">
                            <span className="text-pink-800">
                                21st February</span>
                        </span> at Central Government Museum
                    </p>
                    <p className="pr-4 leading-relaxed text-gray-400">
                        Inappropriate behavior is often laughed off as “boys will be boys,” while women face higher conduct standards.
                    </p>

                    <Buttons
                        text="View Details" colorType=""/>

                </div>
            </div>
            {/* second box */}
            <div className="flex flex-col md:flex-row md:justify-around md:items-center md:gap-4 md:mx-32">
                
                <div className="md:w-1/2 py-2">
                    <Link href="#events" className=" text-gray-900 text-lg 
                    font-bold leading-relaxed tracking-wider">
                        Event on the Rock Solid Carbon
                    </Link>
                    <p className=" mt-2 mb-4 leading-relaxed md:tracking-wider text-xs md:text-xl text-gray-400">
                        <span className="text-gray-900">
                            <span className="text-pink-800">
                                21st February</span>
                        </span> at Central Government Museum
                    </p>
                    <p className=" pr-4 leading-relaxed text-gray-400">
                        Inappropriate behavior is often laughed off as “boys will be boys,” while women face higher conduct standards.
                    </p>

                    <Buttons
                        text="View Details" colorType=""/>

                </div>

                <div className="md:w-1/2">
                    <Image
                        className="w-full h-52 object-cover rounded-md"
                        alt="Event related image"
                        src={Image1}
                        width={1100}
                        height={200}
                    />
                </div>
            </div>
           
            {/* third box */}
            <div className="flex flex-col md:flex-row md:justify-around md:items-center md:gap-4 md:mx-32">
                <div className="md:w-1/2">
                    <Image
                        className="w-full h-52 object-cover rounded-md"
                        alt="Event related image"
                        src={Image1}
                        width={1100}
                        height={200}
                    />
                </div>
                <div className="md:w-1/2 py-2">
                    <Link href="#events" className=" text-gray-900 text-lg 
                    font-bold leading-relaxed tracking-wider">
                        Event on the Rock Solid Carbon
                    </Link>
                    <p className="mt-2 mb-4 leading-relaxed md:tracking-wider text-xs md:text-xl text-gray-400">
                        <span className="text-gray-900">
                            <span className="text-pink-800">
                                21st February</span>
                        </span> at Central Government Museum
                    </p>
                    <p className="pr-4 leading-relaxed text-gray-400">
                        Inappropriate behavior is often laughed off as “boys will be boys,” while women face higher conduct standards.
                    </p>

                    <Buttons
                        text="View Details" colorType=""/>

                </div>
            </div>
            
            {/* fourth box */}
            <div className="flex flex-col md:flex-row md:justify-around md:items-center md:gap-4 md:mx-32">
                
                <div className="md:w-1/2 py-2">
                    <Link href="#events" className=" text-gray-900 text-lg 
                    font-bold leading-relaxed tracking-wider">
                        Event on the Rock Solid Carbon
                    </Link>
                    <p className="mt-2 mb-4 leading-relaxed md:tracking-wider text-xs md:text-xl text-gray-400">
                        <span className="text-gray-900">
                            <span className="text-pink-800">
                                21st February</span>
                        </span> at Central Government Museum
                    </p>
                    
                    <p className="pr-4 leading-relaxed text-gray-400">
                        Inappropriate behavior is often laughed off as “boys will be boys,” while women face higher conduct standards.
                    </p>

                    <Buttons
                        text="View Details" colorType=""/>

                </div>

                <div className="md:w-1/2">
                    <Image
                        className="w-full h-52 object-cover rounded-md"
                        alt="Event related image"
                        src={Image1}
                        width={1100}
                        height={200}
                    />
                </div>
            </div>
           

        </section>

    )
}



export default Events

