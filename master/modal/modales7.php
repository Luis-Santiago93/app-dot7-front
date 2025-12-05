<div class="modal fade" id="modalEs7" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Agregar/Modificar Escuela Sabatica</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="frmes7" class="needs-validation was-validated" novalidate method="POST"
                    onsubmit="return false;">
                    <div class="form-row">
                        <div class="col-md-4">
                            <input type="hidden" class="form-control" id="id" value="0">
                            <input type="hidden" class="form-control" id="idEs" value="0">
                            <input type="hidden" class="form-control" id="published">
                            <label for="title" class="col-form-label">Titulo:</label>
                            <input type="text" class="form-control" id="title" required>
                        </div>
                        <div class="col-md-4">
                            <label for="quarter" class="col-form-label">Trimestre:</label>
                            <input type="number" class="form-control" min="1" id="quarter" required>
                            <div class="invalid-feedback">
                                Proporcione el trimestre correspondiente.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="year" class="col-form-label">Año:</label>
                            <input type="number" id="year" class="form-control" min="2017" max="2100" required>
                            <div class="invalid-feedback">
                                Proporcione el año correspondiente.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="helpVideos" class="col-form-label">Video de Apoyo:</label>
                            <input class="form-control" type="url" id="helpVideos" required>
                            <div class="invalid-feedback">
                                Proporcione una url valida.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="mission" class="col-form-label">Misionero:</label>
                            <input class="form-control" type="url" id="mission" required>
                            <div class="invalid-feedback">
                                Proporcione una url valida.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="frontPage" class="col-form-label">Portada:</label>
                            <input class="form-control" type="url" id="frontPage">
                            <div class="invalid-feedback">
                                Proporcione una url valida.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="latestVersionName" class="col-form-label">Ultima Versión:</label>
                            <input type="text" class="form-control" id="latestVersionName" required>
                        </div>
                        <div class="col-md-4">
                            <label for="latestVersionName" class="col-form-label">Versión de Codigo:</label>
                            <input type="number" class="form-control" min="1" id="latestVersionCode" required>
                        </div>
                        <div class="col-md-4">
                            <label for="color" class="col-form-label">Color:</label>
                            <input type="text" class="form-control" id="color">
                        </div><br />
                        <div class="col-md-12">
                            <br />
                            <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="flexibleUpdate">
                                <label class="custom-control-label" for="flexibleUpdate">Actualización Flexible</label>
                            </div>
                            <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="forceUpdate">
                                <label class="custom-control-label" for="forceUpdate">Actualización Forzosa</label>
                            </div>
                            <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="googleUpdate">
                                <label class="custom-control-label" for="googleUpdate">Actualización Google</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="submit" form="frmes7" id="btnGuardar" class="btn btn-primary">Guardar Cambios</button>
            </div>
        </div>
    </div>
</div>