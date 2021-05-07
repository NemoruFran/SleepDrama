//Esto es un componente. Un componente no es nada mas que una función que retorna un elemento html. La potencia radica en que al ser codigo, se puede reutilizar diversas veces

function Button(props) {
    console.log(props);
    return (
        <button className={props.className}>{props.text}</button> 
    )
}

export default Button; //Exporta este código para que otros archivos js lo usen.
//Exportar un subgrupo de funciones: export {Button,funcion,function,...}


/*Los componentes suelen estar con su carpeta propia con 4 archivos:
    - index.js -> imports y exports
    - componente.container
    - componente.css
    - archivo que retorna html -> equivaldria a este archivo */

//La manera de pasar propiedades es tal y como se indica así. Para las palabras clave de estilos funciona igual c: