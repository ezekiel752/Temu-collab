import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaPinterest, FaGooglePlay, FaApple, FaTag, FaClock, FaShieldAlt, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaApplePay, FaGooglePay, FaCcAmazonPay } from "react-icons/fa";
import { MdLocalOffer, MdTrackChanges } from "react-icons/md";
const FooterSection = () => {
    return (
        <footer className="bg-[#1f1f1f] text-white px-8 sm:px-16 lg:px-24 pt-10 pb-10">
            <div className="flex flex-row gap-40 pb-10" >

            <div className="flex flex-col gap-3 w-60">
                <h2 className="font-bold text-sm"> Company Info </h2>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> About Temu </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Affiliate & Influencer Program: Join to Earn </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Contact us </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Careers </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Press </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Temu's Tree Planting Program </a>
            </div>

            <div className="flex flex-col gap-3 w-40">
                <h2 className="font-bold text-sm"> Customer service </h2>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Return and refund policy </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Intellectual property policy </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Shipping info </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Report suspicious activity </a>

            </div>

            <div className="flex flex-col gap-3 w-35">
                <h2 className="font-bold text-sm"> Help </h2>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Support center & FAQ </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Safety center </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Temu purchase protection </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Sitemap </a>
                <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Partner with Temu </a>
                
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 w-80">
                <h2 className="font-bold text-sm"> Download the Temu App </h2>
                <div className="flex items-center gap-2 text-xs">
                    <FaTag /> <h4> Price-drop alerts </h4> 
                   | <MdTrackChanges /> <h4> Track orders any time </h4>
                </div>
                <div className="flex items-center gap-2 text-xs">
                <FaShieldAlt /> <h4> Faster & more secure c... |</h4>
                <FaClock /> <h4> Low stock items alerts  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <MdLocalOffer /> <h4> Exclusive offers </h4>
                    | <FaTag /> <h4> Coupons & offers alerts</h4>
                </div>

                {/* Download buttons */}
                <div className="flex gap-3 mt-5">
                    <button className="flex items-center gap-2 border border-gray-400 hover:border-white rounded-full px-5 py-1"> 
                        <FaApple size={25} /> 
                           <div className="text-left ">
                            <p className="text-gray-400 text-[9px]"> Download on the </p>
                            <p className="font-semibold"> App Store </p>
                           </div>
                    </button>
                    <button className="flex items-center gap-2 border border-gray-400 hover:border-white rounded-full px-2 py-1">
                        <FaGooglePlay size={23} /> 
                        <div className="text-left">
                            <p className="text-gray-400 text-[9px] "> Get it on </p>
                            <p className="font-semibold"> Google Play </p>
                        </div>
                    </button>
                </div>

                {/* Social Media */}
                <h3 className="font-semibold mt-5"> Connect with Temu</h3>
                <div className="flex gap-6 text-xl mt-0">
                    <FaInstagram  className="hover:bg-gray-400"/>
                    <FaFacebook  className="hover:bg-gray-400"/>
                    <FaTwitter  className="hover:bg-gray-400"/>
                    <FaTiktok  className="hover:bg-gray-400"/>
                    <FaYoutube  className="hover:bg-gray-400"/>
                    <FaPinterest  className="hover:bg-gray-400"/>
                </div>
            </div>

            </div>

            <div className="flex flex-row gap-100">
                <div className="flex flex-col">
                <h2 className="font-bold text-sm"> Security certification </h2>
                <div className="flex flex-row gap-3 pb-5 mt-4">
                <div className="bg-white w-8 h-8 flex items-center justify-center"> <FaCcVisa className="text-blue-700 text-2xl"/>  </div>
                <div className="bg-white w-10 h-8 flex items-center justify-center"> <FaCcMastercard className="text-red-500 text-2xl"/></div>
                <div className="bg-gray-500 w-8 h-8 flex items-center justify-center"> <FaCcAmex classname="text-2xl"/></div>
            </div></div>
                
             <div className="flex flex-col">
                <h2 className="font-bold text-sm"> We Accept </h2>
             <div className="flex flex-row gap-3 pb-5 mt-4">
                <div className="bg-white w-10 h-8 flex items-center justify-center"> <FaApplePay className="text-black text-3xl"/> </div>
                <div className="bg-blue-600 w-8 h-8 flex items-center justify-center"> <FaCcPaypal classname="text-2xl"/></div>
                <div className="bg-white w-8 h-8 flex items-center justify-center"> <FaCcAmazonPay className="text-red-500 text-2xl"/></div>
                <div className="bg-white w-10 h-8 flex items-center justify-center rounded-full"> <FaGooglePay className="text-black text-3xl" /></div>
             </div>
             </div>
            </div>

            <div className="border-t border-gray-700">
                <div className="flex flex-wrap justify-center items-center gap-5 py-5 text-xs text-gray-400">
                    <span> @ 2022 - 2026 Whaleco Inc. </span>
                    <a href="#" className="underline hover:text-white"> Terms of use </a>
                     <a href="#" className="underline hover:text-white"> Privacy policy </a>
                      <a href="#" className="underline hover:text-white"> Your privacy choices </a>
                       <a href="#" className="underline hover:text-white"> Ad Choices </a>
                </div>
            </div>


        </footer>
    )
}


export default FooterSection;