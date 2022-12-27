import Converter from "./components/Converter";
import { useContext, useEffect } from "react";
import { mainContext } from "./context/CurrencyContext";


function App() {

  let { setData } = useContext(mainContext)


  const Currency = () => {
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=eRFp8JVBUuRprAHvbCoYhUV8UP0cHQ8OhYn10wm1")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(Object.entries(data.data))
      })
  }

  useEffect(() => {
    Currency();
  }, [])

  return (
    <>
      <Converter />
    </>
  );
}

export default App;
