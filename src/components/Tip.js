import React from 'react'

export const Tip = () => {
    return <div className="tip">
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
}