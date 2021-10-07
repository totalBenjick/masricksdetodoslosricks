import React from 'react'

export default function GreenBtn({children}) {
    return (
        <button className="bg-green-500 hover:bg-blue-400 
                        text-white font-bold py-2 px-4 border-b-4 
                        border-green-700 hover:border-green-500 rounded
                        flex  justify-center items-center w-full my-5"
        >
           {children}
        </button>
    )
}
