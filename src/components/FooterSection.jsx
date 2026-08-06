import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaPinterest, FaGooglePlay, FaApple, FaTag, FaClock, FaShieldAlt, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaApplePay, FaGooglePay, FaCcAmazonPay } from "react-icons/fa";
import { MdLocalOffer, MdTrackChanges } from "react-icons/md";
const FooterSection = () => {
    return (
        <footer className="bg-[#1f1f1f] text-white py-10">
            <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-6 border-b border-gray-700">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-sm"> Company Info </h2>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> About Temu </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Affiliate & Influencer Program: Join to Earn </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Contact us </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Careers </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Press </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Temu's Tree Planting Program </a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-sm"> Customer service </h2>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Return and refund policy </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Intellectual property policy </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Shipping info </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Report suspicious activity </a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-sm"> Help </h2>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Support center & FAQ </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Safety center </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Temu purchase protection </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Sitemap </a>
                        <a href="#" className="text-gray-400 text-xs hover:underline hover:text-white"> Partner with Temu </a>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-sm"> Download the Temu App </h2>
                        <div className="flex items-center gap-2 text-xs">
                            <FaTag /> <h4> Price-drop alerts </h4> 
                           | <MdTrackChanges /> <h4> Track orders any time </h4>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <FaShieldAlt /> <h4> Faster & more secure c... |</h4>
                            <FaClock /> <h4> Low stock items alerts </h4>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <MdLocalOffer /> <h4> Exclusive offers </h4>
                            | <FaTag /> <h4> Coupons & offers alerts</h4>
                        </div>

                        {/* Download buttons */}
                        <div className="flex flex-wrap gap-3 mt-3">
                            <button className="flex items-center gap-2 border border-gray-400 hover:border-white rounded-full px-4 py-1"> 
                                <FaApple size={22} /> 
                                <div className="text-left">
                                    <p className="text-gray-400 text-[9px]"> Download on the </p>
                                    <p className="font-semibold text-xs"> App Store </p>
                                </div>
                            </button>
                            <button className="flex items-center gap-2 border border-gray-400 hover:border-white rounded-full px-4 py-1">
                                <FaGooglePlay size={20} /> 
                                <div className="text-left">
                                    <p className="text-gray-400 text-[9px]"> Get it on </p>
                                    <p className="font-semibold text-xs"> Google Play </p>
                                </div>
                            </button>
                        </div>

                        {/* Social Media */}
                        <h3 className="font-semibold mt-4 text-sm"> Connect with Temu</h3>
                        <div className="flex gap-4 text-lg">
                            <FaInstagram className="hover:text-gray-400 cursor-pointer"/>
                            <FaFacebook className="hover:text-gray-400 cursor-pointer"/>
                            <FaTwitter className="hover:text-gray-400 cursor-pointer"/>
                            <FaTiktok className="hover:text-gray-400 cursor-pointer"/>
                            <FaYoutube className="hover:text-gray-400 cursor-pointer"/>
                            <FaPinterest className="hover:text-gray-400 cursor-pointer"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-sm"> Security certification </h2>
                        <div className="flex flex-row gap-3 mt-2">
                            <div className="bg-white w-8 h-8 flex items-center justify-center rounded"> <FaCcVisa className="text-blue-700 text-2xl"/> </div>
                            <div className="bg-white w-10 h-8 flex items-center justify-center rounded"> <FaCcMastercard className="text-red-500 text-2xl"/></div>
                            <div className="bg-gray-500 w-8 h-8 flex items-center justify-center rounded"> <FaCcAmex className="text-2xl text-white"/></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <h2 className="font-bold text-sm"> We Accept </h2>
                        <div className="flex flex-row gap-3 mt-2">
                            <div className="bg-white w-10 h-8 flex items-center justify-center rounded"> <FaApplePay className="text-black text-3xl"/> </div>
                            <div className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded"> <FaCcPaypal className="text-2xl text-white"/></div>
                            <div className="bg-white w-8 h-8 flex items-center justify-center rounded"> <FaCcAmazonPay className="text-red-500 text-2xl"/></div>
                            <div className="bg-white w-10 h-8 flex items-center justify-center rounded-full"> <FaGooglePay className="text-black text-3xl" /></div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-wrap justify-center items-center gap-5 text-xs text-gray-400">
                        <span> © 2022 - 2026 Whaleco Inc. </span>
                        <a href="#" className="underline hover:text-white"> Terms of use </a>
                        <a href="#" className="underline hover:text-white"> Privacy policy </a>
                        <a href="#" className="underline hover:text-white"> Your privacy choices </a>
                        <a href="#" className="underline hover:text-white"> Ad Choices </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default FooterSection;