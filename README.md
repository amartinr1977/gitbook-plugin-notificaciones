# Notificaciones plugin for GitBook

Este plugin va a permitir al usuario final introducir cuadros de dialogo personalizados con un aspecto más atractivo que el que permite el codigo '''mardown''' por defecto.

## ¿Qué aspecto tiene?

Las siguientes imágenes y trozos de código muestran como se configuraría una notificación en tu **GitBook**:

![Ejemplo de Notificación de Tipo Tarea](https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/notificacion_task-example.png?raw=true)

## ¿Cómo hacer uso del Plugin?

Para hacer uso de este **Plugin de GitBook** tan sólo tienes que editar el archivo **book.json** de tu GitBook y añadir el siguiente campo:

```json
{
    "plugins": [
        "notificaciones"
    ]
}
```

Una vez configurado el archivo anterior tan sólo será necesario hacer uso del plugin como se muestra a continuación, dependiendo del tipo de dialogo o notificación a mostrar.

### Ejemplos de uso: Notificación de tipo Tarea

```
{% notificacion_task title="Título de la Tarea", 
    numexer="1.1.2", 
    req="Requisitos para realizar la Tarea",
    formatoentrega="El formato de entraga de la solución del ejercicio debe ser ..." %}
La tarea a realizar consiste en lo que indicaremos en el cuerpo de la notificación.  Por ejemplo, podemos poner una lista de acciones a realizar, haciendo uso de una lista ordenada o desordenada mediante lenguaje <b>HTML/CSS</b>.  En el caso de una lista ordenada el aspecto que se mostraría es el siguiente:
<br/>
<ol>
<li>Deberás hacer <b>una captura de pantalla</b> de ...</li>
<li>Deberás <b>registrarte</b> en ...</li>
</ol>
<br/>
O una desordenada:
<br/>
<ul>
<li>Deberás llevar a cabo ...</li>
<li>Y por último ...</li>
</ul>

{% endnotificacion_task %}
```

Su aspecto resultante sería:

![Ejemplo de Notificación de Tipo Tarea](https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/notificacion_task-example.png?raw=true)