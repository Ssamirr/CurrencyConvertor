import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../context/CurrencyContext'

function Converter() {

    let { data } = useContext(mainContext)

    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const getFirstValue = (e) => {
        setFirstValue(e.target.value);
        setSecondValue(e.target.value*secondOption/firstOption);
    }

    const getSecondValue = (e) => {
        setSecondValue(e.target.value);
        setFirstValue(e.target.value*firstOption/secondOption);
    }

    const getFirstOption = (e) => {
        setFirstOption(e.target.value);
        setSecondValue(e.target.value*secondOption/firstOption);
    }

    const getSecondOption = (e) => {
        setSecondOption(e.target.value);
        setFirstValue(e.target.value*firstOption/secondOption);
    }

    return (
        <>
            {data &&
                <div className='main'>
                    <div className='converter'>
                        <h1>Currency Converter</h1>
                        <div className='inputs'>

                            <input type="number" min={0} onChange={getFirstValue} value={firstValue} />
                            <select value={firstOption} onChange={getFirstOption}>
                                <option hidden>Select Currency</option>
                                {data.map((item, key) => (
                                    <option key={key} value={item[1]}> {item[0]} </option>
                                ))}
                            </select>
                        </div>

                        <i className="fa fa-exchange"></i>

                        <div className='inputs'>
                            <input type="number" min={0} onChange={getSecondValue} value={secondValue} />
                            <select value={secondOption} onChange={getSecondOption}>
                                <option hidden>Select Currency</option>
                                {data.map((item, key) => (
                                    <option key={key} value={item[1]}> {item[0]} </option>
                                ))}
                            </select>
                        </div>

                        <h1 className='converter-text'>Currency Converter</h1>

                    </div>
                </div>
            }
        </>
    )
}

export default Converter