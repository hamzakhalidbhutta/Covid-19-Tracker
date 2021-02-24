import React, { useState, useEffect } from "react";
import { fetchCountriesNames } from "./../../api";

const CountryPicker = ({picker}) => {
  const [countriesNames, setCountriesNames] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesNames = await fetchCountriesNames();
      setCountriesNames(await countriesNames);
    };
    fetchCountries();
  }, [setCountriesNames]);

  return (
    <div className="counteryPickerContainer">
      <select name="countriesPicker" onChange={(e)=>{ picker(e.target.value) }} id="countriesPicker">
        {countriesNames.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
