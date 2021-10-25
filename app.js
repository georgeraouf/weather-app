const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=ae1032a27c3d1138ca1d79ff5ae6a6d7&query=New%20York&units=f';

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
});


const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2VvcmdlcmFvdWYiLCJhIjoiY2t2NnNmam90MXhjOTJ2b3ZjdDlkN3o0dyJ9.pji4RSjG4_hBfJ8QBQ-5WQ&limit=1'
request({ url:  geocodeUrl, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
});