<template>
  <main class="container text-white bg-emerald-950" >
    
    <div class=" pt-4 mb-8 relative w-screen bg-emerald-950 ">
      <input type="text"
      v-model="query"
       placeholder="Search for the place"
      class="py-2 pl-8 px-1 w-full bg-transparent border-b focus: border-secondary focus:outline-none text-lg placeholder:text-secondary"
      @keypress="fetchWeather">



      <div v-if="!isSearched && !showWeekly" >
        <div className=" flex flex-row sm:flex-row gap-10  ">
         <img src="../assets/Summer.png" className="pr-20 ml-5 hidden sm:block"/>
         <div className="flex flex-col">
          <h2 className="text-left items-center justify-center mr-20 mt-20 text-3xl font-medium" style="margin-top: 130px;">
            Welcome to the world near, far, and 
          </h2>
          <h1 className="text-left items-center justify-center mr-20 mt-10 text-5xl font-bold text-lime-400">
            Around You
          </h1>
          <p className="w-4/5 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>
         </div>
        </div>
      </div>
      
      <ul
        class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
        v-if="mapboxSearchResults" >
        <p class="py-2" v-if="searchError">
          Sorry, something went wrong, please try again.
        </p>
        <p
          class="py-2"
          v-if="!searchError && mapboxSearchResults.length === 0"
        >
          No results match your query, try a different term.
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
    
    <div v-if="error!=null">
      {{ error }}
    </div>

     <div v-show="weather" class="weather-wrap flex flex-col flex-1 items-center w-screen justify-center text-white shadow-lg" style="margin-top: -25rem;">

      <div class="weather-wrap flex flex-col flex-1 items-center w-screen justify-center mt-10 text-white shadow-lg "  >
          <div class="location-box text-white p-4 backdrop-blur-lg shadow-xl w-96 text-center rounded-t-md">
            <div class="location text-2xl pb-2 font-sans font-bold">{{ weather?.name }}, {{ weather?.sys?.country }}</div>
            <div class="date text-xl italic">{{ dateBuilder() }}</div>
          </div>

          <div class="weather-box justify-center text-center backdrop-blur-lg w-96 pr-3 rounded-b-md pb-2 shadow-lg ">
            <div class="temp text-5xl font-black pt-4">{{ Math.floor(weather?.main?.temp - 273.15) }}°C</div>
            <div class="weather text-3xl font-semibold pt-2 ">{{ weather?.weather[0]?.main }}</div>
            <div class="weather justify-center items-center flex">
              <img :src="icon" alt="weather icon" class="content-center justify-center">
            </div>
            <div class="weather  pb-1 pt-5 ">Timezone: {{ weather?.timezone }}   |   Visibility: {{ weather?.visibility }}</div>
            <div class="weather pb-5 ">Humidity: {{ weather?.main?.humidity }}   |   Pressure: {{ weather?.main?.pressure }}</div>
            <div class="weather pb-5 ">Min: {{ Math.floor(weather?.main?.temp_min - 273.15)}}°C  |   Max: {{ Math.floor(weather?.main?.temp - 273.15) }}</div>
            
            <img class="w-[150pv] h-auto">
         <hr class="border-white border-opacity-10 border w-full" />
         </div>
     
         <div v-if="showWeekly">
          <Weekly :query="query"/>
         </div>

         <div class="flex flex-row justify-end">
    <div class=" Liked flex justify-end pl-5 mb-16">
      <RouterLink to="/fovorite">
      <button class="bg-secondary text-lg text-baisc hover:bg-baisc hover:text-white mt-10 font-semibold py-2 px-4 rounded">
   View Favorites</button>
  </RouterLink>
    </div>
    </div>

          <!--weekly weather-->

        <!-- <div>
          <button @click="getForecastData">Get Weekly Data</button>
            <div v-if="forecastData.length > 0">
            <div v-for="forecast in forecastData" :key="forecast.dt">
             <p>Date: {{ formatDate(forecast.dt) }}</p>
             <p>Temperature: {{ forecast.temp }}°C</p>
      </div>
    </div>
    
        </div> -->

        </div>
    </div> 
  </main>
  
</template>

<script>
import { ref, computed } from 'vue';
import Weekly from '../components/WeeklyCard.vue';
import store from '../store/store';
export default {
  name: 'home',
  components: {
    Weekly
  },

  setup() {
    const api_key= import.meta.env.VITE_API_KEY;
    const url_base= 'https://api.openweathermap.org/data/2.5/';
    const query= ref('');
    const weather= ref(null);
    const error = ref(null);
    const showWeekly = ref(false);
    const icosn = 'https://openweathermap.org/img/wn/10d@2x.png';
    const isSearched = ref(false);
    const icon = computed(()=>{
      return `https://openweathermap.org/img/wn/${weather?.value?.weather[0].icon}@2x.png`
    })
  
    function fetchWeather(event)  {
      console.log("clicked")
      if (event.key == "Enter") {
        fetch(`${url_base}weather?q=${query.value}&appid=${api_key}`)
          .then(res => {
            return res.json();
          }).then(res =>{ weather.value = res;
            showWeekly.value = true;
            isSearched.value = true; 
          console.log(weather.value)
          store.state.city = query;
          console.log("city",store.state.city)
        })
        .then(res =>  {
          if (res && res.list) {
            weather.value = res.list.slice(0, 5); 
          }
          
        })
          .catch(err=> {
            error.value = err.message;
            console.log("error", err.message)})
      }    
    }


    function dateBuilder() {
      const d= new Date();
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      const day = days[d.getDay()];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
     }


    return {
      error,
      fetchWeather,
      dateBuilder,
      weather,
      query,
      showWeekly,
      icon,
      isSearched
    };
    },

   }
   
  
  
  
</script>

