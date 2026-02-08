import { useState } from "react";
import "./App.css";
import InputBox from "./components/Inputbox";
import usecurrencyinfo from "./hooks/usecurrencyinfo";

function App() {
  const [amount, setamount] = useState("0");
  const [from, setfrom] = useState("inr");
  const [to, setto] = useState("usd");
  const [convertedamount, setconvertedamount] = useState("0");

  const currencyinfo = usecurrencyinfo(from);
  const options = Object.keys(currencyinfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };

  const convert = () => {
    setconvertedamount(amount * currencyinfo[to]);
  };

  return (
    <div
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1170&auto=format&fit=crop')`,
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "10px",
    }}
  >  
          <div> 
        <InputBox
          label="From"
          amount={amount}
          currency={from}
          currencyarr={options}
          changecurramountf={(amount) => setamount(amount)}
          changecurrencyf={(currency) => setfrom(currency)}
          />
          </div>
            
          <div> 
        <button className="swap-btn" onClick={swap}>
          ⇅ Swap
        </button>
          </div>
 
   <div> 

        <InputBox
          label="To"
          amount={convertedamount}
          currency={to}
          currencyarr={options}
          changecurrencyf={(to) => setto(to)}
          />
          </div>
         <div> 
        <button className="convert-btn" onClick={convert}>
          Convert {from.toUpperCase()} → {to.toUpperCase()}
        </button>
         </div>
    </div>
  );
}

export default App;
