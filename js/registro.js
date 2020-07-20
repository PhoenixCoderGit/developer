// console.log("funcionando");
$("#registro").submit(function(event){
    event.preventDefault();//almacena los datos sin refrescar el sitio web
    enviar();
});

function enviar(){
    // console.log("ejecutando");
    var datos = $("#registro").serialize();//toma los datos y los lleva convierte a un arreglo

    //Llevarlo de forma asincrona
    $.ajax({
        type: "post",
        url:"registro.php",
        data: datos,
        success: function(texto){
            if (texto == "exito") {
                correcto();
            }else{
                phperror(texto);
            }
        }
    })

}

function correcto(){
    $("#mensajeExito").removeClass("d-none");
    $("#mensajeError").addClass("d-none");
}

function phperror(texto){
     $("#mensajeError").removeClass("d-none");
     $("#mensajeError").html(texto);
}