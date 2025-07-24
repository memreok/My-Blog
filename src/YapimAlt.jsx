import React from 'react';
import UseAnimations from 'react-useanimations';
import activity from 'react-useanimations/lib/activity';

function YapimAlt() {
    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-6 mt-0 px-4">
                <p className="text-4xl sm:text-2xl md:text-2xl font-bold text-gray-200 dark:text-white flex items-center space-x-4">
                    <span>Yapım aşamasında</span>
                    <UseAnimations
                        animation={activity}
                        size={48}
                        strokeColor="white"
                        fillColor="white"
                    />
                </p>
                <p className="text-2xl sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white opacity-60 text-center">
                    Kısa süre sonra tekrar gelin.
                </p>
            </div>
        </>
    );
}

export default YapimAlt;
