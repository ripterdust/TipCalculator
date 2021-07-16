import React, { useEffect, useState } from 'react'

export const Tip = React.memo(({ setData }) => {

    const [porcentage, setPorcentage] = useState({
        tip: 0
    });

    useEffect(() => {
        setData(data => ({
            ...data,
            tip: porcentage.tip
        }))
    }, [setData, porcentage])

    const removeClasess = () => {
        let elements = document.getElementsByClassName('btn');
        for(let i = 0; i< elements.length; i++){
            elements[i].classList.remove('active');
        }        
    }

    const clickDiv = (e, p) => {
        removeClasess();

        document.querySelector('#inputTip').value = ''
        document.querySelector(`#btn${p}`).classList.add('active');

        setPorcentage({
            ...porcentage,
            tip: p
        })
    };

    const handleInputChange = ({ target }) => {
        removeClasess();
        setPorcentage({
            ...porcentage,
            tip: parseInt(target.value)
        })
    }

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
            <input type="number" id='inputTip' placeholder='Custom' onChange={handleInputChange} />
        </div>
    </div>
})