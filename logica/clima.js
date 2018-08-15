axios = require('axios')

const getClima = async(theLat, theLng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${theLat}&lon=${theLng}&appid=b7123b42ee982f50914ee6ab3409f37e&units=metric`)
    temp = resp.data.main.temp
    if (temp == undefined) {
        throw new Error("ocurrió un error");
    }
    return temp
}

module.exports = {
    getClima
}