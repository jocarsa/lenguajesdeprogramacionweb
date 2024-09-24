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
            
          
            
            destino.appendChild(instancia);
        })
    })
}