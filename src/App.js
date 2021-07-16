import React from 'react'
import { Calculator } from './components/Calculator'
import './styles/main.scss'


export const App = () => {
    return (
        <div className="main_container">
            <span>SPLI<br/>TTER</span>
            <Calculator />
        </div>
    )
}
