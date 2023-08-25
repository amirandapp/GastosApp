import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

function Grafica() {
    const { transactions } = useGlobalState();
    const total = transactions.reduce((acc, transaction) => (acc += transaction.amount), 0)
    const totalIngresos = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0)
    const totalEgresos = transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

    return (

        <div> Aqui va la grafica

            <VictoryPie
            colorScale={["FF5733","ABABAB"]}
                data={[
                    { x: "Ingresos", y: totalIngresos },
                    { x: "Egresos", y: totalEgresos }
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