var axios = require('axios');

const API_KEY = 'b0c7f618fd1b808ab4e455a6f3888213';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=770aa7b6e360d1dd309e18e1195522d3&units=imperial`;
module.exports = {
  //To cover encoded issues in the URL
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var request = `${OPEN_WEATHER_MAP_URL}&q=${location}`;
    
    return axios.get(request).then(function (res) {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        console.log(res);
        return res.data.main.temp;
      }
    }, function(res) {
      throw newError(res.data.message);
    });
  }
};