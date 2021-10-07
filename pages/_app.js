import { ApolloProvider } from '@apollo/client';
import client from '../p00_config/apollo';
import RickState from '../p02_context/RickState';

const MyApp = ({ Component, pageProps}) => {
    return(
        <ApolloProvider client={client}>
            <RickState>
                <Component {...pageProps} />
            </RickState>
        </ApolloProvider>
    )
}

export default MyApp;