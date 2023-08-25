import  {useContext} from 'react';
import { useGlobalState } from '../context/GlobalState';

function Balance() {

    const  {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += parseFloat(item) ), 0)
    return (

        <div className='flex justify-between'> 
            <h3> Tu balance es </h3>

            <h1 className='font-bold'>${total.toLocaleString("en")}</h1>
            


        </div>

        

    )
}

export default  Balance