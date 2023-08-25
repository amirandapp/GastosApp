import  React, {useState} from 'react'
import {useGlobalState} from '../../context/GlobalState';

function TransaccionList() {

    const {transactions,deleteTransaction} = useGlobalState();

    return (

        <>
            <div>
            <ul> {
            transactions.map(transactions => (
                <div>
                    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center' key={transactions.id}>
                        <p className='px-2'>{transactions.description}</p>
                        <div>
                        <span className='px-2'>${transactions.amount.toLocaleString("en")}</span>
                        <button className='px-2' onClick={() =>{
                            deleteTransaction(transactions.id);
                        }}>X</button>
                        </div>
                </li>
                </div>

            ))
            }
            </ul>
            </div>        
        </>
            

        

    )
}

export default  TransaccionList