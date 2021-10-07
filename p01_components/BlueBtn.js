import React from 'react';
import Link from 'next/link';
import Router from 'next/router';




export default function BlueBtn( props ) {
    let id = props.location;

    const goToLocation = () => {
        Router.push({
            pathname: `/location/[id]`,
            query: {id}
        })
    };

    return (
        <Link href={`/location/${props.location || '0'}`}>
            <button className="bg-blue-500 hover:bg-blue-400 
                            text-white font-bold py-2 px-4 border-b-4 
                            border-blue-700 hover:border-blue-500 rounded
                            flex flex-col justify-center items-center "
            >
                {props.children}
            </button>
        </Link>
        
    )
}
