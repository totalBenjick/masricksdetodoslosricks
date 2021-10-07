import React from 'react';
import { useRouter } from 'next/router';

const Card = (props) => {
    const router = useRouter();
    const onClickRoute = () => {
        return router.push(props.route)
    }
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl 
            shadow-md overflow-hidden md:max-w-2xl m-10 cursor-pointer
            h-auto"
            onClick={()=> onClickRoute()}
        >
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover 
                    md:h-full md:w-48" 
                    src={props.img} 
                    alt={props.img}/>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide 
                    text-sm text-green-500 font-semibold">
                        {props.title}
                    </div>
                    <p href="#" className="block mt-1 text-lg leading-tight 
                    font-medium text-black ">
                        {props.content}
                    </p>
                    <p className="mt-2 text-gray-500">
                        {props.description}
                    </p>
                </div>
            { props.children }
            </div>
        </div>
    )
}

export default Card;
