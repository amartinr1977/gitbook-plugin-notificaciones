# Plugin for GitBook: Notificaciones 

Este plugin va a permitir al usuario final introducir cuadros de dialogo o notificaciones personalizadas con un aspecto más atractivo que el que permite el codigo **mardown** por defecto.

## ¿Qué aspecto tiene?

El aspecto que tendrían los diálogos que incorparía el **Plugin Notificaciones** en tu **GitBook** sería similar al siguiente:

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

## Ejemplos de uso:

Las siguientes imágenes y trozos de código muestran como se configuraría una notificación en tu **GitBook**:

### Notificación de tipo Tarea

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

### Notificación de tipo _Alerta_

El código a usar en **GitBook** para hecer uso de este diálogo del **Plugin** sería uno similar al siguiente:

```
{% notificacion_alert title="¡¡Título de la Alerta!!" %}
El texto que se mostrará en la alerta será el que indiquemos en el cuerpo de la notificación.  Este tipo de diálogo o notificación puede resultar útil cuando queremos advertir a un usuario de algún aspecto que estemos tratando.
{% endnotificacion_alert %}
```

Su aspecto resultante sería:

![Ejemplo de Notificación de Tipo Alerta](https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/notificacion_alert-example.png?raw=true)

### Notificación de tipo _¿Sabías qué ...?_

El código a usar en **GitBook** para hecer uso de este diálogo del **Plugin** sería uno similar al siguiente:

```
{% notificacion_didyouknow title="¿Sabías que ...??" %}
Este diálogo puede servirnos para enfatizar algo que consideramos que puede ser interesante que sepa el usuario final.  Al igual que en los diálogos o notificaciones anteriores puede hacerse uso de etiquetado <b>HTML/CSS</b> para mejorar el aspecto del cuerpo del contenido de la notificación.
{% endnotificacion_didyouknow %}
```

Su aspecto resultante sería:

![Ejemplo de Notificación de Tipo didyouknow](https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/notificacion_didyouknow-example.png?raw=true)

### Notificación de tipo _Important_

El código a usar en **GitBook** para hecer uso de este diálogo del **Plugin** sería uno similar al siguiente:

```
{% notificacion_important title="Lo más importante es que el Código es Libre" %}
Este diálogo puede servirnos para <b>enfatizar los aspectos más importantes</b> de todo lo que le queremos mostrar al usuario final.  Al igual que en los diálogos o notificaciones anteriores puede hacerse uso de etiquetado <b>HTML/CSS</b> para mejorar el aspecto del cuerpo del contenido de la notificación.
{% endnotificacion_important %}
```

Su aspecto resultante sería:

![Ejemplo de Notificación de Tipo Importante](https://github.com/amartinr1977/gitbook-plugin-notificaciones/blob/master/assets/images/notificacion_important-example.png?raw=true)