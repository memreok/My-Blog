import React from 'react'
import UseAnimations from 'react-useanimations';
import activity from 'react-useanimations/lib/activity'

function Yapim() {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center space-y-4 mt-0 px-4">
                <p className="text-5xl font-bold text-gray-200 dark:text-white flex items-center space-x-4 opacity-65">
                    <span>Yapım aşamasında</span>
                    <UseAnimations
                        animation={activity}
                        size={56}
                        strokeColor="white"
                        fillColor="white"
                    />
                </p>
                <p className="text-2xl font-bold text-gray-500 dark:text-white opacity-30">
                    Kısa süre sonra tekrar gelin.
                </p>
            </div>
        </>
    )
}

export default Yapim
