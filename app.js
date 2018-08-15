argv = require('./cfg/yargs_cfg').argv
lugar = require('./logica/lugar')
clima = require('./logica/clima')

const getInfo = async(theDir) => {
    try {
        let coords = await lugar.getLatLng(theDir);
        let temp = await clima.getClima(coords.lat, coords.lng)
        return (`la temperatura en ${coords.direccion} es de ${temp} celsius`)
    } catch (error) {
        return (`No se pudo hallar el clima en ${theDir} \n ${error}`)
    }

}

getInfo(argv.d)
    .then(msj => console.log(msj))
    .catch(e => console.log(e));