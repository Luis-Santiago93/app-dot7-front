<?php include 'middleware_auth.php'?>
<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">

    <title>Dot7 Ministry</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/">

    <!-- Bootstrap core CSS -->
    <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.css" rel="stylesheet">


    <link href="css/flash.css" rel="stylesheet" />
    <link href="css/checkbox-switch.css" rel="stylesheet" />

    <link href="css/toastr/toastr.css" rel="stylesheet" />
    <link rel="stylesheet" href="util/Trumbowyg/dist/ui/trumbowyg.min.css">
    <link rel="stylesheet" href="util/Trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.min.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

    <link href="https://cdn.datatables.net/1.10.24/css/dataTables.bootstrap4.min.css" rel="stylesheet">

    
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="js/enviroment.js"></script>
    <script src="js/user-profile-loader.js"></script>
    <script src="js/logout.js"></script>
</head>

<body class="bg-light">

    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Dot7 Ministry Apps</a>
        <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Dashboard ES<span class="sr-only">(current)</span></a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Notifications</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Switch account</a>
                </li> -->
                <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>-->
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-uppercase font-weight-bold d-flex align-items-center justify-content-center rounded-circle"
                    href="#" id="userMenuButton" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    style="
                        width: 40px;
                        height: 40px;
                        background: linear-gradient(90deg, #ff9500, #005cfb);
                        border: none;
                        color: white !important;
                        background-clip: padding-box;
                    ">

                    </a>
                    <div class="dropdown-menu dropdown-menu-right text-center" aria-labelledby="userMenuButton">
                        <h6 class="dropdown-header w-100"></h6>
                        <div class="dropdown-item-text small text-muted w-100"></div>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item w-100" href="#" id="logoutButton">Cerrar sesión</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
            </form>
        </div>
    </nav>