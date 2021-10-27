const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=ae1032a27c3d1138ca1d79ff5ae6a6d7&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find the location!');
    }
    else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
    }
});


const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2VvcmdlcmFvdWYiLCJhIjoiY2t2NnNmam90MXhjOTJ2b3ZjdDlkN3o0dyJ9.pji4RSjG4_hBfJ8QBQ-5WQ&limit=1'
request({ url:  geocodeUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to get the location. Try with different term.');
    }  else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
});