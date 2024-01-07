<template>
 
    <div
      class="flex flex-col py-6 backdrop-blur-3xl bg-white opacity-50 rounded-md shadow-md cursor-pointer gap-2 mb-6 w-52 text-center ml-28 mt-10"
      :v-if="weather" 
    >
      <div class="flex flex-col flex-1 text-primary text-center font-semibold" >
        <h2 class="text-3xl  text-center">{{ city }}</h2>
        <p class="text-center">{{ weather?.sys?.country }}</p>
        
      </div>
  
      <div class="flex flex-col flex-1 text-black text-center ">
         <p class="text-3xl pl-4 text-center font-bold">
          {{ Math.floor(weather?.main?.temp - 273.15) }}&deg;</p>
          <p class="text-xl pl-4 text-center">{{ weather?.weather[0]?.main }}</p>
        </div>

      </div> 

      
  </template>
  
  <script>
import { ref } from 'vue';


    export default{
        name: "CityCard",
        props : ['city'],
        setup(props){
            const weather = ref(null);
            const api_key= import.meta.env.VITE_API_KEY;
    const url_base= 'https://api.openweathermap.org/data/2.5/';
    const error = ref(null);
                fetch(`${url_base}weather?q=${props.city}&appid=${api_key}`)
                .then((res)=>{
                    return res.json()
                })
                .then((res)=>{
                  console.log('response',res);
                    weather.value = res;
                })

                return{
                  weather
                }
        }
    }
  </script>
