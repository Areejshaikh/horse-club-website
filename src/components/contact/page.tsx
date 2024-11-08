import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { PiHouseLine } from "react-icons/pi";
import Buttons from "../button/page";



function Contact() {
    return (
        <section id="contact" className="flex flex-wrap  max-h-full  justify-center h-72
          bg-gray-200">
            {/* left site */}
            <div className="">

                <div className="md:flex flex-wrap  md:mx-0 mx-6 md:my-4">
                    <span className="text-pink-800 text-4xl pt-1 "><PiHouseLine /></span>
                    <div className="mx-auto md:mx-8">
                        <p className="text-gray-700 text-base tracking-wide leading-relaxed">
                            Dhaka, Bangladesh
                        </p>

                        <span className="text-gray-400 text-lg">56/8, West Panthapath</span>
                    </div>
                </div>

                <div className="md:flex  flex-wrap md:mx-0 mx-6 md:my-4 ">
                    <span className="text-pink-800 text-4xl pt-1 "><LuPhone />
                    </span>
                    <div className="mx-auto md:mx-8">
                        <p className="text-gray-700 text-base tracking-wide leading-tight ">
                            00 (880) 9865 562
                        </p>

                        <span className="text-gray-400 text-lg">Mon to Fri 9am to 6 pm</span>
                    </div>
                </div>



                <div className="md:flex flex-wrap md:mx-0 mx-6 md:my-4 ">
                    <span className="text-pink-800 text-4xl pt-1 "><MdOutlineMail /></span>
                    <div className="md:mx-8 md:ml-8 ">
                        <p className="text-gray-700 text-base tracking-wide leading-tight">
                            support@codethemes.com

                        </p>

                        <span className="text-gray-400 text-lg">Send us your query anytime!

                        </span>
                    </div>
                </div>
            </div>

            {/* mid side section */}

            <div className="justify-center ">
                <div className="mt-8 mb-4">
                    <input 
                    type="text" 
                    name="text" 
                    id="text" 
                    placeholder="Enter Your Name"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-56 md:w-80"/>
                </div>

                <div className="my-4">
                    <input 
                    type="text" 
                    name="text" 
                    id="text" 
                    placeholder="Enter Email"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-56 md:w-80"/>
                </div>


                <div className="my-4">
                    <input 
                    type="text" 
                    name="text" 
                    id="text" 
                    placeholder="Enter Your Name"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-56 md:w-80"/>
                </div>
                
            </div>
            {/* right side section */}
            <div className="md:mt-8 md:ml-8 ">
                <textarea 
                name="textarea" 
                id="textarea" 
                rows={5} 
                cols={7} 
                defaultValue="Message"
               className="text-gray-400 border border-gray-300 rounded-md p-2 focus:outline-none 
               focus:ring-2 focus:ring-pink-500 w-56 md:w-80"/>
          
           <div className="flex justify-center md:justify-start">
           <Buttons text="Send Message" colorType="primery"/>
           
           </div>
            </div>
        </section>
    )
}

export default Contact