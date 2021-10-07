import Head from 'next/head';

export default function Layout({children}) {

  return (
        <>
          <Head>
            <title> Rick and Morty UI</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
              <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
          </Head>
          <div style={{height: "100%"}}
            className={`bg-gradient-to-r from-blue-300 to-blue-500  h-full w-screen text-white`} >
            <div className="flex justify-center items-center text-2xl ">
                <img src={ "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" } 
                    alt={ 'rick and morty svg' } 
                    style={{width: "auto", marginTop: "20px", border: "1px solid black", borderRadius: "10px"
                        , backgroundColor: "black", paddingLeft: "25px", paddingRight: "25px", maxHeight: "120px", maxWidth:"80%"
                    }}
                />
            </div>      
             <div className="flex-col h-full justify-center mt-5">
             {children}
             </div>
            <div className="block rounded-md text-white font-extrabold text-center bg-light-blue-500 p-6"> Benjamin Lezama 2021 </div>
          </div>
        </>
  )
}
