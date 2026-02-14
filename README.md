1. El Estado Principal (En Page.js)
<p>Todo nace en la variable <code>ordenes</code>. Es un array (lista) que vive en el componente padre. Si este array cambia, React actualiza la pantalla.</p>
<p>El componente <code>PizzaForm</code> tiene su propio estado interno para controlar los inputs. Al dar click en "Agregar", no guarda la pizza él mismo, sino que llama a una función que le prestó el padre: <code>agregarOrden()</code>.</p>     
<p>Cuando se ejecuta <code>agregarOrden(nuevaPizza)</code>, el padre recibe los datos y usa <code>setOrdenes([...anteriores, nueva])</code>. El <strong>Spread Operator (...)</strong> es vital aquí para no borrar lo que ya teníamos.</p> 
<p>Como el estado <code>ordenes</code> cambió, React vuelve a pintar la lista usando <code>.map()</code>. Cada pizza se convierte en un componente <code>PizzaItem</code>.</p>
    
