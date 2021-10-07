import React, { useState } from 'react';
import Layout from '../p01_components/Layout';
import Loading from '../p01_components/Loading';
import Pagination from '../p01_components/Pagination';
import CardChar from '../p01_components/CardChar';
import { useQuery, gql } from '@apollo/client';
import Error from '../p01_components/Error';


export default function Characters() {
    const [ xid, setId ] = React.useState(1);

    const QUERY_CHARACTERS = gql`
        query characters($page: Int){
            characters(page: $page) {
                info {
                    count,
                    pages,
                    next,
                    prev    
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
    

    const { loading, error, data } = useQuery(QUERY_CHARACTERS, {
        variables:{
            page: xid
        }
    });

    if( error) {
        return <Error/>
    }

    if(loading) {
        return( <Loading/>)
    }
    console.log(data, '8889')
    const { characters: { info: { next, prev} } } = data;

    let results  = data?.characters?.results;
    return (
        <Layout>
            <div className="sm:my-10">
                <Pagination current={ xid } prev={ prev } next={ next } setPage={ setId }/>
                { results.map( ( charac, i ) => <CardChar key={i} character={charac}/> ) }
            </div>
        </Layout>
    )
}
