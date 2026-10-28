---
id: mantenimiento-copias
title: Copias de seguridad de tu web: qué guardar, dónde y cada cuánto
description: Qué debe incluir una copia de seguridad de una web, dónde conviene almacenarla, con qué frecuencia hacerla y cómo comprobar que realmente sirve.
date: 2026-08-25
category: maintenance
product: web-maintenance
---
La [[copia de seguridad|copia-seguridad]] es el seguro de vida de una web. Mientras todo funciona parece innecesaria, pero el día que una actualización falla, alguien borra una página por error o la web sufre un ataque, es lo único que separa un susto de un desastre. Que exista no basta: tiene que estar completa, reciente y guardada en el lugar adecuado.

## Qué debe incluir

Una web tiene dos partes y la copia debe cubrir ambas:

- **Los archivos**: el código, el tema, los [[plugins|plugin]], las imágenes y los documentos subidos.
- **La base de datos**: los textos, las páginas, los productos, los pedidos, los usuarios y la configuración.

Una copia solo de archivos o solo de base de datos no permite recuperar la web entera. Si tienes tienda online o formularios que guardan solicitudes, la base de datos cambia a diario y es la parte más delicada.

## Dónde guardarla

La regla de oro es no guardar la copia solo en el mismo servidor que la web. Si el servidor falla o es atacado, la copia desaparece con él. Lo recomendable es tener al menos una copia fuera, en un servicio de almacenamiento distinto del [[hosting|hosting]]. Muchos proveedores incluyen copias automáticas, pero conviene saber cuántos días conservan y cómo se restauran.

## Cada cuánto

Depende de cuánto cambie tu web:

| Tipo de web | Frecuencia orientativa |
| --- | --- |
| Web corporativa que se actualiza poco | Semanal y antes de cada cambio |
| Web con blog o novedades frecuentes | Diaria |
| Tienda online o web con formularios y reservas | Diaria o varias veces al día |

Además, haz siempre una copia manual justo antes de actualizar el [[CMS|cms]] o cualquier complemento.

## Cuánto tiempo conservarlas

No basta con la última copia: a veces un problema tarda días en detectarse y la copia más reciente ya incluye el error. Conservar varias copias de distintas fechas, por ejemplo las de la última semana y alguna mensual, permite volver a un punto en el que todo estaba bien.

## Comprueba que funciona

Una copia que nunca se ha restaurado es una promesa sin comprobar. Cada cierto tiempo, restaura una copia en un entorno de pruebas y verifica que la web carga, que las imágenes aparecen y que los formularios funcionan.

## Protege los datos

Las copias contienen la misma información que la web, incluidos datos personales de clientes. Deben guardarse con acceso restringido y cumpliendo el [[RGPD|rgpd]], igual que la propia web.

Las copias de seguridad forman parte del [mantenimiento web básico](product:web-maintenance). Para ver el resto de tareas, lee [Qué incluye el mantenimiento web](post:mantenimiento-web).
