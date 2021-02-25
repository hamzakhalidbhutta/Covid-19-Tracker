import React, { useState, useEffect } from "react";
import { fetchCountriesNames } from "./../../api";
 import { NativeSelect } from "@material-ui/core";
const CountryPicker = ({ picker }) => {
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
      <NativeSelect
        name="countriesPicker"
        onChange={(e) => {
          picker(e.target.value);
        }}
        id="countriesPicker"
      >
         <option value="all">
            {"Around the world"}
          </option>
        {countriesNames.map((v, i) => (
         
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </NativeSelect>
    </div>
  );
};

export default CountryPicker;
