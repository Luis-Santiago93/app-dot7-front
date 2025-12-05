<div class="modal fade" id="modalLeccion" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Agregar/Lección Diaria</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="true">Información Basica</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="content-tab" data-toggle="tab" href="#contentlesson" role="tab"
                            aria-controls="content" aria-selected="false">Contenido*</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <form id="frmbasico" class="needs-validation was-validated" novalidate method="POST"
                            onsubmit="return false;">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <label for="idDay" class="col-form-label">Nº de Día*:</label>
                                    <input type="number" class="form-control" min="1" id="idDay" required>
                                    <div class="invalid-feedback">
                                        Proporcione valor valido.
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="dateLesson" class="col-form-label">Fecha*:</label>
                                    <input type="text" class="form-control" id="dateLesson" required>
                                </div>
                                <div class="col-md-12">
                                    <input type="hidden" class="form-control" id="idLesson" value="0">
                                    <input type="hidden" class="form-control" id="idLessonDay" value="0">
                                    <label for="dayTitle" class="col-form-label">Titulo:</label>
                                    <textarea class="form-control form-control-sm mb-12" rows="3" id="dayTitle"></textarea>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="contentlesson" role="tabpanel" aria-labelledby="content-tab">
                        <form id="frmcontenidoleccion" class="needs-validation was-validated" novalidate method="POST"
                            onsubmit="return false;">
                            <div class="form-row">
                                <div class="col-md-12">
                                    <textarea class="form-control form-control-sm mb-12" rows="3" id="lessonText"
                                        required></textarea>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="submit" id="btnGuardarLeccionDiaria" class="btn btn-primary">Guardar
                    Cambios</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modalEliminarLessionDiaria" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">¿Eliminar Registro?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <input type="hidden" class="form-control" id="idEliminarLesson" value="0">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" id="btnEliminarLessionDiaria" class="btn btn-primary">Aceptar</button>
            </div>
        </div>
    </div>
</div>