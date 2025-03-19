import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer className="bg-blue-600 text-white py-8 mt-12">
            <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between">
                {/* Left Section */}
                <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-semibold">BrandLogo</h2>
                <p className="text-sm text-gray-200">Your tagline or mission statement here.</p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                    <h3 className="font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                    <li className="hover:text-gray-300 cursor-pointer">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer">About</li>
                    <li className="hover:text-gray-300 cursor-pointer">Services</li>
                    <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                    </ul>
                </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-6 md:mt-0">
                <FaFacebook className="text-2xl cursor-pointer hover:text-gray-300" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-gray-300" />
                <FaInstagram className="text-2xl cursor-pointer hover:text-gray-300" />
                </div>
            </div>

            <div className="text-center text-gray-200 text-sm mt-6">
                © {new Date().getFullYear()} BrandLogo. All rights reserved.
            </div>
        </footer>
      
    </div>
  )
}

export default Footer
