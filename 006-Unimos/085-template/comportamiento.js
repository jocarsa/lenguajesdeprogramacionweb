window.onload = function(){
    console.log("web preparada")
    fetch("datos/articulos.json")
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos)
    })
}