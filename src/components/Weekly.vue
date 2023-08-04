<template>
    <div class="justify-center text-center text-3xl mt-20">
        <h1>Hourly data</h1> 
        <div class="grid grid-cols-7 gap-32 justify-center ml-20">
        <div v-for="data in forecastData">
            <WeeklyCard :temp="data.main.temp" :desc="data.weather[0].description" :time="data.dt_txt" />
        </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted} from "vue";
import WeeklyCard from "./WeeklyCard.vue";
export default {
    name: "Weekly",
    props: ["query"],
    setup(props) {
        const forecastData = ref([]);
        const api_key = import.meta.env.VITE_API_KEY;
        const url_base = "https://api.openweathermap.org/data/2.5/";
        function getForecastData() {
            const apiUrl = `${url_base}forecast?q=${props.query}&appid=${api_key}`;
            fetch(apiUrl)
                .then(response => { return response.json(); })
                .then(data => {
                console.log(data);
                filterResponse(data.list);
                console.log(forecastData.value);
            })
                .catch(error => {
                console.error("error", error);
            });
        }
        ;
        function filterResponse(data) {
            forecastData.value = data.filter((data) => {
                let yourDate = new Date();
                return data.dt_txt.split(" ")[0] === yourDate.toISOString().split("T")[0];
            });
        }
        onMounted(() => {
            getForecastData();
        });

        return{
            forecastData
        }
    },
    components: { WeeklyCard }
}

</script>