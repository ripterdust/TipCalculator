import React from 'react'
import { DollarSvg } from './DollarSvg'


export const Result = ({dataProp}) => {
    
    const { data, setData } = dataProp;
    let { tip, bill, people } = data;

    const buttonHandle = () => {
        setData({
            tip: 0,
            bill: 0,
            people: 0
        })
    }

    let tipAmount = parseFloat((bill / 100) * tip).toFixed(2);
    let total = parseFloat((bill/100) * tip * people).toFixed(2);
    return <>
        <div>
            <div className="info">
                <div className="text">
                    <span>Tip Amount</span>
                    <span className="small">/ person</span>
                </div>
                <div className="numbers">
                    <DollarSvg />
                    <span>{tipAmount}</span>
                </div>
            </div>
            <div className="info">
                <div className="text">
                    <span>Total</span>
                    <span className="small">/ person</span>
                </div>
                <div className="numbers">
                    <DollarSvg />
                    <span>{ total }</span>
                </div>
            </div>
        </div>
        <button onClick={buttonHandle}>Reset</button>

    </>
}
