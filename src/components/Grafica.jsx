import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

function Grafica() {
    const { transactions } = useGlobalState();
    const total = transactions.reduce((acc, transaction) => (acc += transaction.amount), 0)
    const totalIngresos = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0);
    const totalEgresos = transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

    const IngresoPorcentaje = Math.round((totalIngresos / totalEgresos) * 100);
    const EgresoPorcentaje = 100 - IngresoPorcentaje;

    return (

        <div className='flex flex-col justify-center items-center'>

            <h3 className='font-bold'> Grafica del balance </h3>

            <VictoryPie
                colorScale={["#FF5733", "#ABABAB"]}
                data={[
                    { x: "Ingresos", y: IngresoPorcentaje },
                    { x: "Egresos", y: EgresoPorcentaje }
                ]}
                labelComponent={<VictoryLabel
                    angle={45}
                    style={{
                        fill: "white"
                    }}

                />}
            />
        </div>





    )
}

export default Grafica