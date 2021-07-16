import React from 'react'
import { Options } from './Options'
import { Result } from './Result'


export const Calculator = () => {
    return <div className="calculator">
        <div className="options">
            <Options />
        </div>
        <div className="results">
            <Result />
        </div>
    </div>
}
