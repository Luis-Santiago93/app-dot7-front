$(document).ready(function () {
    $('#dayTitle,#lessonText').trumbowyg({
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

    $("#btnLeccionDiaria").click(function (e) {
        e.preventDefault();
        $("#frmbasico")[0].reset();
        $("#frmcontenidoleccion")[0].reset();
        $("#idLessonDay").val(0);
        $("#lessonText").trumbowyg('empty');
        $("#dayTitle").trumbowyg('empty');
        $("#modalLeccion").modal("show");
    });

    $("#btnGuardarLeccionDiaria").click(function (e) {

        var formularioBasic = document.getElementById('frmbasico');
        var formularioContent = document.getElementById('frmcontenidoleccion');
        if (formularioBasic.checkValidity() && formularioContent.checkValidity()) {
            setLeccionDiaria();
        }
        else{
            formularioBasic.classList.add('was-validated');
            formularioContent.classList.add('was-validated');
            toastr.warning('Rellene todos los campos requeridos*');
        }
    });

    $("#btnEliminarLessionDiaria").click(function (e) {
        e.preventDefault();
        DeleteLesson();
    });

});

function editLesson(element) {
    var nodoTr = $(element).parent().parent().parent().parent();
    var info = nodoTr[0].infoLeccionDiaria;
    
    $("#idLesson").val(info.idLesson);
    $("#idLessonDay").val(info.id);
    $("#idDay").val(info.idDay);
    $("#dayTitle").trumbowyg('html',info.dayTitle);
    $("#lessonText").trumbowyg('html',info.lessonText);
    $("#dateLesson").val(info.date);

    $("#modalLeccion").modal("show");
}

function inactiveLesson(element) {
    var nodoTr = $(element).parent().parent().parent().parent();
    var info = nodoTr[0].infoLeccionDiaria;
    
    $("#idEliminarLesson").val(info.id);
    
    $("#modalEliminarLessionDiaria").modal("show");
    
}

function DeleteLesson() {
    var id = {id:$("#idEliminarLesson").val()}

    $.ajax({
        data: JSON.stringify(id),
        type: "PATCH",
        contentType: 'application/json',
        url: `${CONFIG.apiLessons}/LeccionDiaria/inactive`
    })
        .done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                if (data.error) {
                    toastr.error("Hubo un inconveniente" + " " + data.message + " " + "error");
                }
                else {
                    toastr.success("Operación correcta" + " " + data.message);
                    getLeccionDiaria($("#LeccionDiariaID").val());
                    $('#modalEliminarLessionDiaria').modal('hide');
                }
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                toastr.error("La solicitud a fallado" + " " + textStatus + " " + "error");
            }
        });
}


function setLeccionDiaria() {
    if ($("#idLessonDay").val() > 0) {

        var data_form_update = {
            id: $("#idLessonDay").val(),
            idLesson: $("#idLesson").val(),
            idDay: $("#idDay").val(),
            dayTitle: $("#dayTitle").val(),
            date: $("#dateLesson").val(),
            lessonText:$("#lessonText").val()
        }

        $.ajax({
            data: JSON.stringify(data_form_update),
            type: "PUT",
            contentType: 'application/json',
            url: `${CONFIG.apiLessons}/LeccionDiaria/update`
        })
            .done(function (data, textStatus, jqXHR) {
                if (console && console.log) {
                    if (data.error) {
                        toastr.error("Hubo un inconveniente" + " " + data.message + " " + "error");
                    }
                    else {
                        toastr.success("Operación correcta" + " " + data.message);
                        getLeccionDiaria($("#LeccionDiariaID").val());
                        $('#modalLeccion').modal('hide');

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
            idLesson: $("#LeccionDiariaID").val(),
            idDay: $("#idDay").val(),
            dayTitle: $("#dayTitle").val(),
            date: $("#dateLesson").val(),
            lessonText:$("#lessonText").val()
        }

        $.ajax({
            data: JSON.stringify(data_form_insert),
            type: "POST",
            contentType: "application/json",
            url: `${CONFIG.apiLessons}/LeccionDiaria/create`
        })
            .done(function (data, textStatus, jqXHR) {
                if (console && console.log) {
                    if (data.error) {
                        toastr.error("Hubo un inconveniente" + " " + data.message + " " + "error");
                    }
                    else {
                        toastr.success("Operación correcta" + " " + data.message);
                        getLeccionDiaria($("#LeccionDiariaID").val());
                        $('#modalLeccion').modal('hide');

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
