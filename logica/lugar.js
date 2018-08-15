axios = require('axios')

const getLatLng = async(theDireccion) => {
    encodedURL = encodeURI(theDireccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyCUsAFnWCoNyzvNTbVnI616BiC-xHHrgQo`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontraron resultados para ${theDireccion}`);
    }
    let result = resp.data.results[0];
    if (result === undefined) {
        throw new Error(`ocurrió un error con la petición ${resp.data.status}`);
    }

    let direccion = result.formatted_address;
    let lat = result.geometry.location.lat;
    let lng = result.geometry.location.lng;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLatLng
}