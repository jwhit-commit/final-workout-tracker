import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar';
import { StoreProvider } from './utils/GlobalState';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="">
        <StoreProvider>
        <Navbar />
        
        <Outlet />
        </StoreProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
