import React, { createContext, useState } from 'react'

export const mainContext = createContext(null)

function CurrencyContext({children}) {

    const [data, setData] = useState([]);

    const values = {
        data,
        setData
    }

    return (
        <>
            <mainContext.Provider value={values}>{children}</mainContext.Provider>
        </>
    )
}

export default CurrencyContext