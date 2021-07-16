import React from 'react'
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
            <div className="tip">
                <span>
                    Select Tip %
                </span>
                <div className="buttons">
                    <div className="btn">5%</div>
                    <div className="btn">10%</div>
                    <div className="btn">15%</div>
                    <div className="btn">25%</div>
                    <div className="btn">50%</div>
                    <input type="text" placeholder='Custom' />
                </div>
            </div>
            <div className="inputs people">
                <span>Number of people</span>
                <input type="text" />
            </div> 
        </>

}
