import  React, {useState} from 'react'
import {useGlobalState} from '../../context/GlobalState';

function TransaccionForm() {

    const {addTransaction} = useGlobalState();

    const [description, setDescription] = useState();

    const [amount,setAmount] =useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount
        });

    }


    return (

        <div> 
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Descripcion'
                    onChange={(e) => setDescription(e.target.value)}
                    className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
                />
                <input type='number' placeholder='00.00'
                    onChange={(e) => setAmount(e.target.value)}
                    className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
                />
                <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>
                    Agregar transaccion
                </button>
            </form> 
        </div>
            

        

    )
}

export default  TransaccionForm