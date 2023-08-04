import {createStore} from 'vuex';

const store = createStore({
    state: {
        savedCities: [],
        city: ''
    }
})

export default store;