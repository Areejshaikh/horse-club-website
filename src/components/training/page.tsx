import Image from "next/image";
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from '../../../public/service-1.jpeg'
import image2 from '../../../public/servise-2.webp'
import image3 from '../../../public/services-3.jpeg'
import image4 from '../../../public/services-4.jpeg'
import image5 from '../../../public/service-1.jpeg'
import image6 from '../../../public/services-6.webp'

export const Training = () => {
    return (
        <div id="training" className="pb-24 mx-4">

            {/* heading Service */}

            <div className=" text-gray-900 flex justify-center text-xl md:text-4xl font-bold">
                <span>Our Offered Training Programs</span>
            </div>
            <div className=" text-gray-700 flex justify-center text-xs py-4">
                <span>Who are in extremely love with eco friendly system.</span>
            </div>
            <div>
                <div className="hidden gap-2 mb-12 text-pink-800 md:flex justify-center text-center">

                    <Link className="text-lg" href="/">Home</Link>
                    <span className="pt-1 text-2xl">
                        <FaArrowRightLong /> </span>
                    <Link className="text-lg" href="#Training">Training</Link>
                </div>
            </div>
            {/* end heading */}



            {/* box */}


            <div className=" flex flex-wrap justify-center text-center gap-8 gap-y-8 ">



                <div className=" relative w-80 max-h-[27rem] rounded-xl justify-around hover:shadow-2xl">

                    <div className="hover:text-pink-800 hover:bg-white rounded-md absolute z-10 top-2 left-2  p-2 text-xs text-white bg-pink-800 ">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image1}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56">
                        <p className="font-bold text-xl tracking-wider md:flex md:justify-around 
                         text-pink-800">Bsc  in Film & Media
                         
                            <span className="py-2 md:py-0">$2500</span>
                        </p>
                        <p className="text-left text-gray-400 my-4 md:my-12 mx-2 md:mx-4 text-xs md:text-lg ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>
                {/* second box */}
                <div className=" relative w-80 max-h-[27rem] rounded-xl justify-around hover:shadow-2xl">

                    <div className="hover:text-pink-800 hover:bg-white rounded-md absolute top-2 left-2  p-2 text-xs  z-10  text-white bg-pink-800 ">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image2}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56">
                        <p className="font-bold text-xl tracking-wider md:flex md:justify-around 
     text-pink-800">Bsc  in Film & Media
                            <span className="py-2 md:py-0">$2500</span>
                        </p>
                        <p className="text-left text-gray-400 my-4 md:my-12 mx-2 md:mx-4 text-xs md:text-lg ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>

                {/* third box */}

                <div className=" relative w-80 max-h-[27rem] rounded-xl justify-around hover:shadow-2xl">

                    <div className="hover:text-pink-800 hover:bg-white rounded-md absolute top-2 left-2 p-2 text-xs z-10  text-white bg-pink-800 ">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image3}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56">
                        <p className="font-bold text-xl tracking-wider md:flex md:justify-around 
                         text-pink-800">Bsc  in Film & Media
                            <span className="py-2 md:py-0">$2500</span>
                        </p>
                        <p className="text-left text-gray-400 my-4 md:my-12 mx-2 md:mx-4 text-xs md:text-lg ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>

                {/* fourtg box */}
                <div className=" relative w-80 max-h-[27rem] rounded-xl justify-around hover:shadow-2xl">

                    <div className="hover:text-pink-800 hover:bg-white rounded-md absolute top-2 left-2  p-2 text-xs z-10 text-white bg-pink-800 ">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image4}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56">
                        <p className="font-bold text-xl tracking-wider md:flex md:justify-around 
                         text-pink-800">Bsc  in Film & Media
                            <span className="py-2 md:py-0">$2500</span>
                        </p>
                        <p className="text-left text-gray-400 my-4 md:my-12 mx-2 md:mx-4 text-xs md:text-lg ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>

                {/* /fifth box */}

                <div className=" relative w-80 max-h-[27rem] justify-around hover:shadow-2xl">

                    <div className="hover:text-pink-800 hover:bg-white rounded-md absolute top-2 left-2  p-2 text-xs z-10 text-white bg-pink-800 ">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52"
                            src={image5}
                            alt="services"
                            width={200}
                            height={100} />
                    </div>

                    <div className="pt-56">
                        <p className="font-bold text-xl tracking-wider md:flex md:justify-around 
                         text-pink-800">Bsc  in Film & Media
                            <span className="py-2 md:py-0">$2500</span>
                        </p>
                        <p className="text-left text-gray-400 my-4 md:my-12 mx-2 md:mx-4 text-xs md:text-lg ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>

                {/* six box */}

                <div className=" relative w-80 max-h-[27rem] rounded-xl justify-around hover:shadow-2xl">

                    <div className="hover:text-pink-800 hover:bg-white rounded-md absolute top-2 left-2  p-2 text-xs z-10 text-white bg-pink-800 ">  {/* Text ko image ke upar dikhane ke liye */}
                        <span className="font-bold">Admission Going On</span>
                    </div>
                    <div className="absolute">
                        <Image
                            className="w-80 h-52 "
                            src={image6}
                            alt="services"
                            width={100}
                            height={100} />
                    </div>

                    <div className="pt-56">
                        <p className="font-bold text-xl tracking-wider md:flex md:justify-around 
                         text-pink-800">Bsc  in Film & Media
                            <span className="py-2 md:py-0">$2500</span>
                        </p>
                        <p className="text-left text-gray-400 my-4 md:my-12 mx-2 md:mx-4 text-xs md:text-lg ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                    </div>
                </div>



            </div>
        </div>

    )
}