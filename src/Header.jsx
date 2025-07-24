import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="p-9 bg-gray-800 text-white  top-0 z-10">
                <div className="container mx-auto flex justify-between items-center">

                    <div className="text-xl font-bold">
                        <Link to="/">Mehmet Emre Ök</Link>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-gray-400">Ana Sayfa</Link>
                        <Link to="/blog" className="hover:text-gray-400">Blog</Link>
                        <Link to="/contact" className="hover:text-gray-400">İletişim</Link>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <nav className="md:hidden bg-gray-700 text-white p-4 space-y-2">
                        <Link to="/" className="block hover:text-gray-400" onClick={toggleMobileMenu}>
                            Ana Sayfa
                        </Link>
                        <Link to="/blog" className="block hover:text-gray-400" onClick={toggleMobileMenu}>
                            Blog
                        </Link>
                        <Link to="/contact" className="block hover:text-gray-400" onClick={toggleMobileMenu}>
                            İletişim
                        </Link>
                    </nav>
                )}
            </header>
        </>
    );
}

export default Header;
