# 🍕 Pizzería Don React - Sistema de Pedidos

Este proyecto es una aplicación práctica construida con **Next.js** y **React** para gestionar una lista de pedidos de pizza. A continuación, se detalla la arquitectura y el flujo de datos de la aplicación.

## 🧠 Arquitectura y Flujo de Datos

La aplicación sigue el patrón de diseño de **"Componentes Controlados"** y **"Flujo de Datos Unidireccional"**. Aquí explicamos paso a paso qué sucede "bajo el capó":

### 1. El Estado Principal (Single Source of Truth)
**Ubicación:** `src/app/page.js`

Todo el sistema gira en torno a la variable de estado `ordenes`. Este array vive en el componente padre (`Home`) porque es el punto común entre el formulario (que agrega datos) y la lista (que muestra datos).

* **Concepto:** *Lifting State Up* (Elevar el estado).
* **Comportamiento:** React "observa" esta variable. En el momento en que `ordenes` cambia (se agrega o borra un pedido), React dispara automáticamente una actualización (re-render) de la pantalla para reflejar los cambios.

### 2. El Formulario y el Estado Local
**Ubicación:** `src/components/PizzaForm.jsx`

El formulario tiene su propio `useState` interno. Esto se conoce como **Estado Local**.
* Este estado solo sirve para controlar lo que el usuario escribe en los inputs (`cliente`, `sabor`, `precio`) en tiempo real.
* **Importante:** El formulario *no tiene permiso* para modificar la lista de órdenes principal directamente. Solo recolecta los datos.

### 3. Comunicación Hijo ➡️ Padre (Props como Funciones)
¿Cómo pasan los datos del Formulario al Padre? A través de las **Props**.

1.  El Padre crea una función llamada `agregarOrden`.
2.  El Padre le "presta" esta función al Hijo (`PizzaForm`) enviándola como una prop: `<PizzaForm agregarOrden={agregarOrden} />`.
3.  Cuando el usuario hace Submit, el Hijo ejecuta esa función prestada (`props.agregarOrden(nuevaPizza)`).
4.  Es como si el Hijo tuviera un control remoto para ejecutar código dentro del Padre.

### 4. Inmutabilidad y el Spread Operator (...)
**Ubicación:** Función `agregarOrden` en `page.js`

Cuando el Padre recibe la nueva orden, debe actualizar su estado. En React, **nunca debemos modificar el estado directamente** (ej: `ordenes.push()` está prohibido 🚫).

Usamos el **Spread Operator** para crear un nuevo array:
```javascript
setOrdenes([...ordenes, nuevaOrden]);
