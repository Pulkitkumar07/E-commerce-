import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaFacebookF, FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaTwitter, FaTwitterSquare } from "react-icons/fa";
import {FiPhoneCall}from "react-icons/fi"

const Footer = () => {
    const [email, setEmail] = useState("");
    return (
        <footer className="border-t py-12 " >
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-4 gap-3 px-4 lg:px-4">
                <div>
                    <h3 className="text-lg text-gray-800 mb-3">New letter</h3>
                    <p className="text-gray-500 mb-3 leading-4">
                        Be the first to know about new arrivals, exclusive offers, and more.</p>
                    <p className="mb-4 font-medium ">Sign up and get 10% off your first order!</p>
                    <form className="flex justify-between ">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" placeholder="Enter your email"
                            className="border  w-full text-sm rounded-l-md px-3  py-3 focus:outline-none   transition-all border-gray-300 " />

                        <button type='submit' className="px-4  py-3  text-sm rounded-r bg-black border-black text-white ">Subscribe</button>
                    </form>
                </div>

                <div>
                    <div>
                        <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
                        <ul className='space-y-2  text-gray-600'>
                            <li className='flex flex-col'>
                                <Link to="#" className="hover:text-black transition-colors">Men's top wear</Link>
                                <Link to="#" className="hover:text-black transition-colors">Women's top wear</Link>
                                <Link to="#" className="hover:text-black transition-colors">Men's bottom wear</Link>
                                <Link to="#" className="hover:text-black transition-colors">Women's bottom wear</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
                        <ul className='space-y-2  text-gray-600'>
                            <li className='flex flex-col'>
                                <Link to="#" className="hover:text-black transition-colors">Help Center</Link>
                                <Link to="#" className="hover:text-black transition-colors">About Us</Link>
                                <Link to="#" className="hover:text-black transition-colors">FAQs</Link>
                                <Link to="#" className="hover:text-black transition-colors">Features</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='mb-6'>
                        <h3 className='text-lg text-gray-800 mb-1'>Follow Us</h3>
                        <ul className='space-y-2  flex text-gray-600'>
                            <li className='flex  gap-3  items-center'>
                                <a href="https://facebook.com" target="_blank">
                                    <FaFacebook className="w-6 h-6 hover:text-blue-600" />

                                </a>
                                <a href="https://instagram.com" target="_blank">
                                    <FaInstagram className="w-6 h-6 hover:text-pink-600" />
                                </a>
                                <a href="https://twitter.com" target="_blank">
                                    <FaTwitter className="w-6 h-6 hover:text-sky-600" />
                                </a>
                            </li>

                        </ul>
                    </div>
                
                <p className='text-gray-800 text-lg'>Call us</p>
                <p>
                    <FiPhoneCall className='inline-block mr-2 '/>
                    0123-2343-707
                </p>


                </div>
            </div>


            <div className='container mx-auto mt-12 text-center px-4 lg:px-0 border-t border-gray-200 pt-6 '>
              <p className='text-gray-500 text-sm tracking-tighter '>© 2025, Completed. All rights reserved.</p>


            </div>





        </footer >
    )
}

export default Footer