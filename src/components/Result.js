import React from 'react'
import { DollarSvg } from './DollarSvg'


export const Result = ({data}) => {
    
    let {bill, tip, people} = data;

    return <>
        <div>
            <div className="info">
                <div className="text">
                    <span>Tip Amount</span>
                    <span className="small">/ person</span>
                </div>
                <div className="numbers">
                    <DollarSvg />
                    <span>{tip}</span>
                </div>
            </div>
            <div className="info">
                <div className="text">
                    <span>Total</span>
                    <span className="small">/ person</span>
                </div>
                <div className="numbers">
                    <DollarSvg />
                    <span>{ (bill / 100) * tip * people}</span>
                </div>
            </div>
        </div>
        <button>Reset</button>

    </>
}
