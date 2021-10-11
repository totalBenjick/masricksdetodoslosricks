import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../p01_components/Layout';
import Loading from '../p01_components/Loading';
import Router, { useRouter } from 'next/router';
import Pagination from '../p01_components/Pagination';
import Link from 'next/link';
import Error from '../p01_components/Error';

export default function Locations() {
    const [ xid, setId ] = React.useState(1);
    const QUERY_ALL_LOCATIONS = gql`
        query locations($page: Int!){
            locations(page: $page) {
                info{
                    count,
                    pages,
                    next,
                    prev
                },
                results{
                    id,
                    name
                    residents{
                        id,
                        name
                    }
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(QUERY_ALL_LOCATIONS,{
        variables:{
            page: xid
        }
    })
    if( error ) { return <Error/>}

    if( loading ) { return( <Loading/>) }

    const { locations: { info: { next, prev} } } = data;

    console.log( data.locations.results , 'from location with id');
    return (
        <Layout>
            <div className="sm:my-10">
                <Pagination  current={ xid } prev={ prev } next={ next } setPage={ setId }/>
                <div className="flex h-screen justify-center mt-5">
                    <div style={{ height: "90%", width: "80%" }}
                        className=" bg-blue-600 pt-1 px-2 bg-gradient-to-b from-blue-400 
                            to-blue-500 rounded-xl shadow-lg w-52 flex items-center"
                        >
                        <div className="p-4 flex justify-start  flex-col"
                            style={{
                                overflow: "hidden", width: "100%", height: "100%",
                                boxSizing: "border-box"}}
                        >
                            <p className=" rounded-l-lg
                                px-8 rounded-r-lg bg-green-400  text-gray-800 font-bold p-4 
                                uppercase border-green-500 border-t border-b border-r" 
                                style={{
                                    color: "white",
                                    textShadow: "2px 2px 3px rgba(255,255,255,0.1)"
                                }}
                            >{'Locations'}</p>
                            <p  style={{color: "#63585e"}}
                                className="text-white font-semibold text-xl  mt-3 ml-3" >Residents:</p>
                            
                            <div className=""
                                style={{
                                    overflow: "scroll",
                                    width: "100%",
                                    height: "100%",
                                    maxHeight: "510px",
                                }}
                            >
                                { data.locations?.results.map( ( loc, i ) => (
                                    <Link  key={i} href={`/location/${loc.id || '0'}`} >
                                        <p style={{ color: "white" }}
                                            onClick={() => console.log('clickado')}
                                            key={i}
                                            className="text-white  text-xl ml-3
                                                flex items-center px-4 py-2 space-x-3 text-gray-600 
                                                transition-colors duration-200 transform border rounded-lg 
                                                focus:border-teal-500 focus:ring focus:ring-primary 
                                                focus:ring-opacity-40 dark:text-gray-200 dark:border-gray-200 
                                                hover:bg-black dark:hover:bg-black focus:outline-none
                                                my-2" 
                                                >
                                                    { loc?.name}
                                        </p>
                                    </Link>
                                 ) ) }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
