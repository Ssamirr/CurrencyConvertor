import React, { createContext, useState } from 'react'

export const mainContext = createContext(null)

function CurrencyContext({ children }) {

    const [data, setData] = useState([]);

    const [converterValues, setConverterValues] = useState({ firstValue: 0, secondValue: 0 })
    const [converterOptions, setConverterOptions] = useState({ firstOption: "", secondOption: "" })

    const values = {
        data,
        setData,
        converterValues,
        setConverterValues,
        converterOptions,
        setConverterOptions
    }

    return (
        <>
            <mainContext.Provider value={values}>{children}</mainContext.Provider>
        </>
    )
}

export default CurrencyContext