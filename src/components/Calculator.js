import React, {useState} from 'react'
import { Options } from './Options'
import { Result } from './Result'


export const Calculator = () => {
    const [data, setData] = useState({
        bill: 0,
        tip: 0,
        people: 0,
        active: false
    });

    return <div className="calculator">
        <div className="options" >
            <Options setData={setData} />
        </div>
        <div className="results">
            <Result data={data}/>
        </div>
    </div>
}
