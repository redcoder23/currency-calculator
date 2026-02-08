import { useState } from "react";
import "./App.css"; 
import index from "./components/index"
import InputBox from "./components/Inputbox";
import usecurrencyinfo from "./hooks/usecurrencyinfo"

function App() { 
      const [amount,setamount]=useState('0'); 
      const [currency,changecurrency]=useState('usd');  
      const[from ,setfrom]=useState('usd');
      const[to ,setto]=useState('inr'); 
      const[convertedamount,setconvertedamount]=useState('0'); 
      const  currencyinfo=usecurrencyinfo(from); 

      const options=Object.keys(currencyinfo); 
      const swap=()=>{ 
         setfrom(to) ;
         setto(from); 
         setconvertedamount(amount); 
         setamount(convertedamount); 
      }  
       
      const convert=()=> {
      setconvertedamount(amount*currencyinfo[to]); 
      }
    return (
        <div style={{position:'flex',direction:'column',backgroundImage:`url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>  
              <InputBox 
                label="from"
                amount={amount} 
                currencyarr={options} 
                changecurramountf={(amount)=>setamount(amount)} 
                changecurrencyf={(currency)=>changecurrency(currency)}
                />   
             <button style={{color:'blue'}} onClick={swap}>swap</button>
        <InputBox  
        label="to" 
        amount={convertedamount} 
        currencyarr={options} 
        changecurrencyf={(currency)=>changecurrency(currency)}
        />  
        <button style={{color:'blue'}} onClick={convert}>convert {from.toUpperCase} to {to.toUpperCase}</button>
       </div> 
  ); 
}

export default App;
