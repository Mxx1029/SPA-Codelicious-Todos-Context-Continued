// import { useState } from 'react';

import { UserContextProvider } from './contexts/UserContext';
import Layout from './components/Layout';

function App() {
  
  return (
    <UserContextProvider>
      <Layout />
    </UserContextProvider>
  );
}

export default App;
