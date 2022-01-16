'use strict ';

const Readline = require('readline'); // for reading
const rl = Readline.createInterface({ // for reading
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const matcher = require('./matcher');
const weather = require("./weather");
console.log(`I'm a weather Bot. Ask me the weather in various\x1b[35m cities\x1b[0m accross the world !`)
console.log(`You can say\x1b[34m Hello\x1b[0m to begin, you can also say Bye or Exit to leave the program`)
console.log('Ask\x1b[36m Help\x1b[0m if you need more explanations !\n\nI was created by Benjamin Porterie and Bruno Pincet')
rl.on('line', reply => {
  matcher(reply, cb => {
    
    switch (cb.intent) {

      // check if the weather is sunny or rainy
      // in a specific city
      // at an optionnal specific time

      case 'Is It Sunny Weather':
        const api_result1 = weather(cb.entities.city)

        api_result1.then(function(result) {

          if (cb.entities.time != ('today') && typeof cb.entities.time != 'undefined') {

            console.log(`\x1b[31m Sorry, the prediction for \x1b[36m${cb.entities.time}\x1b[31m is not Available due to API restriction, you have to subscribe to Professional Plan or higher\x1b[0m`)

          }

          else {

            console.log("Meteo Result:")
            a = ""
            if (cb.entities.sunny == 'sunny') {
              if (result.current.weather_descriptions == 'Sunny' ||
                result.current.weather_descriptions == 'Clear') {
                a = 'Yes it is\x1b[36m sunny \x1b[0m'
              }
              else {
                a = `No, it is \x1b[31m${result.current.weather_descriptions}\x1b[0m`
              }
            }
            else {
              if (cb.entities.sunny == 'rainy') {
                if (result.current.weather_descriptions == 'Drizzle' ||
                  result.current.weather_descriptions == 'Patchy rain possible' ||
                  result.current.weather_descriptions == 'Patchy rain' ||
                  result.current.weather_descriptions == 'rain' ||
                  result.current.weather_descriptions == 'Light rain' ||
                  result.current.weather_descriptions == 'Mist, Light Drizzle And Rain' ||
                  result.current.weather_descriptions == 'Light Drizzle'
                ) {
                  a = `Yes it is\x1b[36m ${result.current.weather_descriptions} \x1b[0m`
                }
                else {
                  a = `No, it is \x1b[31m${result.current.weather_descriptions}\x1b[0m`
                }
              }
            }
            console.log(`${a} in \x1b[32m ${result.location.name}, ${result.location.country}.\x1b[0m`)
          }
          console.log(' \n');

        })



        break;

      // check if the weather is cold or warm
      // in a specific city
      // at an optionnal specific time

      case 'Is It temperature Weather':

        const api_result2 = weather(cb.entities.city)
        api_result2.then(function(result) {
          console.log("Meteo Result:")
          a = ""

          if (cb.entities.time != ('today') && typeof cb.entities.time != 'undefined') {
            console.log(`\x1b[31m Sorry, the prediction for \x1b[36m${cb.entities.time}\x1b[31m is not Available due to API restriction, you have to subscribe to Professional Plan or higher\x1b[0m`)
          }

          else {
            if (cb.entities.cold == 'cold') {
              if (result.current.temperature < 7) {
                a = 'Yes it is\x1b[36m cold \x1b[0m'
              }
              else if (result.current.temperature < 25) {
                a = 'Not really, it is\x1b[33m mild \x1b[0m'
              }
              else {
                a = 'No, it is\x1b[31m', "warm", '\x1b[0m'
              }
            }
            else {
              if (result.current.temperature < 7) {
                a = 'No it is\x1b[36m cold \x1b[0m'
              }
              else if (result.current.temperature < 25) {
                a = 'Not really, it is\x1b[33m mild \x1b[0m'
              }
              else {
                a = 'Yes, it is\x1b[31m', "warm", '\x1b[0m'
              }
            }


            console.log(`${a} in \x1b[32m ${result.location.name}, ${result.location.country}.\x1b[0m With ${result.current.temperature} degrees Celsius`)
          }

          console.log(' \n');

        })
        break;


      // give the meteo result
      // in a specific city
      // at an optionnal specific time

      case 'Current Weather':
        const api_result3 = weather(cb.entities.city)
        api_result3.then(function(result) {
          console.log("Meteo Result:")
          if (cb.entities.time != ('today') && typeof cb.entities.time != 'undefined') {
            console.log(`\x1b[31m Sorry, the prediction for \x1b[36m${cb.entities.time}\x1b[31m is not Available due to API restriction, you have to subscribe to Professional Plan or higher\x1b[0m`)
          }

          else {
            a = ""
            if (result.current.temperature < 7) {
              a = '\x1b[36m cold \x1b[0m'
            }
            else if (result.current.temperature < 25) {
              a = '\x1b[33m mild \x1b[0m'
            }
            else {

              a = '\x1b[31m', "hot", '\x1b[0m'
            }

            console.log(`It is very ${a} in \x1b[32m ${result.location.name}, ${result.location.country}.\x1b[0m With ${result.current.temperature} degrees Celsius`)
          }


          if (result.current.pressure < 990) { console.log(`Atmospheric pressure:\x1b[33m ${result.current.pressure}\x1b[0m, it will probably be a rainy day`) }
          else if (result.current.pressure < 1020) { console.log(`Atmospheric pressure:\x1b[33m ${result.current.pressure}\x1b[0m, the weather is variable today`) }
          else { console.log(`Atmospheric pressure:\x1b[33m ${result.current.pressure}\x1b[0m, The weather is good today ! `) }

          if (result.current.wind_speed < 15) { console.log(`Wind speed:\x1b[34m ${result.current.wind_speed} km/h \x1b[0m, The wind is very light today`) }
          else if (result.current.wind_speed < 70) { console.log(`Wind speed:\x1b[34m ${result.current.wind_speed} km/h \x1b[0m, It's a windy day !`) }
          else { console.log(`Wind speed:\x1b[34m ${result.current.wind_speed} km/h \x1b[0m, There is a lot of wind today ! `) }
          console.log(' \n');

        })

        break;



      case 'Hello':
        console.log(`${cb.entities.greeting}, I'm a weather Bot. Ask me the weather in various country accross the world !`)
        console.log(' \n');
        break;
      case 'Exit':
        console.log("End of the program, Bye ! ")
        process.stdout.write('\033c');
        process.exit(1);
      case 'Explanation':
        console.log("Sure!\nTry to write this kind of message :\nHow is the weather in Paris?\nIs it going to be cold in Paris ?\nWill it be cold in Paris today ?")
        console.log(' \n');
        break

      default:
        console.log("Sorry I don't understand, try something else :). You can ask for\x1b[34m Help \x1b[0m!");
        console.log(' \n');

    }
  });
});


rl.setPrompt('>');
rl.prompt();
console.log('\n')

