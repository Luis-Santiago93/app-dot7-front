$(document).ready(function () {
    config('es');
    listEs7(0);

    $('#language').on('change', function() {
        config(this.value);
    });

    document.getElementById("btnContenido").disabled = true;

    $("#btnNewEs").click(function (e) {
        e.preventDefault();
        $("#frmes7")[0].reset();
        $("#idEs").val(0);
        $("#latestVersionCode").val(0);
        $("#id").val(3);
        $("#modalEs7").modal("show");
    });

    $("#btnGuardar").click(function (e) {
        var formulario = document.getElementById('frmes7');
        if (formulario.checkValidity()) {
            SetEs7();
        }
        formulario.classList.add('was-validated');
    });

    $("#btnEliminar").click(function (e) {
        e.preventDefault();
        DeleteEs7();
    });

});

function config(idioma) {
    $("#content").empty();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: `${CONFIG.apiLessons}/EscuelaSabatica?language=${idioma}`
    })
    .done(function (data) {
        if (console && console.log) {
            if (data.error) {
                swal("Hubo un inconveniente", data.message, "error");
            }
            if (!data.success) {
                toastr.success(data.message);
            } else {

                var contentDiv = $("#content");
                var json = data.data;

                for (var i in json) {
                    var list = json[i];

                    var published = list.published;
                    var check, message;

                    if (published == 1) {
                        check = "checked";
                        message = "<span class='badge badge-success'>Lección Publicada</span>";
                    } else {
                        check = "";
                        message = "<span class='badge badge-secondary'>Lección Historica</span>";
                    }

                    if (list.frontPage == null || list.frontPage == '') {
                        frontPage = 'img/imagen-no-disponible.jpg';
                    } else {
                        frontPage = list.frontPage;
                    }

                    var div = $(`
                        <div class='col-md-4'>
                            <div class='card mb-4 box-shadow' style='height: 29rem;'>
                                <img class='card-img-top img-fluid' src='${frontPage}' alt='Card image cap' 
                                     style='object-fit: cover; height: 250px; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);'>
                                <div class='card-body'>
                                    <h4 class='card-title' style='font-size: 1.1rem;'>${list.title}</h4>

                                    <label class='switch'>
                                        <input type='checkbox' ${check} class='primary' onchange='Listenpublished(this)'>
                                        <span class='slider round'></span>
                                    </label>
                                    ${message}

                                    <p class='card-text'>${list.quarterText}</p>

                                    <div class='d-flex justify-content-between align-items-center'>
                                        <div class='btn-group'>
                                            <button type='button' class='btn btn-sm btn-outline-secondary' title='Editar' onclick='edit(this)'><i class='fas fa-edit'></i></button>
                                            <button type='button' class='btn btn-sm btn-outline-secondary' title='Contenido' onclick='contentLession(this)'><i class='fas fa-book-open'></i></button>
                                            <button type='button' class='btn btn-sm btn-outline-secondary' title='Eliminar' onclick='inactive(this)'><i class='fas fa-trash'></i></button>
                                        </div>
                                        <small class='text-muted'>Version Code ${list.latestVersionCode}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `);

                    div[0]["infoEs"] = list;
                    contentDiv.append(div);
                }

            }
        }
    })
    .fail(function () {
        swal("La solicitud a fallado", "Error", "error");
    });
}

function Listenpublished(element){
    var nodoTr = $(element).closest(".card").parent();
    var info = nodoTr[0].infoEs;
    var published = $(element)[0].checked;
    Setpublished(info.idEs, published, info.language);
}

function Setpublished(id, checked, idioma) {

    var service = checked ? 1 : 2;

    var payload = {
        idEs: id,
        published: service,
        language: idioma
    };

    $.ajax({
        data: JSON.stringify(payload),
        type: "PATCH",
        contentType: 'application/json',
        url: `${CONFIG.apiLessons}/EscuelaSabatica/published`
    })
    .done(function (data) {
        if (data.error) {
            toastr.error("Hubo un inconveniente: " + data.message);
        } else {
            if (!data.success) {
                toastr.warning(data.message);
            } else {
                toastr.success("Operación correcta: " + data.message);
            }
            config($('#language').val());
        }
    })
    .fail(function () {
        toastr.error("La solicitud ha fallado", "error");
    });
}

function edit(element) {
    var nodoTr = $(element).closest(".card").parent();
    var info = nodoTr[0].infoEs;

    $("#id").val(info.id);
    $("#idEs").val(info.idEs);
    $("#latestVersionCode").val(info.latestVersionCode);
    $("#title").val(info.title);
    $("#quarter").val(info.quarterNumber);
    $("#helpVideos").val(info.helpVideos);
    $("#mission").val(info.mission);
    $("#latestVersionName").val(info.latestVersionName);
    $("#color").val(info.color);
    $("#published").val(info.published);
    $("#year").val(info.year);
    $("#frontPage").val(info.frontPage);

    $("#flexibleUpdate").prop("checked", parseBool(info.flexibleUpdate));
    $("#forceUpdate").prop("checked", parseBool(info.forceUpdate));
    $("#googleUpdate").prop("checked", parseBool(info.googleUpdate));

    $("#modalEs7").modal("show");
}

function contentLession(element) {
    var nodoTr = $(element).closest(".card").parent();
    var info = nodoTr[0].infoEs;

    document.getElementById("btnContenido").disabled = false;

    listEs7(info.idEs);
    $("#idEsContenido").val(info.idEs);
    getContenido(info.idEs);
    getContenidoEgw(info.idEs);
    $('.nav-underline a[href="#nav-contenido"]').tab('show');
}

function inactive(element) {
    var nodoTr = $(element).closest(".card").parent();
    var info = nodoTr[0].infoEs;

    if (info.published == 1) {
        toastr.warning('No se puede eliminar una lección publicada');
    } else {
        $("#idEliminar").val(info.idEs);
        $("#modalEliminar").modal("show");
    }
}

function DeleteEs7() {
    var payload = { idEs: $("#idEliminar").val() };

    $.ajax({
        data: JSON.stringify(payload),
        type: "PATCH",
        contentType: 'application/json',
        url: `${CONFIG.apiLessons}/EscuelaSabatica/inactive`
    })
    .done(function (data) {
        if (data.error) {
            toastr.error("Hubo un inconveniente: " + data.message);
        } else {
            toastr.success("Operación correcta: " + data.message);
            config($('#language').val());
            listEs7(0);
            $('#modalEliminar').modal('hide');
        }
    })
    .fail(function () {
        toastr.error("La solicitud ha fallado", "error");
    });
}

function SetEs7() {

    if ($("#idEs").val() > 0) {

        var data_form_update = {
            idEs: $("#idEs").val(),
            title: $("#title").val(),
            color: $("#color").val(),
            quarterText: parseTextComplete($("#quarter").val(), $("#year").val()),
            quarter: parseText($("#quarter").val(), $("#year").val()),
            quarterNumber: $("#quarter").val(),
            latestVersionName: $("#latestVersionName").val(),
            latestVersionCode: $("#latestVersionCode").val(),
            forceUpdate: parseInt($("#forceUpdate").is(":checked")),
            googleUpdate: parseInt($("#googleUpdate").is(":checked")),
            flexibleUpdate: parseInt($("#flexibleUpdate").is(":checked")),
            helpVideos: $("#helpVideos").val(),
            mission: $("#mission").val(),
            language: $('#language').val(),
            egwHasAlert: 2,
            appHasAlert: 2,
            published: $("#published").val(),
            year: $("#year").val(),
            frontPage: $("#frontPage").val()
        };

        $.ajax({
            data: JSON.stringify(data_form_update),
            type: "PUT",
            contentType: 'application/json',
            url: `${CONFIG.apiLessons}/EscuelaSabatica/update`
        })
        .done(function (data) {
            if (data.error) {
                toastr.error("Hubo un inconveniente: " + data.message);
            } else {
                toastr.success("Operación correcta: " + data.message);
                config($('#language').val());
                $('#modalEs7').modal('hide');
            }
        })
        .fail(function () {
            toastr.error("La solicitud ha fallado", "error");
        });

    } else {

        var data_form_insert = {
            idEs: 0,
            title: $("#title").val(),
            color: $("#color").val(),
            quarterText: parseTextComplete($("#quarter").val(), $("#year").val()),
            quarter: parseText($("#quarter").val(), $("#year").val()),
            quarterNumber: $("#quarter").val(),
            latestVersionName: $("#latestVersionName").val(),
            latestVersionCode: $("#latestVersionCode").val(),
            forceUpdate: parseInt($("#forceUpdate").is(":checked")),
            googleUpdate: parseInt($("#googleUpdate").is(":checked")),
            flexibleUpdate: parseInt($("#flexibleUpdate").is(":checked")),
            helpVideos: $("#helpVideos").val(),
            mission: $("#mission").val(),
            language: $('#language').val(),
            egwHasAlert: 2,
            appHasAlert: 2,
            year: $("#year").val(),
            frontPage: $("#frontPage").val()
        };

        $.ajax({
            data: JSON.stringify(data_form_insert),
            type: "POST",
            contentType: "application/json",
            url: `${CONFIG.apiLessons}/EscuelaSabatica/create`
        })
        .done(function (data) {
            if (data.error) {
                toastr.error("Hubo un inconveniente: " + data.message);
            } else {
                toastr.success("Operación correcta: " + data.message);
                config($('#language').val());
                $('#modalEs7').modal('hide');
            }
        })
        .fail(function () {
            toastr.error("La solicitud ha fallado", "error");
        });
    }
}

// Helpers
function parseBool(val) {
    return val == 1;
}

function parseInt(val) {
    return val ? 1 : 2;
}

function parseText(val, year) {
    return val + "T" + year;
}

function parseTextComplete(val, year) {
    var language = $('#language').val() == 'es' ? 'Trimestre' : 'Quarter';
    return val + " " + language + " " + year;
}
