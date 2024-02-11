
const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base =  5, listar = false, hasta = 10) =>{

    try{    
        let salida = '';
    
    for (let i = 1; i<=hasta; i++){
        salida += `${base} x ${i} = ${base*i} \n`;
    }

    if(listar){
        console.log("======================".grey)
        console.log('Tabla del: '.brightMagenta,colors.brightWhite(base))
        console.log("======================".grey)
        console.log(colors.rainbow(salida));
    }
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
    return `tabla-${base}.txt creado`

    } catch (error){
        throw(error)
    }

}


module.exports = {
    crearArchivo: crearArchivo
}