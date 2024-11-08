import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import Buttons from "../button/page";
import Image from "next/image";
import Image1 from "../../../public/services-3.jpeg"

function Pricing() {
    return (
        <section id="pricing" className="bg-gray-50">
            <h3 className="md:pt-32 text-gray-900 flex md:justify-center text-xl md:text-6xl font-semibold py-4 px-4">
                Pricing Plans
            </h3>

            <div className="hidden mb-12 text-gray-800 md:flex justify-center text-center">

                <Link className="text-lg" href="/">Home</Link>
                <span className="px-4 pt-1 text-2xl">
                    <FaArrowRightLong /> </span>
                <Link className="text-lg" href="#pricing">Pricing Plans</Link>
            </div>



            {/* heading */}


            <h3 className=" text-gray-900 flex justify-center mx-4 md:mx-0 text-2xl md:text-4xl font-semibold pt-8 ">
                Choose the best plan that suits you
            </h3>
            <div className=" text-gray-700 flex justify-center mx-4 md:mx-0 my-4 md:my-4 text-lg pb-4">
                <span>Who are in extremely love with eco friendly system.</span>
            </div>

            {/* pricing box */}\


            <div className="flex justify-center flex-wrap max-w-full overflow-hidden">
                {/* First Box */}
                <div className="relative rounded-lg w-48 md:w-52 h-[34rem] bg-white flex justify-center mx-2 my-4">
                    <Image
                        className="absolute h-[34rem] w-56 rounded-lg inset-0 opacity-0 transform translate-x-full hover:opacity-100 hover:translate-x-0 transition-all duration-300"
                        src={Image1}
                        alt="Basic Plan"
                        width={200}
                        height={200}
                    />
                    <div className="border w-32 h-32 rounded-full top-8 relative bg-gray-50">
                        <div className="border w-16 h-16 rounded-full absolute top-7 left-8 bg-gradient-to-br from-pink-400 to-pink-800 text-white text-center pt-3 text-3xl">01</div>
                    </div>
                    <div className="font-bold text-center absolute z-10 top-40 py-2 leading-relaxed tracking-wider">
                        <h3>Basic</h3>
                        <span className="mb-12 text-gray-300">For the individuals</span>
                        <div className="border w-full bg-gray-300 mt-12 mb-2"></div>
                        <p className="text-xs text-gray-300">Secure Online Transfer</p>
                        <div className="border w-full bg-gray-300 my-2"></div>
                        <p className="text-xs text-gray-300">Unlimited Styles for interface</p>
                        <div className="border w-full bg-gray-300 my-2"></div>
                        <p className="text-xs text-gray-300">Reliable Customer Service</p>
                        <div className="border w-full bg-gray-300 mt-2 mb-4"></div>
                        <span className="py-6 text-4xl font-bold">£199.00</span>
                        <div className="pt-8">
                            <Buttons text="PURCHASE" colorType="" />
                        </div>
                    </div>
                </div>
                {/* Second Box */}
                <div className="relative rounded-lg w-48 md:w-52 h-[34rem] bg-white flex justify-center mx-2 my-4">
                    <Image
                        className="absolute h-[34rem] w-56 rounded-lg inset-0 opacity-0 transform translate-x-full hover:opacity-100 hover:translate-x-0 transition-all duration-300"
                        src={Image1}
                        alt="Basic Plan"
                        width={200}
                        height={200}
                    />
                    <div className="border w-32 h-32 rounded-full top-8 relative bg-gray-50">
                        <div className="border w-16 h-16 rounded-full absolute top-7 left-8 bg-gradient-to-br from-pink-400 to-pink-800 text-white text-center pt-3 text-3xl">02</div>
                    </div>
                    <div className="font-bold text-center absolute z-10 top-40 py-2 leading-relaxed tracking-wider">
                        <h3>Basic</h3>
                        <span className="mb-12 text-gray-300">For the individuals</span>
                        <div className="border w-full bg-gray-300 mt-12 mb-2"></div>
                        <p className="text-xs text-gray-300">Secure Online Transfer</p>
                        <div className="border w-full bg-gray-300 my-2"></div>
                        <p className="text-xs text-gray-300">Unlimited Styles for interface</p>
                        <div className="border w-full bg-gray-300 my-2"></div>
                        <p className="text-xs text-gray-300">Reliable Customer Service</p>
                        <div className="border w-full bg-gray-300 mt-2 mb-4"></div>
                        <span className="py-6 text-4xl font-bold">£199.00</span>
                        <div className="pt-8">
                            <Buttons text="PURCHASE" colorType="" />
                        </div>
                    </div>
                </div> {/* Third Box */}
                <div className="relative rounded-lg w-48 md:w-52 h-[34rem] bg-white flex justify-center mx-2 my-4">
                    <Image
                        className="absolute h-[34rem] w-56 rounded-lg inset-0 opacity-0 transform translate-x-full hover:opacity-100 hover:translate-x-0 transition-all duration-300"
                        src={Image1}
                        alt="Basic Plan"
                        width={200}
                        height={200}
                    />
                    <div className="border w-32 h-32 rounded-full top-8 relative bg-gray-50">
                        <div className="border w-16 h-16 rounded-full absolute top-7 left-8 bg-gradient-to-br from-pink-400 to-pink-800 text-white text-center pt-3 text-3xl">03</div>
                    </div>
                    <div className="font-bold text-center absolute z-10 top-40 py-2 leading-relaxed tracking-wider">
                        <h3>Basic</h3>
                        <span className="mb-12 text-gray-300">For the individuals</span>
                        <div className="border w-full bg-gray-300 mt-12 mb-2"></div>
                        <p className="text-xs text-gray-300">Secure Online Transfer</p>
                        <div className="border w-full bg-gray-300 my-2"></div>
                        <p className="text-xs text-gray-300">Unlimited Styles for interface</p>
                        <div className="border w-full bg-gray-300 my-2"></div>
                        <p className="text-xs text-gray-300">Reliable Customer Service</p>
                        <div className="border w-full bg-gray-300 mt-2 mb-4"></div>
                        <span className="py-6 text-4xl font-bold">£199.00</span>
                        <div className="pt-8">
                            <Buttons text="PURCHASE" colorType="" />
                        </div>
                    </div>
                </div>
                {/* Fourth Box */}
                <div className="relative rounded-lg w-48 md:w-52 h-[34rem] bg-white flex justify-center mx-2 my-4">
                    <Image
                        className="absolute h-[34rem] w-56 rounded-lg inset-0 opacity-0 transform translate-x-full hover:opacity-100 hover:translate-x-0 transition-all duration-300"
                        src={Image1}
                        alt="Basic Plan"
                        width={200}
                        height={200}
                    />
                    <div className="border w-32 h-32 rounded-full top-8 relative bg-gray-50">
                        <div className="border w-16 h-16 rounded-full absolute top-7 left-8 bg-gradient-to-br from-pink-400 to-pink-800 text-white text-center pt-3 text-3xl">04</div>
                    </div>
                    <div className="font-bold text-center absolute z-10 top-40 py-2 leading-relaxed tracking-wider">
                        <h3>Basic</h3>
                        <span className="mb-12 text-gray-300">For the individuals</span>
                        <div className="border w-full bg-gray-300 mt-12 mb-2"></div>
                        <p className="text-xs text-gray-300">Secure Online Transfer</p>
                        <div className="border w-full bg-gray-300 my-2"></div>
                        <p className="text-xs text-gray-300">Unlimited Styles for interface</p>
                        <div className="border w-full bg-gray-300 my-2"></div>
                        <p className="text-xs text-gray-300">Reliable Customer Service</p>
                        <div className="border w-full bg-gray-300 mt-2 mb-4"></div>
                        <span className="py-6 text-4xl font-bold">£199.00</span>
                        <div className="pt-8">
                            <Buttons text="PURCHASE" colorType="" />
                        </div>
                    </div>
                </div>


               
            </div>






        </section>
    )
}

export default Pricing