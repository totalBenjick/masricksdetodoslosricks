import React from 'react';
import Layout from './Layout';

export default function Error() {
    return (
        <Layout>
            <div className="flex justify-center h-screen
                items-center"
                style= {{ width: "100%"}}
            >
            Hubo un error
            </div>
        </Layout>
    )
}
