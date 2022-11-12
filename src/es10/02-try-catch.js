try {
    hello();
} catch(error) {
    console.log(error);
} /* => RESULTADO: hello is not defined
     explicación: try evalúa si el codigo que ponemos dentro del bloque es correcto, catch nos indicará el tipo de error siempre que pasemos el error como parametro*/


try {
    anotherFn();
} catch {
    console.log('esto es un error')
} /* => RESULTADO: 'esto es un error'
     explicación: la consola nos ha devuelto el mensaje de error porque la función no se definió, pero el catch al no tener un parametro solo ha impreso el mensaje de error que le hemos asignado. Esta forma no es muy recomendable porque se busca que la consola detecte el tipo de error que se está cometiendo. */