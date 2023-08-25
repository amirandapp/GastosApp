import  React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import TransaccionForm from './components/transactions/TransaccionForm';
import TransaccionList from './components/transactions/TransaccionList';
import IngresoEgreso from './components/IngresoEgreso';

function App() {
    return (
      <GlobalProvider>
        <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
            <div className=' bg-zinc-800 p-10 rounded-lg flex'>
             <div>
             <Header />
        <Balance />
        <IngresoEgreso />
        <TransaccionForm />
             </div>
        <TransaccionList />
        
            </div>
        </div>
      </GlobalProvider>
        

    )
}

export default  App