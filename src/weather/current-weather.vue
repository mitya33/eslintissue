<template>
	<div>
		{{weather}}
	</div>
</template>

<script lang=ts>
import {defineComponent, onMounted} from 'vue';
import {useWeather} from './weather.service';
export default {
	setup() {
		const {weather, fetchWeather} = useWeather();
		onMounted(fetchWeather);
		return {
			weather
		}
	}
}
</script>

<style>
div { border: solid 14px lightcoral; }
</style>