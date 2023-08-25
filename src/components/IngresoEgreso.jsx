import { useContext } from 'react';
import { useGlobalState } from '../context/GlobalState';

function IngresoEgreso() {

    const { transactions } = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const ingreso = amounts.reduce((acc, item) => (item > 0 ? acc += item : acc), 0)

    const egreso = amounts.reduce((acc, item) => (item < 0 ? acc += item : acc), 0) * -1;
    return (

        <div>
            <div className='flex justify-between'>
                <h3> Tu ingreso es de  </h3>

                <h1>${ingreso.toLocaleString("en")}</h1>
            </div>

            <div className='flex justify-between'>
                <h3> Tu egreso es de  </h3>

                <h1>${egreso.toLocaleString("en")}</h1>
            </div>

        </div>



    )
}

export default IngresoEgreso