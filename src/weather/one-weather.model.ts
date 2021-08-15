interface Weather {
	id: number;
	main: string;
	icon: string;
	description: string;
}

interface FeelsLike {
	day: number;
	eve: number;
	night: number;
	morn: number;
}

interface Temperature extends FeelsLike {
	max: number;
	min: number;
}

interface CurrentWeather {
	feelsLike: number;
	humidity: number;
	sunrise: number;
	sunset: number;
	temp: number;
	weather: Weather[];
	windSpeed: number;
}

interface DailyWeather {
	feelsLike: FeelsLike;
	humidity: number;
	sunrise: number;
	sunset: number;
	temp: Temperature;
	weather: Weather[];
	windSpeed: number;
}

export interface OneWeather {
	current: CurrentWeather;
	daily: DailyWeather[];
}