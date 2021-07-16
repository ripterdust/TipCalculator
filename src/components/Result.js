import React from 'react'
import { DollarSvg } from './DollarSvg'


export const Result = () => {
    return <>
        <div>
            <div className="info">
                <div className="text">
                    <span>Tip Amount</span>
                    <span className="small">/ person</span>
                </div>
                <div className="numbers">
                    <DollarSvg />
                    <span>0.00</span>
                </div>
            </div>
            <div className="info">
                <div className="text">
                    <span>Total</span>
                    <span className="small">/ person</span>
                </div>
                <div className="numbers">
                    <DollarSvg />
                    <span>0.00</span>
                </div>
            </div>
        </div>
        <button>Reset</button>

    </>
}
