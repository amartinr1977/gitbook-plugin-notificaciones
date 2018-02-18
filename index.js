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
        return "Hola " + block.body;
      }
    }
  }

};