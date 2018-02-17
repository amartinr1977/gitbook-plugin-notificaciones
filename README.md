# Notificaciones plugin for GitBook

Este plugin va a permitir al usuario final introducir cuadros de dialogo personalizados con un aspecto más atractivo que el que permite el codigo '''mardown''' por defecto.

## ¿Qué aspecto tiene?

The following image shows all the panels you can create:

![terminal themes](https://github.com/davidmogar/gitbook-plugin-panel/blob/resources/images/panels.png?raw=true)

## How can I use this plugin?

You only have to edit your book.json and modify it adding something like this:

```json
{
    "plugins": [
        "myplugin@git+https://github.com/davidmogar/gitbook-plugin-notificaciones.git#0.0.1"
    ]
}
```

Now, to define your panels you will have to add a content similar to the next one:

```
{% notificacion %}
Panel without title.
{% endpanel %}

{% panel title="This is a panel with title" %}
Panel with title and default style.
{% endpanel %}

{% panel style="danger", title="This is a danger panel" %}
Panel with title and danger style.
{% endpanel %}

{% panel style="info", title="This is an info panel" %}
Panel with title and info style.
{% endpanel %}

{% panel style="success", title="This is a success panel" %}
Panel with title and success style.
{% endpanel %}

{% panel style="warning", title="This is a warning panel" %}
Panel with title and warning style.
{% endpanel %}
```

Just choose the panel you want and add it! Awesome right?
