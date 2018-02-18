# Notificaciones plugin for GitBook

Este plugin va a permitir al usuario final introducir cuadros de dialogo personalizados con un aspecto más atractivo que el que permite el codigo '''mardown''' por defecto.

## ¿Qué aspecto tiene?

The following image shows all the notificacions you can create:

![terminal themes](https://github.com/davidmogar/gitbook-plugin-notificacion/blob/resources/images/notificacions.png?raw=true)

## How can I use this plugin?

You only have to edit your book.json and modify it adding something like this:

```json
{
    "plugins": [
        "myplugin@git+https://github.com/amartinr1977/gitbook-plugin-notificaciones.git#0.0.1"
    ]
}
```

Now, to define your notificacions you will have to add a content similar to the next one:

```
{% notificacion %}
notificacion without title.
{% endnotificacion %}

{% notificacion title="This is a notificacion with title" %}
notificacion with title and default style.
{% endnotificacion %}

{% notificacion style="danger", title="This is a danger notificacion" %}
notificacion with title and danger style.
{% endnotificacion %}

{% notificacion style="info", title="This is an info notificacion" %}
notificacion with title and info style.
{% endnotificacion %}

{% notificacion style="success", title="This is a success notificacion" %}
notificacion with title and success style.
{% endnotificacion %}

{% notificacion style="warning", title="This is a warning notificacion" %}
notificacion with title and warning style.
{% endnotificacion %}
```

Just choose the notificacion you want and add it! Awesome right?
