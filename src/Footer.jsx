import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 p-4 sticky ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm">
                    © 2025 Mehmet Emre Ök. Tüm hakları saklıdır.
                </div>
                <div className="flex space-x-6 items-center">
                    <a href="https://github.com/memreok" target='_blank' className="hover:text-gray-400 flex items-center">
                        <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/mehmet-emre-%C3%B6k-a6433620a/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center">
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                    <Link to="/contact" className="hover:text-gray-400 flex items-center">
                        İletişim
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
