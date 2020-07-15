import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableURL = URL;
    if (country) {
        changeableURL = `${URL}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);
        const dailyData = data.map((item) => ({
            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            date: item.reportDate
        }));
        return dailyData;
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${URL}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {

    }
}
