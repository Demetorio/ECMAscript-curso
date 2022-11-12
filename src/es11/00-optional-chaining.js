const users = {
    demetori: {
        country: 'MX'
    },
    mezzaluna: {
        country: 'PE'
    }
}
console.log(users.demetori.country); // => RESULTADO: 'MX'

console.log(users.inume.country); // => RESULTADO: TypeError ...

console.log(users.inume?.country); // => RESULTADO: undefined

//EXPLICACIÓN: el signo de interrogación "consulta" si existe el atributo, si no existe devolverá un undefined, impidiendo que salga un error que rompa el código

/*NOTA DE UN COMENTARIO DE PLATZI No abuses del encadenamiento opcional
🔗 El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.
.
Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.
.
Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado. */