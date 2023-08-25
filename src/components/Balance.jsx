import  {useContext} from 'react';
import { useGlobalState } from '../context/GlobalState';

function Balance() {

    const  {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc +=item), 0)
    return (

        <div> 
            <h3> Tu balance es </h3>

            <h1>${total}</h1>
            <div>
                {JSON.stringify(total, null,2)}
            </div>


        </div>

        

    )
}

export default  Balance