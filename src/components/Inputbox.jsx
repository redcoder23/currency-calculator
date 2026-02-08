import React from "react";
function InputBox({ 
    currencyarr=[], 
    label,
    amount=0,
    changecurramountf, 
    changecurrencyf,
    currency="usd"
}) {  
  return ( 
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        position: "relative",
        width: "70vw", 
        height:'40vh',          
        maxWidth: "500px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "24px",       
        boxSizing: "border-box",
        gap: "24px",
        borderRadius: "8px",
      }}
    >
      <div className="form-group">
        <label
          htmlFor="amount"
          style={{
            color: "black",
            marginBottom: "8px",
            display: "block",
            fontSize: "16px",    
          }}
        >
          {label}
        </label>

        <input
          type="number"
          id="amount"
          className="form-control"
          placeholder="Enter amount"
          onChange={(e)=>{changecurramountf && changecurramountf(Number(e.target.value))}} 
          value={amount}
          style={{
            width: "100%",  
            height: "48px",     
            fontSize: "16px",    
          }}
        />
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <label
            className="input-group-text"
            htmlFor="currency"
            style={{
              fontSize: "16px",
              padding: "0 14px", 
              color:'black'
            }}
          >
            {label}
          </label>
        </div>

        <select
          className="custom-select"
          id="currency"
          style={{
            width: "100%",       
            height: "48px",      
            fontSize: "16px",
          }}  
          value={currency}
          onChange={(e)=>changecurrencyf && changecurrencyf(e.target.value)}
        >
         {currencyarr.map((currency)=>( 
             <option key={currency} value={currency}> 
                {currency}
             </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
