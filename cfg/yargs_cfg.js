const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'ciudad o lugar del que se desea conocer el clima',
            demand: true
        }
    })
    .help()
    .argv

module.exports = { argv };