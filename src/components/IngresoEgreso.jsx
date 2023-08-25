import  {useContext} from 'react';
import { useGlobalState } from '../context/GlobalState';

function IngresoEgreso() {

    const  {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const ingreso = amounts.reduce((acc, item) => (item > 0 ? acc += item :  acc), 0)

    const egreso = amounts.reduce((acc, item) => (item < 0 ? acc += item :  acc), 0)*-1;
    return (

        <div> 
            <h3> Tu ingreso es de  </h3>

            <h1>${ingreso}</h1>

            <h3> Tu egreso es de  </h3>

            <h1>${egreso}</h1>



        </div>

        

    )
}

export default  IngresoEgreso