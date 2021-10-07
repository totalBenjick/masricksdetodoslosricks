import React, { useState } from 'react';
import Layout from '../p01_components/Layout';
import Loading from '../p01_components/Loading';
import Pagination from '../p01_components/Pagination';
import CardChar from '../p01_components/CardChar';
import { useQuery, gql } from '@apollo/client';


export default function Characters() {
    const QUERY_CHARACTERS = gql`
        query characters($page: Int){
            characters(page: $page) {
                info {
                count        
                }
                results {
                    location{
                        id,
                        name
                    }
                name,
                id,
                status,
                species,
                type,
                gender,
                origin {
                    name
                },
                image,
                episode {
                    name
                },
                created,
                }
            }
        }
    `;
    

    const { loading, error, data} = useQuery(QUERY_CHARACTERS, {
        variables:{
            page: 17
        }
    });

    if( error) {
        return <div>hubo error</div>
    }

    if(loading) {
        return( <Loading/>)
    }

    let results  = data?.characters?.results;
    console.log(results)
    return (
        <Layout>
            <div className="sm:my-20">
                <Pagination />
                { results.map( ( charac, i ) => <CardChar key={i} character={charac}/> ) }
            </div>
        </Layout>
    )
}
