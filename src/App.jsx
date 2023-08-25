import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import TransaccionForm from './components/transactions/TransaccionForm';
import TransaccionList from './components/transactions/TransaccionList';
import IngresoEgreso from './components/IngresoEgreso';
import Grafica from './components/Grafica';

function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
        <div className='conatiner mx-auto w2/5 '>
        <div className='text-4xl font-bold flex justify-center items-center p-5'>
                App de Gastos por AMIRAPP
        </div>
          <div className=' bg-zinc-800 p-5 rounded-lg flex gap-x-5'>
            <div>              
              <Balance />
              <IngresoEgreso />
              <TransaccionForm />
            </div>
            <div className='flex flex-col'>
              <TransaccionList />
              <Grafica />
            </div>

          </div>
        </div>
      </div>
    </GlobalProvider>


  )
}

export default App