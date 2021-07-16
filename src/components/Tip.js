import React from 'react'

export const Tip = () => {


    const removeClasess = () => {
        let elements = document.getElementsByClassName('btn');
        for(let i = 0; i< elements.length; i++){
            elements[i].classList.remove('active');
        }
        
    }

    const clickDiv = (e, p) => {
        removeClasess();
        document.querySelector(`#btn${p}`).classList.add('active');
    };

    return <div className="tip">
        <span>
            Select Tip %
        </span>
        <div className="buttons">
            <div className="btn" id='btn5' onClick={e => clickDiv(e, 5)}>5%</div>
            <div className="btn" id='btn10' onClick={e => clickDiv(e, 10)}>10%</div>
            <div className="btn" id='btn15' onClick={e => clickDiv(e, 15)}>15%</div>
            <div className="btn" id='btn25' onClick={e => clickDiv(e, 25)}>25%</div>
            <div className="btn" id='btn50' onClick={e => clickDiv(e, 50)}>50%</div>
            <input type="text" placeholder='Custom' />
        </div>
    </div>
}