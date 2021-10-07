import Layout from './Layout';
import React from 'react'

import Loader from "react-loader-spinner"

export default function Loading() {
    return(<Layout>
        
        <div className="flex justify-center h-screen
            items-center"
            style= {{ width: "100%"}}
        >
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
        </div>
    
    </Layout>)
}
