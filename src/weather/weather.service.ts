import {ref} from 'vue';
import {OneWeather} from './one-weather.model';
import { Geolocation } from '@capacitor/geolocation';

const apiKey = 'f3a749af8684629a52206672e5d36ce1';
const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly&appid=${apiKey}`;
const weather = ref<OneWeather>()
 
export const useWeather = () => ({
	weather,
	fetchWeather
});

const fetchWeather = async () => {
	const {coords} = await Geolocation.getCurrentPosition();
	const response = await fetch(`${weatherUrl}&lat=${coords.latitude}&long=${coords.longitude}`);
	weather.value = await response.json();
};