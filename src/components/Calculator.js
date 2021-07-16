import React from 'react'
import { DollarSvg } from './DollarSvg'
import { Options } from './Options'

export const Calculator = () => {
    return <div className="calculator">
        <div className="options">
            <Options />
        </div>
        <div className="results">
            Acá irá el resultado
        </div>
    </div>
}
