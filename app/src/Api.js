import AsyncStorage from '@react-native-async-storage/async-storage'
const BASE_URL = 'https://api.b7web.com.br/devbarber/api';

export default {
    checkToken: async (token) => {
        const request = await fetch(`${BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });

        const json = await request.json();
        return json;
    },

    signIn: async (email, password) => {
        const request = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const json = await request.json();
        return json;
    },

    signUp: async (name, email, password) => {
        const request = await fetch(`${BASE_URL}/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });

        const json = await request.json();
        return json;
    },

    getBarbers : async (lat = null, lng=null, locationText = null) => {
        const token = await AsyncStorage.getItem('token');

        const response = await fetch(`${BASE_URL}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${locationText}`);

        const responseAsJson = await response.json();
        return responseAsJson;
    }

};