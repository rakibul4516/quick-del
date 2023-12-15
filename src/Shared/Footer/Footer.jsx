import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import Aos from "aos";
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <footer data-aos="fade-left" className="bg-[#e9ece3] dark:bg-gray-800 dark:text-gray-50">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-400">
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <div className="flex flex-col  justify-center pt-6 lg:pt-0">
                    <div className="flex justify-center space-x-4">
                        <a href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaInstagram className="text-4xl font-semibold text-[#ff9428]"/>
                        </a>
                        <a href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaFacebook className="text-4xl font-semibold text-[#ff9428]"/>
                        </a>
                        <a href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaTwitter className="text-4xl font-semibold text-[#ff9428]"/>
                        </a>
                        <a href="#" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <FaLinkedin className="text-4xl font-semibold text-[#ff9428]"/>
                        </a>
                        <a href="#" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                            <MdOutgoingMail className="text-4xl font-semibold text-[#ff9428]"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;