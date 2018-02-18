module.exports = {

  book: {

    assets: './assets',

    css: [
      'icons.css',
      'panel.css'
    ]
  },

  blocks: {
    notificacion_info: {
      process: function (block) {
        logo_info = '<img src="images/logoalerta-x80.png"></img>';
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