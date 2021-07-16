import React from 'react'
import { DollarSvg } from './DollarSvg'


export const Result = () => {
    return <>
        <div>
            <div className="info">
                <div>
                    <div className="text">
                        <span>Tip</span>
                        <span>/ person</span>
                    </div>
                    <div className="numbers">
                        <DollarSvg />
                        <span>0.00</span>
                    </div>
                </div>
            </div>
            <div className="info">
                <div>
                    <div className="text">
                        <span>Total</span>
                        <span>/ person</span>
                    </div>
                    <div className="numbers">
                        <DollarSvg />
                        <span>0.00</span>
                    </div>
                </div>
            </div>
        </div>
        <button>Reset</button>

    </>
}
