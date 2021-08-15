<template>
	<div>
		<current-weather />
	</div>
</template>

<script lang=ts>
import {defineComponent} from 'vue';
import CurrentWeather from './current-weather.vue';
export default defineComponent({
	components: {
		CurrentWeather,
	}
});
</script>

<style>

</style>