'use client';

import { CarIcon } from './icons/index';

const Footer = () => (
    <footer id="contact" className="bg-black text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
               <CarIcon className="w-8 h-8 text-blue-500"/>
               <span className="text-2xl font-bold text-white">AutoNXT</span>
            </div>
            <p className="mb-6">The Premier Automotive Event of the Year</p>
            <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} AutoNXT. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;
