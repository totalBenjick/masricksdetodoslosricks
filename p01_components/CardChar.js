import React from 'react';
import BlueBtn from './BlueBtn';
import GreenBtn from './GreenBtn';

export default function CardChar(props) {
    let { image, name, location:{ name: loc_name, id:loc_id}} = props.character
    return (
        <>
            <div className="flex justify-center xl:1/2  sm:my-5">
                <div className="w-4/5 xl:w-1/2 2xl:w-1/2 bg-white rounded-lg p-12 flex flex-col justify-center items-center m-4 ">
                    <div className="m-4 flex justify-center xl:w-full">
                        <img src={image}  className="object-center object-cover rounded xl:w-1/2" alt={image} />
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-gray-700 font-bold mb-2">{name}</p>
                        <BlueBtn location={loc_id}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {loc_name}
                        </BlueBtn>
                        <GreenBtn >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Info
                        </GreenBtn>
                    </div>
                </div>
            </div>
        </>
    )
}
