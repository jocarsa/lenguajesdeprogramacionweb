window.onload = function(){
    console.log("web preparada")
    fetch("datos/articulos.json")
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos)
        datos.forEach(function(dato){
            let plantilla = document.querySelector("#plantilla_articulo");
            let destino = document.querySelector("#blog");
            let instancia = document.importNode(plantilla.content,true);
            
            instancia.querySelector("h4").innerHTML = dato.titulo
            instancia.querySelector("p").innerHTML = dato.contenido
            instancia.querySelector("time").innerHTML = dato.fecha
            
            destino.appendChild(instancia);
        })
    })
}