import React from 'react';
import Layout from '../../p01_components/Layout';
import Loading from '../../p01_components/Loading';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router'



export default function Location() {
    const QUERY_LOCATION = gql`
        query location($id: ID!){
            location(id: $id){
                name,
                type,
                dimension,
                residents{
                    id,
                    name,
                  	status,
                  	species,
                  	type,
                  	gender,
                  	image, 
                }
            }
        }
    `;

    const router = useRouter();
    const { query: { pid } } = router;

    const { loading, error, data } = useQuery(QUERY_LOCATION, {
        variables: {
            id: pid
        }
    })

    if(loading )  return <Loading />

    const { location: { name, residents } } = data;
    console.log(data, 'data')
    //console.log(name, residents.map(e => {e.name, e.id}), 'nameee')


    return (
        <Layout>
            <div className="flex h-screen justify-center">
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
                            px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 
                            uppercase border-yellow-500 border-t border-b border-r" 
                            style={{
                                color: "#39393A"
                            }}
                        >{name}</p>
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
                            { residents.map((resident, i ) => (
                                <p style={{
                                        color: "white"
                                    }}
                                    key={i}className="text-white  text-xl ml-3
                                        flex items-center px-4 py-2 space-x-3 text-gray-600 
                                        transition-colors duration-200 transform border rounded-lg 
                                        focus:border-teal-500 focus:ring focus:ring-primary 
                                        focus:ring-opacity-40 dark:text-gray-200 dark:border-gray-200 
                                        hover:bg-black dark:hover:bg-black focus:outline-none
                                        my-2
                                    " >{resident.name}</p>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}
