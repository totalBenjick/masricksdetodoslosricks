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
            className={`bg-gradient-to-r from-blue-300 to-blue-500  h-full text-white`} >
            <div className="flex justify-center items-center text-2xl ">
                Rick and Morty Ui
            </div>      
             <div className="flex-col h-full justify-center">
             {children}
             </div>

          </div>
        </>
  )
}
