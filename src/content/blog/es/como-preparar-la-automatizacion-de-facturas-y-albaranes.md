---
id: facturas-preparar
title: Cómo preparar la automatización de facturas y albaranes
description: Los pasos para dejar listos tus documentos, tus hojas de cálculo y tus reglas de revisión antes de automatizar la lectura de facturas y albaranes.
date: 2026-04-28
category: automation
product: invoice-automation
---
Automatizar la lectura de facturas y albaranes da mejores resultados cuando se prepara bien. No hace falta ser experto en tecnología: basta con tener claro qué documentos recibes, qué datos necesitas y adónde tienen que ir. Esta guía te ayuda a reunir esa información antes de empezar, para que la puesta en marcha sea más rápida y no haya sorpresas.

## 1. Reúne una muestra de documentos reales

Junta ejemplos de lo que recibes de verdad: facturas en PDF que llegan por correo, albaranes en papel, fotos hechas con el móvil y documentos escaneados. Incluye a tus proveedores principales y también alguno que te dé problemas, como un albarán escrito a mano o una factura con muchas líneas. Cuanto más representativa sea la muestra, mejor se ajustará la [[automatización|automatizacion]].

## 2. Decide qué datos necesitas

No todos los negocios necesitan lo mismo. Marca en esta lista lo que te interesa:

- Proveedor y su identificación fiscal.
- Número de documento y fechas.
- Base imponible, impuestos y total.
- Líneas de producto: referencia, descripción, cantidad y precio.
- Número de pedido o de albarán relacionado.

Si solo necesitas los totales para contabilidad, el planteamiento es más sencillo que si quieres controlar el stock línea a línea.

## 3. Define el destino y su formato

Piensa adónde deben ir los datos:

| Destino | Qué conviene preparar |
| --- | --- |
| Hoja de cálculo o Excel | Las columnas exactas y su orden |
| Archivo CSV | El formato que acepta tu programa de contabilidad |
| CRM, ERP o aplicación de gestión | Qué campos recibe y si admite datos por [[webhook|webhook]] |

Si los datos tienen que llegar a otro sistema, esa [[integración|integracion]] se diseña en esta fase.

## 4. Ordena cómo entran los documentos

Acuerda un único punto de entrada: por ejemplo, una dirección de correo solo para facturas de proveedores o una carpeta donde se suben los escaneos. Si cada persona guarda los documentos en un sitio distinto, nada se automatiza bien.

## 5. Establece reglas de revisión

La automatización avisa cuando un documento necesita revisión. Decide tú qué casos quieres revisar siempre:

1. Proveedores nuevos que no estaban en la lista.
2. Importes por encima de una cantidad que tú fijes.
3. Documentos borrosos o incompletos.
4. Totales que no coinciden con la suma de las líneas.

Nombra también a la persona responsable de atender esos avisos.

## 6. Haz una prueba con un periodo real

Antes de usarlo en el día a día, procesa los documentos de unas semanas y compara el resultado con lo que se habría tecleado a mano. Así compruebas que los datos salen donde y como esperas.

## 7. Cuida los datos

Facturas y albaranes contienen datos de proveedores y, a veces, de personas. Limita el acceso a quien lo necesite y trátalos conforme al [[RGPD|rgpd]].

Con esta preparación, la [Automatización de facturas y albaranes](product:invoice-automation) se adapta a tus documentos desde el primer día. Para evitar los fallos más comunes una vez en marcha, lee [Errores al automatizar facturas y cómo revisar los resultados](post:facturas-errores).
