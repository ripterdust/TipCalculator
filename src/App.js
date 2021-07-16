import React, { useState } from 'react'
import { Calculator } from './components/Calculator'
import { ValueContext } from './components/ValueContext'
import './styles/main.scss'



export const App = () => {

    const [contextData, setContextData] = useState({
        bill: 0,
        tip: 0,
        people: 0
    })

    return (
        <ValueContext.Provider value={{contextData, setContextData}}>
            <div className="main_container">
                <span className="title">SPLI<br/>TTER</span>
                <Calculator />
            </div>
        </ValueContext.Provider>
    )
}
