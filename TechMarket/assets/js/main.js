$(document).ready(function () {
    let editIndex = null;

    // Cargar países desde la API
    $.get('https://restcountries.com/v3.1/lang/spanish', function (data) {
        $('#pais').append('<option value="" disabled selected>Seleccione un país</option>');
        data.forEach(function (pais, i) {
            // Usar nombre común en español y nombre oficial
            let nombreComun = pais.translations && pais.translations.spa && pais.translations.spa.common ? pais.translations.spa.common : pais.name.common;
            let nombreOficial = pais.name && pais.name.official ? pais.name.official : '';
            $('#pais').append(`<option value="${i}" data-nombreoficial="${nombreOficial}">${nombreComun}</option>`);
        });
    }).fail(function () {
        // Si falla la API, agrega países manualmente
        let paises = [
            { name: { official: "República de Chile" }, translations: { spa: { common: "Chile" } } },
            { name: { official: "República Argentina" }, translations: { spa: { common: "Argentina" } } }
        ];
        paises.forEach(function (pais, i) {
            $('#pais').append(`<option value="${i}" data-nombreoficial="${pais.name.official}">${pais.translations.spa.common}</option>`);
        });
    }).always(function () {
        // Siempre selecciona el primer país de la lista si hay opciones
        if ($('#pais option').length > 1) {
            $('#pais option').eq(1).prop('selected', true).trigger('change');
        }
    });

    // Al cambiar el país, mostrar el nombre oficial
    $('#pais').on('change', function () {
        let nombreOficial = $('#pais option:selected').data('nombreoficial');
        $('#nombreOficial').val(nombreOficial || '');
    });

    // Validar email
    function validarEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Cargar registros de LocalStorage
    function cargarRegistros() {
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        let tbody = $('#tablaRegistros tbody');
        tbody.empty();
        registros.forEach(function (reg, idx) {
            tbody.append(`
                <tr>
                    <td>${reg.nombre}</td>
                    <td>${reg.telefono}</td>
                    <td>${reg.email}</td>
                    <td>${reg.pais}</td>
                    <td>${reg.nombreOficial}</td>
                    <td>
                        <button class="btn btn-warning btn-sm btn-editar" data-idx="${idx}">Editar</button>
                        <button class="btn btn-danger btn-sm btn-eliminar" data-idx="${idx}">Eliminar</button>
                    </td>
                </tr>
            `);
        });
    }

    cargarRegistros();

    // Enviar formulario
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        let nombre = $('#nombre').val().trim();
        let telefono = $('#telefono').val().trim();
        let email = $('#email').val().trim();
        let paisIdx = $('#pais').val();
        let pais = $('#pais option:selected').text();
        let nombreOficial = $('#nombreOficial').val();

        if (!nombre || !telefono || !email || !paisIdx) {
            alert('Todos los campos son obligatorios.');
            return;
        }
        if (!validarEmail(email)) {
            alert('Ingrese un correo electrónico válido.');
            return;
        }

        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        let nuevoRegistro = { nombre, telefono, email, pais, nombreOficial };

        if (editIndex !== null) {
            registros[editIndex] = nuevoRegistro;
            editIndex = null;
        } else {
            registros.push(nuevoRegistro);
        }
        localStorage.setItem('registros', JSON.stringify(registros));
        cargarRegistros();
        this.reset();
        $('#nombreOficial').val('');
    });

    // Editar registro
    $('#tablaRegistros').on('click', '.btn-editar', function () {
        let idx = $(this).data('idx');
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        let reg = registros[idx];
        $('#nombre').val(reg.nombre);
        $('#telefono').val(reg.telefono);
        $('#email').val(reg.email);
        $('#pais option').filter(function () { return $(this).text() === reg.pais; }).prop('selected', true);
        $('#nombreOficial').val(reg.nombreOficial);
        editIndex = idx;
    });

    // Eliminar registro
    $('#tablaRegistros').on('click', '.btn-eliminar', function () {
        let idx = $(this).data('idx');
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.splice(idx, 1);
        localStorage.setItem('registros', JSON.stringify(registros));
        cargarRegistros();
    });
});