import React from 'react';
import { VictoryPie,  VictoryLabel, } from 'victory';

import { useQuery } from '@apollo/react-hooks'
import { QUERY_CUSTOMER } from '../../utils/queries'
import Auth from '../../utils/auth'

const CustomerSaleByType = (props) => {
    const {transArr} = props
    // const singleCustomer = customer.customer
    console.log('tryingstuff', transArr)
    

   
    let glossy =  0;
    let card =0;
    let print =0;

    const saleType = [
        // {x: "card", y: card},
        // // {x: "Glossy", y: glossy},
        // {x: "Print", y: print},
    ]

    for(const transaction of transArr){
        console.log(transaction.product)
        if(transaction.product == 'glossy'){
            glossy += transaction.units
        }else if(transaction.product == 'card' ){
            card += transaction.units
        }else{
            print += transaction.units
        }

    }

    if(glossy > 0) {
        saleType.push({x:"glossy", y: glossy})
    }
    if(card > 0) {
        saleType.push({x:"card", y: card})
    }
    if(glossy > 0) {
        saleType.push({x:"print", y: print})
    }

    //
    console.log('types', print,glossy,card)
    
    

   

return (
    <div>
        <h3>Sale by Type</h3>
        <svg viewBox="0 0 400 400" >
            <VictoryPie
                colorScale={[ "mistyrose", "lightcyan", "lavender" ]}
                standalone={false}
                width={400} height={400}
                data={saleType}
                innerRadius={70} labelRadius={90}
                style={{ labels: { fontSize: 22, fill: "black"}}}
            />
            <circle cx="200" cy="200" r="65" fill="none" stroke="black" strokeWidth={3}/>
            <circle cx="200" cy="200" r="155" fill="none" stroke="black" strokeWidth={3}/>
            <VictoryLabel
                textAnchor="middle" verticalAnchor="middle"
                x={200} y={200}
                style={{fontSize: 30}}
                text="Label"
            />
        </svg>
    </div>
    )
}

export default CustomerSaleByType;
