import Converter from "./components/Converter";
import { useContext, useEffect } from "react";
import { mainContext } from "./context/CurrencyContext";


function App() {

  let { setData, converterOptions, setConverterOptions } = useContext(mainContext)


  const Currency = () => {
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=eRFp8JVBUuRprAHvbCoYhUV8UP0cHQ8OhYn10wm1")
      .then(res => res.json())
      .then(data => {
        let currencyData = Object.entries(data.data)
        setData(currencyData)

        setConverterOptions({
          ...converterOptions,
          firstOption: currencyData[0][1],
          secondOption: currencyData[1][1]
        })
      })
  }

  useEffect(() => {
    Currency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Converter />
    </>
  );
}

export default App;
