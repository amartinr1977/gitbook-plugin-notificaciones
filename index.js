function createHeading(style, title) {
  var icon = '';
  var title = '<div class="panel-title">' + title + '</div>';

  if (style != 'default') {
    icon = '<div class="panel-icon"><i class="icon-' + style + '"></i></div>';
  }

  return '<div class="panel-heading">' + icon + title + '</div>';
}

function createPanel(style, title, content) {
  var element = '<div class="panel panel-' + style + '">';

  if (title) {
    element += createHeading(style, title);
  }

  return element + '<div class="panel-content">' + content + '</div></div>';
}

function createExercise(style, title, content) {
  formato_entrega = "Si no encuentras muchos problemas para ello, haz capturas de pantalla (''tecla IMPRIMIR PANTALLA, o '''CONTROL + ESPACIO''' y escribes '''Capturar pantalla'''''). En caso de encontrar problemas para ello puedes hacer fotos directamente desde el móvil. Elabora un documento ofimático (o usa cualquier otro formato que te resulte más comodo) donde puedas incluir las capturas solicitadas y '''expórtalo como pdf''' para adjuntarlo como respuesta a la tarea solicitada. El nombre del fichero deberá seguir la pauta: '''apellido1_apellido2_nombre_TareaX.pdf'''.";
  logo_ejercicio = '<img src="images/logoalerta-x80.png"></img>';
  requisitos = "Lista de Requisitos ..."
  contenido = content;

  element = '<div class="">';
  element += '<table>';
  element += '<tr>';
  element += '<td rowspan="3">' + logo_ejercicio + '</td>';
  element += '<td>' + title + '</td>';
  element += '</tr>';
  element += '<tr>';
  element += '<td>' + requisitos + '</td>';
  element += '</tr>';
  element += '<tr>';
  element += '<td>' + contenido + '</td>';
  element += '</tr>';
  element += '<tr>';
  element += '<td colspan="2">' + formato_entrega + '</td>';
  element += '</tr>';
  element += '</table>';
  element += '</div>';
  return element;
}

module.exports = {

  book: {

    assets: './assets',

    css: [
      'icons.css',
      'panel.css'
    ]
  },

  blocks: {
    mensaje: {
      process: function (block) {
        var style_message = block.kwargs.style || 'default'; // Info, Alerta, Importante, Tarea, ...
        var n_task = block.kwargs.ntask; // Tarea: número de tarea a mostrar
        var tipe_task = blok.kwargs.tipe || 'info'; // Tarea: Opcional u Oblitario
        var title = block.kwargs.title;
        var content = block.kwargs.body;

        if (style_message = "task") {
          return createExercise(style_message, title, content) ;
        } else {
          return this
            .renderBlock('markdown', block.body)
            .then(function (renderedBody) {
              return createPanel(style, title, renderedBody);
            });
        }
      }
    }
  }

};