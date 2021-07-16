import React from 'react'

export const Calculator = () => {
    return <div className="calculator">
        <div className="options">
            <div className="inputs bill">
                <span>
                    Bill
                </span>
                <input type="text" name="bill" />
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
        </div>
        <div className="results">
            Acá irá el resultado
        </div>
    </div>
}
