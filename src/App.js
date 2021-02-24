import React, { useEffect, useState } from "react";
import { Cards, Chart, CounteryPicker } from "./components";
import styles from "./scss/app.module.scss";
import { fetchData } from "./api";

const App = () => {
  const [result, setResult] = useState({ data: {}, country: {} });

  useEffect(() => {
    const fetchApi = async (country = "all") => {
      const resulted = await fetchData(country);

      setResult({ data: resulted });
    };
    fetchApi();
  }, []);

  const handleCountriesPicker = async (country) => {
    const resulted = await fetchData(country);

    setResult({ data: resulted, country: country });
  };

  return (
    <div className={styles.container}>
      <h1>Covid19-Tracker </h1>
      <Cards stats={result.data} />
      <CounteryPicker picker={handleCountriesPicker} />
      <Chart stats={result.data} country={result.country} />
    </div>
  );
};

export default App;
