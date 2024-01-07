<template>
  <main class="container text-white " >
    
    <div class=" pt-4 mb-8 relative w-screen">
      <input type="text"
      v-model="query"
       placeholder="Search for the place"
      class="py-2 pl-8 px-1 w-full bg-transparent border-b focus: border-secondary focus:outline-none text-lg placeholder:text-secondary"
      @keypress="fetchWeather">



      <div v-if="!isSearched && !showWeekly" >
        <div className=" flex flex-row sm:flex-row gap-10 rounded ">
\         <div className="flex flex-col justify-center text-center items-center lg:ml-[300px] sm:ml-[100px] mt-10 w-1/2 backdrop-blur-3xl rounded-lg">
          <h2 className="text-left items-center justify-center mt-5 text-3xl font-medium back-blur-lg" >
            Welcome to the world near, far, and 
          </h2>
          <h1 className="text-left items-center justify-center mt-5 text-5xl font-bold text-slate-50">
            Around You
          </h1>
          <p className="w-4/5 mt-5 mb-5">
            Around You is a weather application that provides real-time weather updates for cities around the globe. The project is built using VueJS, VueX, TailwindCSS, and the Open Weather API. This application serves as a comprehensive example of working with JavaScript libraries, styling libraries, and API integrations within a project.
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

     <div v-show="weather" class="weather-wrap flex flex-col flex-1 items-center w-screen justify-center text-white shadow-lg" style="margin-top: -40rem;">

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
    <div class=" Liked flex justify-end pl-5 mb-30">
      <RouterLink to="/fovorite">
      <button class="bg-secondary text-lg text-baisc hover:bg-baisc hover:text-white mt-10 font-semibold py-2 px-4 rounded">
   View Favorites</button>
  </RouterLink>
    </div>
    </div>
    

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
    const isSearched = ref(false);
     const icon = computed(()=>{
      return `https://openweathermap.org/img/wn/${weather?.value?.weather[0].icon}@2x.png`
    })
  
    function fetchWeather(event)  {
  if (event.key == "Enter") {
    fetch(`${url_base}weather?q=${query.value}&appid=${api_key}`)
      .then(res => res.json())
      .then(res => {
        if (res.cod === 200) {
          weather.value = res;
          showWeekly.value = true;
          isSearched.value = true; 
          console.log(weather.value);
          store.state.city = query;
          console.log("city", store.state.city);
        } else {
          // Handle API error, you might want to set error.value here.
          console.error(res.message);
        }
      })
      .catch(err => {
        error.value = err.message;
        console.log("error", err.message);
      });
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
