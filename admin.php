<?php include 'master/header.php'?>

<div class="nav-scroller bg-white box-shadow">
    <nav class="nav nav-underline">
        <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab">Escuela Sabatica</a>
        <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-contenido" role="tab">Contenido</a>
        <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-lecciones" role="tab">Lecciones
            diarias</a>
    </nav>
</div>

<main role="main" class="container">
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <br>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <input class="form-control" id="myInput" type="text" placeholder="Buscar.."><br>
                    </div>
                    <div class="form-group col-md-6">
                        <button type="button" id="btnNewEs"
                            class="btn btn-primary"
                            style="
                                background: linear-gradient(90deg, #ff9500, #005cfb) !important;
                                border: none !important;
                                border-radius: 10px !important;
                                color: white !important;
                                font-weight: bold;
                                box-shadow: 0 0 12px rgba(255,140,0,0.4);
                            ">
                            <i class="fas fa-plus"></i>&nbsp;Nueva Escuela Sabatica
                        </button>
                    </div>
                    <div class="form-group col-md-5"></div>
                    <div class="form-group col-md-1 d-flex justify-content-end">
                        <select class="form-control form-control-sm" id="language">
                            <option value="es">es</option>
                            <option value="en">en</option>
                        </select>
                    </div>
                </div>
            </form>

            <div class="album py-5 bg-light">
                <div class="container" id="myDIV">
                    <div class="row" id='content'>
                        <div class="col-md-4">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="tab-pane fade" id="nav-contenido" role="tabpanel" aria-labelledby="nav-contenido-tab">
            <br>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="listEs7">Escuela Sabatica</label>
                            </div>
                            <select class="custom-select" id="listEs7">
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-12">
                        <button type="button" id="btnContenido"
                            class="btn btn-primary"
                            style="
                                background: linear-gradient(90deg, #ff9500, #005cfb) !important;
                                border: none !important;
                                border-radius: 10px !important;
                                color: white !important;
                                font-weight: bold;
                                box-shadow: 0 0 12px rgba(255,140,0,0.4);
                            ">
                            <i class="fas fa-plus"></i>&nbsp;Nuevo Contenido
                        </button>
                        
                    </div>
                    <div class="form-group col-md-12">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#homeGeneral"
                                    role="tab" aria-controls="home" aria-selected="true">General</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                    aria-controls="profile" aria-selected="false">EGW</a>
                            </li>
                        </ul>
                        <br />
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="homeGeneral" role="tabpanel"
                                aria-labelledby="home-tab">
                                <table id="example" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>N.º de Lección</th>
                                            <th>Titulo</th>
                                            <th>Fecha</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id='contenido'>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <table id="egwTable" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>N.º de Lección</th>
                                            <th>Titulo</th>
                                            <th>Fecha</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id='contenidoEgw'>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="tab-pane fade" id="nav-lecciones" role="tabpanel" aria-labelledby="nav-lecciones-tab">
            <br>
            <form>
                <div class="form-row">
                    <input type="hidden" class="form-control" id="LeccionDiariaID">
                    <div class="form-group col-md-6" id='titleEs7'>
                    </div>
                    <div class="form-group col-md-12">
                        <button type="button" id="btnLeccionDiaria"
                            class="btn btn-primary"
                            style="
                                background: linear-gradient(90deg, #ff9500, #005cfb) !important;
                                border: none !important;
                                border-radius: 10px !important;
                                color: white !important;
                                font-weight: bold;
                                box-shadow: 0 0 12px rgba(255,140,0,0.4);
                            ">
                            <i class="fas fa-plus"></i>&nbsp;Nueva Lección
                        </button>
                    </div>
                    <div class="form-group col-md-12">
                        <table id="LeccionDiaria" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>Día</th>
                                    <th>Titulo</th>
                                    <th>Lección</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id='ContenidoLeccion'>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </div>
    </div>

</main>

<?php include 'master/modal/modales7.php'?>
<?php include 'master/modal/eliminar.php'?>
<?php include 'master/modal/contenido.php'?>
<?php include 'master/modal/leccion.php'?>


<script src="util/Trumbowyg/dist/trumbowyg.min.js"></script>
<script src="util/Trumbowyg/dist/plugins/colors/trumbowyg.colors.min.js"></script>
<script src="util/Trumbowyg/dist/langs/es.min.js"></script>

<script src="css/toastr/toastr.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>

<script>
window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')
</script>
<script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js"></script>
<script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script>
<script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/holder.min.js"></script>
<script src="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.js"></script>

<script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.24/js/dataTables.bootstrap4.min.js"></script>

<script src="js/filter.js"></script>
<script src="js/contenido.js"></script>
<script src="js/es7.js"></script>
<script src="js/leccion.js"></script>
</body>

</html>