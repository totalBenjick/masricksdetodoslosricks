import React from 'react';

export default function Pagination(props) {

    const onClickPrevious = () => {
        if(props.prev) props.setPage( props.prev)
    }

    const onClickNext = () => {
        if(props.next) props.setPage(props.next);
    }
    return (
        <div className="flex justify-center text-gray-700">
            <div onClick={() => {onClickPrevious()}}
                className="h-12 w-12 mr-1 flex justify-center 
                items-center rounded-full bg-gray-200 cursor-pointer"
                >
                {props.prev && 
                    <svg xmlns="http://www.w3.org/2000/svg"  
                        width="100%" height="100%"  fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="feather feather-chevron-left w-6 h-6"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>}
            </div>
            <div className="flex h-12 font-medium rounded-full bg-gray-200">
                
                <div className={`w-12 md:flex justify-center items-center hidden  cursor-pointer 
                        leading-5 transition duration-150 ease-in  
                        rounded-full bg-teal-600 text-white `}
                >
                    {props.current}
                </div>
                <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer 
                    leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white"
                >
                    {props.current}
                </div>
            </div>
            <div onClick={() => {onClickNext()}}
                className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                {props.next && 
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" 
                        height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right w-6 h-6"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>}
            </div>
        </div>
    )
}
