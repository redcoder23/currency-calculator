import { useEffect, useState } from "react";

function usecurrencyinfo(currency) {
    const [data, usedata] = useState({});
    useEffect(() => {
        async function toget() {
            const wait = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            const result = await wait.json();
            usedata(result[currency]);
        }
        toget();
    }, [currency]);
    return data;
};
export default usecurrencyinfo;