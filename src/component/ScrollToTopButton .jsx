import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };


    return (
        <div>
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 w-10 rounded-full border block "
                aria-label="Go to top"
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
