import { createContext, useState } from "react";
import dados from "../../data/dados";
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [principal, setPrincipal] = useState("pt");
  const [traduzir, setTraduzir] = useState("en");
  const [iniciar, setIniciar] = useState(false);
  const [counter, setCounter] = useState(0);
  const [linguagem, setLinguagem] = useState(principal);

  const handleChangePrincipal = (event) => {
    setPrincipal(event.target.value);
  };

  const handleChangeTraduzir = (event) => {
    setTraduzir(event.target.value);
  };

  const handleStart = () => {
    setIniciar(!iniciar);
    handleLinguagem()
    setLinguagem(principal)
  };

  const handleLinguagem = () => {
    linguagem === principal ? setLinguagem(traduzir) : setLinguagem(principal);
  };

  const handleIncrement = () => {
    dados.length > counter + 1 ? setCounter(counter + 1) : setCounter(0);
    setLinguagem(principal);
  };
  const handleDecrement = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(dados.length - 1);
    setLinguagem(principal);
  };

  return (
    <LanguageContext.Provider
      value={{
        principal,
        traduzir,
        iniciar,
        counter,
        linguagem,
        handleChangePrincipal,
        handleChangeTraduzir,
        handleStart,
        handleLinguagem,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
