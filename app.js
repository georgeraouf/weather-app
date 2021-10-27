const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

address = process.argv[2];

if(address) {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error);
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            
            console.log(data.location);
            console.log(forecastData);
        });    
    });  
}
else {
    console.log('No address is provided!');
}

