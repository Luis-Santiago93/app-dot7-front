<div class="modal fade" id="modalContenido" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Agregar/Modificar Contenido</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="frmcontenido" class="needs-validation was-validated" novalidate method="POST"
                    onsubmit="return false;">
                    <div class="form-row">
                        
                        <div class="col-md-6">
                            <label for="lessonNumber" class="col-form-label">Nº de Leccion:</label>
                            <input type="number" class="form-control" min="1" id="lessonNumber" required>
                            <div class="invalid-feedback">
                                Proporcione valor valido.
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="date" class="col-form-label">Fecha:</label>
                            <input type="text" class="form-control" id="date" required>
                        </div>
                        <div class="col-md-4">
                            <label for="remoteColor" class="col-form-label">Color:</label>
                            <input type="text" class="form-control" id="remoteColor">
                        </div>
                        <div class="col-md-4">
                            <label for="lessonNumber" class="col-form-label">Versión Codigo:</label>
                            <input type="number" class="form-control" min="0" id="versionCodeContenido" required>
                            <div class="invalid-feedback">
                                Proporcione valor valido.
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="egw" class="col-form-label">Tipo:</label>
                            <select class="form-control" id="egw" required="">
                                <option value="" title="-Seleccione-">-Seleccione-</option>
                                <option value="2">Contenido General</option>
                                <option value="1">EGW</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="hidden" class="form-control" id="idContenido" value="0">
                            <input type="hidden" class="form-control" id="idEsContenido" value="0">
                            
                            <label for="titleContenido" class="col-form-label">Titulo:</label>
                            <textarea class="form-control form-control-sm mb-3" rows="3" id="titleContenido" required></textarea>
                        </div>
                        <div class="col-md-6">
                            <label for="verse" class="col-form-label">Versiculo:</label>
                            <textarea class="form-control form-control-sm mb-3" rows="3" id="verse" required></textarea>
                        </div>
                        <br />
                        
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="submit" form="frmcontenido" id="btnGuardarContenido" class="btn btn-primary">Guardar Cambios</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modalEliminarContenido" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">¿Eliminar Registro?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <input type="hidden" class="form-control" id="idEliminarContent" value="0">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" id="btnEliminarContenido" class="btn btn-primary">Aceptar</button>
            </div>
        </div>
    </div>
</div>