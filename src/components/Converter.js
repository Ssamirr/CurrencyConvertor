import React, { useContext, useEffect } from 'react'
import { mainContext } from '../context/CurrencyContext'

function Converter() {

    let { data, converterValues, setConverterValues, converterOptions, setConverterOptions } = useContext(mainContext)


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "firstValue") {
            let finalValue = value * converterOptions.secondOption / converterOptions.firstOption
            setConverterValues({ ...converterValues, secondValue: finalValue.toFixed(3), [name]: value })
        } else {
            let finalValue = value * converterOptions.firstOption / converterOptions.secondOption
            setConverterValues({ ...converterValues, firstValue: finalValue.toFixed(3), [name]: value })
        }
    }

    const handleOptions = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setConverterOptions({ ...converterOptions, [name]: value })
    }

    useEffect(() => {
        let finalValue = converterValues.firstValue * converterOptions.secondOption / converterOptions.firstOption;
        finalValue && setConverterValues({ ...converterValues, secondValue: finalValue.toFixed(3) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [converterOptions])

    return (
        <>
            {data.length > 0 &&
                <div className='main'>
                    <div className='converter'>
                        <h1>Currency Converter</h1>
                        <div className='inputs'>

                            <input name='firstValue' type="number" min={0} onChange={handleChange} value={converterValues.firstValue} />
                            <select name='firstOption' value={converterOptions.firstOption} onChange={handleOptions}>
                                <option hidden value={data[0][1]}> {data[0][0]} </option>
                                {data.map((item, key) => (
                                    <option key={key} value={item[1]}> {item[0]} </option>
                                ))}
                            </select>

                        </div>

                        <i className="fa fa-exchange"></i>

                        <div className='inputs'>

                            <input name='secondValue' type="number" min={0} onChange={handleChange} value={converterValues.secondValue}
                            />
                            <select name='secondOption' value={converterOptions.secondOption} onChange={handleOptions}>
                                <option hidden value={data[1][1]}> {data[1][0]} </option>
                                {data.map((item) => (
                                    <option key={item[0]} value={item[1]}> {item[0]} </option>
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