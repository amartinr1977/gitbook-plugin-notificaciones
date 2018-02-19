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
    notificacion_important: {
      process: function (block) {
        ruta_base = "https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master";
        logo_lupa = '<img src=' + ruta_base + '"/assets/images/logolupa-x80.png?raw=true"></img>';
        
        element = '<div class="contenedor">';
        element += '<div class="image">' + logo_lupa + '</div>';
        element += '<div class="contenedor-titulo"><div class="titulo">' + block.kwargs.title + '</div></div>';
        element += '<div class="contenido">' + block.body + '</div>';
        element += '</div>';

        return element;
      }
    },
    notificacion_alert: {
      process: function (block) {
        logo_alert = '<img src="https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/logoalerta-x80.png?raw=true"></img>';
        
        element = '<div class="contenedor">';
        element += '<div class="image">' + logo_alert + '</div>';
        element += '<div class="contenedor-titulo"><div class="titulo">' + block.kwargs.title + '</div></div>';
        element += '<div class="contenido">' + block.body + '</div>';
        element += '</div>';

        return element;
      }
    },
    notificacion_info: {
      process: function (block) {
        logo_info = '<img src="https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/logoalerta-x80.png?raw=true"></img>';
        formato_entrega = "Esto es el formato de entrega ...";
        requisitos = "Los requisitos van a ser ...";
        element = '<div class="">';
        element += '<table>';
        element += '<tr>';
        element += '<td rowspan="3">' + logo_info + '<br>' + block.kwargs.numejer + '</td>';
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