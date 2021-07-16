import React from 'react'
import { Tip } from './Tip'
import { DollarSvg } from './DollarSvg'


export const Options = () => {

    return <>
           <div className="inputs bill">
                <span>
                    Bill
                </span>
                <div className="">
                    <input type="text" name="bill" />
                    <DollarSvg />
                </div>
            </div>
            <Tip />
            <div className="inputs people">
                <span>Number of people</span>
                <input type="text" />
            </div> 
        </>

}
