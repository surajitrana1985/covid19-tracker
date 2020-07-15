import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };

        fetchCountriesAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                <option value="">Global</option>
                {
                    fetchedCountries.map((country, i) =>
                        <option value={country} key={i}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    );

}

export default CountryPicker;
