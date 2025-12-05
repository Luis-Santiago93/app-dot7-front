
function listEs7(seleccion) {
    $("#listEs7").empty();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: `${CONFIG.apiLessons}/EscuelaSabatica?language=${$('#language').val()}`,
    })
        .done(function (data, textStatus, jqXHR) {
            var Resultado = data.data;
            $("#listEs7").append("<option value=''>Seleccione</option>");
            for (var i = 0; i < Resultado.length; i++) {

                var combo = Resultado[i];

                $("#listEs7").append("<option value='" + combo.idEs + "'>" + combo.title + "</option>");
            }
            if (seleccion)
                $("#listEs7").val(seleccion);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                alert("La solicitud a fallado: " + textStatus);
            }
        });

}

function getContenido(element) {
    $("#contenido").empty();
    $('#example').DataTable().clear().destroy();
    Pace.track(function () {$.ajax({
        type: "GET",
        dataType: "json",
        url: `${CONFIG.apiLessons}/Contenido?es7=${element}&tipo=2`
    })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                if (data.error) {
                    swal("Hubo un inconveniente", data.message, "error");
                }
                else {
                    var tablaDatos = $("#example");
                    var json = data.data;
                    if(json){
                        
                        for (var i in json) {

                            var listado = json[i];

                            btn = "<div class='btn-toolbar' style='justify-content: center; display: flex;' role='toolbar'><div class='btn-group mr-2' role='group'><button class='btn btn-primary btn-sm' title='Lecciones diarias' type = 'button' onclick='dailyLessons(this)'><i class='fas fa-folder-open'></i></button></div><div class='btn-group mr-2' role='group'><button class='btn btn-primary btn-sm' title='Editar' type = 'button' onclick='editContent(this)'><i class='fas fa-edit'></i></button></div><div class='btn-group mr-2' role='group'><button class='btn btn-danger btn-sm' type = 'button' title='Eliminar' onclick='inactiveContent(this)'><i class='fas fa-trash'></i></button></div></div>";
                            
                            var tr = $("<tr valign='middle'><td align='center' style='color:red;''><b>" + listado.lessonNumber + "</b></td><td align='center'>" + listado.title + "</td><td align='center'>" + listado.date + "</td><td align='center'>"+btn+"</td></tr>");

                            tr[0]["infoContenido"] = listado;

                            tablaDatos.append(tr);
                        }
                        Initializtable('#example');
                        
                    }
                    
                }

            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                swal("La solicitud a fallado", textStatus, "error");
            }
        });
    });
}

function getContenidoEgw(element) {
    $("#contenidoEgw").empty();
    $('#egwTable').DataTable().clear().destroy();
    Pace.track(function () {$.ajax({
        type: "GET",
        dataType: "json",
        url: `${CONFIG.apiLessons}/Contenido?es7=${element}&tipo=1`
    })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                if (data.error) {
                    swal("Hubo un inconveniente", data.message, "error");
                }
                else {
                    var tablaDatos = $("#egwTable");
                    var json = data.data;
                    if(json){
                        
                        for (var i in json) {

                            var listado = json[i];

                            btn = "<div class='btn-toolbar' style='justify-content: center; display: flex;' role='toolbar'><div class='btn-group mr-2' role='group'><button class='btn btn-primary btn-sm' title='Lecciones diarias' type = 'button' onclick='dailyLessons(this)'><i class='fas fa-folder-open'></i></button></div><div class='btn-group mr-2' role='group'><button class='btn btn-primary btn-sm' title='Editar' type = 'button' onclick='editContent(this)'><i class='fas fa-edit'></i></button></div><div class='btn-group mr-2' role='group'><button class='btn btn-danger btn-sm' type = 'button' title='Eliminar' onclick='inactiveContent(this)'><i class='fas fa-trash'></i></button></div></div>";

                            var tr = $("<tr valign='middle'><td align='center' style='color:red;''><b>" + listado.lessonNumber + "</b></td><td align='center'>" + listado.title + "</td><td align='center'>" + listado.date + "</td><td align='center'>"+btn+"</td></tr>");

                            tr[0]["infoContenido"] = listado;

                            tablaDatos.append(tr);
                        }
                        Initializtable('#egwTable');
                        
                    }
                    
                }

            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                swal("La solicitud a fallado", textStatus, "error");
            }
        });
    });
}

function getLeccionDiaria(element) {
    $("#ContenidoLeccion").empty();
    $('#LeccionDiaria').DataTable().clear().destroy();
    Pace.track(function () {$.ajax({
        type: "GET",
        dataType: "json",
        url: `${CONFIG.apiLessons}/LeccionDiaria?contenido=${element}`
    })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                if (data.error) {
                    swal("Hubo un inconveniente", data.message, "error");
                }
                else {
                    var tablaDatos = $("#LeccionDiaria");
                    var json = data.data;
                    if(json){
                        
                        for (var i in json) {

                            var listado = json[i];

                            btn = "<div class='btn-toolbar' style='justify-content: center; display: flex;' role='toolbar'><div class='btn-group mr-2' role='group'><button class='btn btn-primary btn-sm' title='Editar' type = 'button' onclick='editLesson(this)'><i class='fas fa-edit'></i></button></div><div class='btn-group mr-2' role='group'><button class='btn btn-danger btn-sm' type = 'button' title='Eliminar' onclick='inactiveLesson(this)'><i class='fas fa-trash'></i></button></div></div>";
                            
                            var tr = $("<tr valign='middle'><td align='center' style='color:red;''><b>" + listado.idDay + "</b></td><td align='center'>" + listado.dayTitle + "</td><td align='center'>" + truncString($(listado.lessonText).text(),150,'...') + "</td><td align='center'>"+btn+"</td></tr>");

                            tr[0]["infoLeccionDiaria"] = listado;

                            tablaDatos.append(tr);
                        }
                        //Initializtable('#LeccionDiaria');
                        
                    }
                    
                }

            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                swal("La solicitud a fallado", textStatus, "error");
            }
        });
    });
}

function truncString(str, max, add){
    add = add || '...';
    return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);
}

function Initializtable(element){
    table = $(element).DataTable({
        "paging": true,
        "destroy": true,
        "ordering": true,
        "info": false,
        "processing": true,
        "lengthMenu": [12],
        "stateSave": true,
        "language": {
            "search": "Buscar:",
            "lengthMenu": "Filas por página _MENU_",
            "zeroRecords": "Sin datos",
            "infoEmpty": "Registros no disponibles",
            "infoFiltered": "(filtrado de _MAX_ total registros)",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Previo"
            }
        }
    });

    return table
}

$(document).ready(function () {

    $('#titleContenido,#verse').trumbowyg({
        removeformatPasted: true,
        resetCss: true,
        lang: 'es',
        btns: [
            ['viewHTML'],
            ['formatting'],
            ['strong', 'em', 'del'],
            ['superscript', 'subscript'],
            ['link'],
            ['foreColor', 'backColor'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],
            ['fullscreen']
        ]
    });

    $("#btnContenido").click(function (e) {
        e.preventDefault();
        $("#frmcontenido")[0].reset();
        $("#idContenido").val(0);
        $("#titleContenido").trumbowyg('empty');
        $("#verse").trumbowyg('empty');
        $("#modalContenido").modal("show");
    });

    $("#btnEliminarContenido").click(function (e) {
        e.preventDefault();
        DeleteContent();
    });

    $("#btnGuardarContenido").click(function (e) {

        var formulario = document.getElementById('frmcontenido');
        if (formulario.checkValidity()) {
            setContenido();
        }
        else{
            formulario.classList.add('was-validated');
            toastr.warning('El Titulo y Versiculo son requeridos');
        }
    });

    $('#listEs7').on('change', function() {
        if(this.value){
            document.getElementById("btnContenido").disabled = false;
        }
        else{
            document.getElementById("btnContenido").disabled = true;
        }
        $("#idEsContenido").val(this.value);
        getContenido(this.value);
        getContenidoEgw(this.value);
        
    });

});


function editContent(element) {
    var nodoTr = $(element).parent().parent().parent().parent();
    var info = nodoTr[0].infoContenido;
    
    $("#idContenido").val(info.id);
    $("#idEsContenido").val(info.idEs);
    $("#versionCodeContenido").val(info.versionCode);
    $("#titleContenido").trumbowyg('html',info.title);
    $("#verse").trumbowyg('html',info.verse);
    $("#lessonNumber").val(info.lessonNumber);
    $("#remoteColor").val(info.remoteColor);
    $("#date").val(info.date);
    $("#egw").val(info.egw);

    $("#modalContenido").modal("show");
}

function inactiveContent(element) {
    var nodoTr = $(element).parent().parent().parent().parent();
    var info = nodoTr[0].infoContenido;
    
    $("#idEliminarContent").val(info.id);
    
    $("#modalEliminarContenido").modal("show");
    
}

function DeleteContent() {
    var id = {id:$("#idEliminarContent").val()}

    $.ajax({
        data: JSON.stringify(id),
        type: "PATCH",
        contentType: 'application/json',
        url: `${CONFIG.apiLessons}/Contenido/inactive`
    })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                if (data.error) {
                    toastr.error("Hubo un inconveniente" + " " + data.message + " " + "error");
                }
                else {
                    toastr.success("Operación correcta" + " " + data.message);
                    select=$("#listEs7").val();
                    getContenido(select);
                    getContenidoEgw(select);

                    $('#modalEliminarContenido').modal('hide');
                }
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                toastr.error("La solicitud a fallado" + " " + textStatus + " " + "error");
            }
        });
}

function dailyLessons(element){
    var nodoTr = $(element).parent().parent().parent().parent();
    var info = nodoTr[0].infoContenido;
    $('#titleEs7').empty();
    $('#titleEs7').append('<h3><i class="fas fa-book-open"></i>&nbsp;Contenido: </h3><h4>'+info.title+'</h4>')
    getLeccionDiaria(info.id);
    $("#LeccionDiariaID").val(info.id);
    $('.nav-underline a[href="#nav-lecciones"]').tab('show');
}

function setContenido() {
    if ($("#idContenido").val() > 0) {

        var data_form_update = {
            id: $("#idContenido").val(),
            idEs: $("#idEsContenido").val(),
            title: $("#titleContenido").val(),
            verse: $("#verse").val(),
            remoteColor: $("#remoteColor").val(),
            date:$("#date").val(),
            versionCode: $("#versionCodeContenido").val(),
            lessonNumber: $("#lessonNumber").val(),
            egw: $("#egw").val()
        }

        $.ajax({
            data: JSON.stringify(data_form_update),
            type: "PUT",
            contentType: 'application/json',
            url: `${CONFIG.apiLessons}/Contenido/update`,
        })
            .done(function (data, textStatus, jqXHR) {
                if (console && console.log) {
                    if (data.error) {
                        toastr.error("Hubo un inconveniente" + " " + data.message + " " + "error");
                    }
                    else {
                        toastr.success("Operación correcta" + " " + data.message);
                        select=$("#listEs7").val();
                        getContenido(select);
                        getContenidoEgw(select);
                        $('#modalContenido').modal('hide');

                    }

                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                if (console && console.log) {
                    toastr.error("La solicitud a fallado" + " " + textStatus + " " + "error");
                }
            });
    }
    else {

        var data_form_insert = {
            id: 0,
            idEs: $("#idEsContenido").val(),
            title: $("#titleContenido").val(),
            verse: $("#verse").val(),
            remoteColor: $("#remoteColor").val(),
            date:$("#date").val(),
            versionCode: $("#versionCodeContenido").val(),
            lessonNumber: $("#lessonNumber").val(),
            egw: $("#egw").val()
        }

        $.ajax({
            data: JSON.stringify(data_form_insert),
            type: "POST",
            contentType: "application/json",
            url: `${CONFIG.apiLessons}/Contenido/create`
        })
            .done(function (data, textStatus, jqXHR) {
                if (console && console.log) {
                    if (data.error) {
                        toastr.error("Hubo un inconveniente" + " " + data.message + " " + "error");
                    }
                    else {
                        toastr.success("Operación correcta" + " " + data.message);
                        select=$("#listEs7").val();
                        getContenido(select);
                        getContenidoEgw(select);
                        $('#modalContenido').modal('hide');

                    }

                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                if (console && console.log) {
                    toastr.error("La solicitud a fallado" + " " + textStatus + " " + "error");
                }
            });

    }
}