$(document).ready(inicializar);

function inicializar() {
    $("#BtnAceptar").click(function (e) {
        e.preventDefault();
        var formulario = document.getElementById('flogin');
        if (formulario.checkValidity()) {
            Login();
        } else {
            formulario.reportValidity();
        }
    });
}

function Login() {
    var Usuario = $("#usuario").val().trim();
    var Pass = $("#password").val().trim();

    if (!Usuario || !Pass) {
        swal("Error", "Por favor complete todos los campos", "error");
        return;
    }

    var button = document.getElementById('BtnAceptar');
    button.classList.add('loading');
    button.disabled = true;

    $.ajax({
        url: `${CONFIG.apiAuth}/login`,
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            username: Usuario,
            password: Pass
        }),
    })
    .done(function (data) {

        if (data.access_token) {

            if (data.user) {
                localStorage.setItem("user_info", JSON.stringify(data.user));
            }

            if (data.apps) {
                localStorage.setItem("apps_info", JSON.stringify(data.apps));
            }

            document.cookie = `access_token=${data.access_token}; path=/; samesite=strict`;
            document.cookie = `refresh_token=${data.refresh_token}; path=/; samesite=strict`;

            window.location.href = "admin.php";

        } else {
            swal("Error", "Respuesta inesperada del servidor", "error");
        }
    })
    .fail(function (jqXHR) {
        var errorTitle = "Error";
        var errorText = "Ocurrió un problema al intentar autenticarse";

        if (jqXHR.status === 401) {
            errorTitle = "No autorizado";
            errorText = "Usuario o contraseña incorrectos";
        } else if (jqXHR.status === 0) {
            errorTitle = "Sin conexión";
            errorText = "No se pudo conectar al servidor.";
        } else if (jqXHR.responseJSON?.message) {
            errorText = jqXHR.responseJSON.message;
        }

        swal({
            title: errorTitle,
            text: errorText,
            icon: "error",
            button: "Entendido",
        });
    })
    .always(function() {
        button.classList.remove('loading');
        button.disabled = false;
    });
}
