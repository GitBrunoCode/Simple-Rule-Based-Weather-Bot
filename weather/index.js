"use strict ";
const axios = require("axios");
const apikey =  // put your api key generated by the website Here; 

const getWeather = (location) => {
  return new Promise(async (resolve, reject) => {
    try {
      const weatherConditions = await axios.get('http://api.weatherstack.com/forecast',
        { 
            params: {
              access_key: apikey,
              query: String(location),
              
          }
        });

      resolve(weatherConditions.data) // returns back the results to the chatbot
    }
    catch (error) {
      reject(error);
    }
  });
}

module.exports = getWeather;



