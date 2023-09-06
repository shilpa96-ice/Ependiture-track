import React from 'react';
import {Header} from './component/header';
import {Balance} from './component/balance';
import {Incomexpense} from './component/incomexpense';
import {Transactionlist} from './component/transactionlist';
import {Addtransaction} from './component/addtransaction';
import { GlobalProvider } from './context/golbalstate';

import './App.css';

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className="container">
      <Balance/>
      <Incomexpense/>
      <Transactionlist/>
      <Addtransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
