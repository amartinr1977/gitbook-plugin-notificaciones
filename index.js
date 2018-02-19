module.exports = {

  book: {

    assets: './assets',

    css: [
      'icons.css',
      'panel.css',
      'notificaciones.css'
    ]
  },

  blocks: {
    notificacion_task: {
      process: function (block) {
        ruta_base = "https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master";
        logo_aviso = '<img src="' + ruta_base + '/assets/images/logobombilla-x80.png?raw=true"></img>';
        logo_texto = 'Tarea</br>' + block.kwargs.numexer;

        element = '<div class="contenedor contenedor-task">';
        // Indicamos el logo o imagen de la notificación relativa a: Tarea
        element += '<div class="image">' + logo_aviso + '</br><b><tt>' + logo_texto + '</tt></b></div>';
        element += '<div class="contenedor-titulo"><div class="titulo titulo-ejercicio"><b><tt>' + block.kwargs.title + '</tt></b>';
        element += '<div class="requisitos">';
        // Establecemos los Requisitos necesarios para realizar la tarea
        element += '<b><i><tt>Requisitos: <span class="textoreq">' + block.kwargs.req + '</span>';
        element += '</b></i></tt></div>';
        element += '</div></div>';
        // Agregamos el cuerpo o contenido de la tarea a realizar
        element += '<div class="contenido">' + block.body + '</div>';
        // Establecemos el formato de entrega del ejercicio:
        element += '<div class="formato_entrega">';
        element += '<tt><b>Formato de Entrega:</b> ' + block.kwargs.formatoentrega + '</tt>';
        element += '</div></div>';

        return element;
      }
    },
    notificacion_didyouknow: {
      process: function (block) {
        ruta_base = "https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master";
        logo_aviso = '<img src="' + ruta_base + '/assets/images/logoaviso-x80.png?raw=true"></img>';
        logo_texto = '¿¿Sabías qué??';

        element = '<div class="contenedor">';
        element += '<div class="image">' + logo_aviso + '</br><b><tt>' + logo_texto + '</tt></b></div>';
        element += '<div class="contenedor-titulo"><div class="titulo titulo-aviso"><b><tt>' + block.kwargs.title + '</tt></b></div></div>';
        element += '<div class="contenido">' + block.body + '</div>';
        element += '</div>';

        return element;
      }
    },
    notificacion_important: {
      process: function (block) {
        ruta_base = "https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master";
        logo_lupa = '<img src="' + ruta_base + '/assets/images/logolupa-x80.png?raw=true"></img>';
        logo_texto = '¡¡Importante!!';
        
        element = '<div class="contenedor">';
        element += '<div class="image">' + logo_alert + '</br><b><tt>' + logo_texto + '</tt></b></div>';
        element += '<div class="contenedor-titulo"><div class="titulo titulo-lupa"><b><tt>' + block.kwargs.title + '</tt></b></div></div>';
        element += '<div class="contenido">' + block.body + '</div>';
        element += '</div>';

        return element;
      }
    },
    notificacion_alert: {
      process: function (block) {
        logo_alert = '<img src="https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/logoalerta-x80.png?raw=true"></img>';
        logo_texto = '¡¡Aviso!!';

        element = '<div class="contenedor">';
        element += '<div class="image">' + logo_alert + '</br><b><tt>' + logo_texto + '</tt></b></div>';
        element += '<div class="contenedor-titulo"><div class="titulo titulo-alert"><b><tt>' + block.kwargs.title + '</tt></b></div></div>';
        element += '<div class="contenido">' + block.body + '</div>';
        element += '</div>';

        return element;
      }
    },
    notificacion_table: {
      process: function (block) {
        logo_info = '<img src="https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/logoalerta-x80.png?raw=true"></img>';
        formato_entrega = "Esto es el formato de entrega ...";
        requisitos = "Los requisitos van a ser ...";
        element = '<div class="">';
        element += '<table>';
        element += '<tr>';
        element += '<td rowspan="3">' + logo_info + '<br>' + block.kwargs.numexer + '</td>';
        element += '<td>' + block.kwargs.title + '</td>';
        element += '</tr>';
        element += '<tr>';
        element += '<td>' + requisitos + '</td>';
        element += '</tr>';
        element += '<tr>';
        element += '<td>' + block.body + '</td>';
        element += '</tr>';
        element += '<tr>';
        element += '<td colspan="2">' + formato_entrega + '</td>';
        element += '</tr>';
        element += '</table>';
        element += '</div>';
        return element;
      }
    }
  }

};