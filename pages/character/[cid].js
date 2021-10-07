import React from 'react';
import CardChar from '../../p01_components/CardChar';
import Layout from '../../p01_components/Layout';
import { useQuery, gql } from '@apollo/client';
import Loading from '../../p01_components/Loading';


export default function Character({props}) {
    const QUERY_ONE_CHAR = gql`
        query character($id: ID!){
		    character(id: $id){
                location{
                    id,
                    name
                },
                id,
                name,
                status,
                species,
                type,
                gender,
                origin{
                    name,
                    dimension
                },
                image,	
            }  
        }
    `;

    const { loading, error, data } = useQuery(QUERY_ONE_CHAR, {
        variables:{
            id: 4
        }
    });

    if( error) {
        return <div>hubo error</div>
    }
    if(loading) {
        return( <Loading/>)
    }
    
    return (
        <Layout>
           <div style={{ padding: "1rem" }}>
               <CardChar  character={data.character}/>
            </div>
        </Layout>
    )
}
