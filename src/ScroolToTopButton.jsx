import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-opacity ${showButton ? 'opacity-100' : 'opacity-0'} ${showButton ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            ↑
        </button>
    );
}

export default ScrollToTopButton;
