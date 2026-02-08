import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  let [data, setData] = useState({});

  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const currData = res[currency];
        setData(currData);
        console.log(currData);
      })
      .catch((err) => {
        console.log("error will fetching the data", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
