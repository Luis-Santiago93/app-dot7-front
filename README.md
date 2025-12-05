# 📘 Dot7 - Frontend de Administración de Escuela Sabática

Aplicación frontend en **PHP + jQuery + Bootstrap** para gestionar todo el contenido de **Escuela Sabática**, incluyendo:

📚 *Escuelas Sabáticas*
📂 *Contenido por lección*
📘 *Lecciones diarias*

Este panel está diseñado para el ecosistema **Dot7 Ministry**, consumiendo APIs del backend oficial de lecciones.

---

## 🚀 Tecnologías utilizadas

* **PHP 7+**
* **HTML5 / CSS3 / Bootstrap 4**
* **jQuery + AJAX**
* **DataTables**
* **Trumbowyg Editor**
* **Toastr Notifications**

Este proyecto funciona como un **panel administrativo**

---

## 📥 Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/Luis-Santiago93/app-dot7-front.git
cd app-dot7-front
```

---

## 🧰 Requisitos del servidor

Debes ejecutar este frontend en un entorno compatible con PHP:

* **XAMPP / WAMP / Laragon / Apache + PHP**
* PHP 7 o superior
* Extensiones comunes: `curl`, `json`, `mysqli` o `pdo_mysql`

Coloca el proyecto en la carpeta:

```
htdocs/
    app-dot7-front/
```

Y accede desde:

```
http://localhost/app-dot7-front/
```

---

## 🖥️ ¿Qué hace esta aplicación?

### ✔️ Módulo: Escuela Sabática

* Crear nuevas ES
* Editar propiedades (año, trimestre, título, portada, etc.)
* Publicar / despublicar
* Eliminar (si no está publicada)
* Selector dinámico de idioma (es/en)

### ✔️ Módulo: Contenido

* Crear contenido por lección
* Editar y eliminar contenido
* Tabs: **General** y **EGW**
* Uso de DataTables

### ✔️ Módulo: Lecciones Diarias

* Crear una nueva lección
* Editor WYSIWYG con **Trumbowyg**
* Asignar título, fecha y contenido
* Inactivar lecciones

---

## 🔌 Dependencias incluidas

El proyecto utiliza:

* Bootstrap 4
* jQuery
* Trumbowyg Editor
* Toastr
* DataTables
* Pace.js

Todas ya enlazadas desde CDNs y/o carpetas locales.

---

## 🎨 Características visuales

* Botones gradientes estilo Dot7
* Sombra suave en tarjetas
* Tablas responsivas con busqueda
* Editor WYSIWYG integrado
* Modales Bootstrap para formularios

---

## 👥 Desarrollado por

**Dot7 Ministry**
[https://ministry.dot7.com.mx](https://ministry.dot7.com.mx)

---