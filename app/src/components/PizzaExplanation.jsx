// src/components/PizzaExplanation.jsx
import React, { useState } from 'react';
import styles from '../../page.module.css';

const PizzaExplanation = () => {
  const [visible, setVisible] = useState(false);

  // Estilos inline para este componente didáctico
  const boxStyle = {
    background: '#e3f2fd', // Azulito suave
    border: '1px solid #90caf9',
    borderRadius: '8px',
    padding: '15px',
    marginTop: '30px',
    fontSize: '0.9rem',
    color: '#0d47a1'
  };

  const stepStyle = {
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '1px dashed #bbdefb'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto' }}>
      <button 
        onClick={() => setVisible(!visible)}
        style={{
          background: visible ? '#ef5350' : '#42a5f5',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
          fontWeight: 'bold'
        }}
      >
        {visible ? 'Ocultar Explicación 🎓' : '¿Cómo funciona esta App? 🎓'}
      </button>

      {visible && (
        <div style={boxStyle}>
          <h3 style={{marginTop: 0}}>Arquitectura de la Pizzería React</h3>
          
          <div style={stepStyle}>
            <strong>1. El Estado Principal (En Page.js):</strong>
            <p>Todo nace en la variable <code>ordenes</code>. Es un array (lista) que vive en el componente padre. Si este array cambia, React actualiza la pantalla.</p>
          </div>

          <div style={stepStyle}>
            <strong>2. El Formulario (Hijo 1):</strong>
            <p>El componente <code>PizzaForm</code> tiene su propio estado interno para controlar los inputs. Al dar click en "Agregar", no guarda la pizza él mismo, sino que llama a una función que le prestó el padre: <code>agregarOrden()</code>.</p>
          </div>

          <div style={stepStyle}>
            <strong>3. Comunicación Hijo ➡️ Padre:</strong>
            <p>Cuando se ejecuta <code>agregarOrden(nuevaPizza)</code>, el padre recibe los datos y usa <code>setOrdenes([...anteriores, nueva])</code>. El <strong>Spread Operator (...)</strong> es vital aquí para no borrar lo que ya teníamos.</p>
          </div>

          <div style={{...stepStyle, borderBottom: 'none'}}>
            <strong>4. El Renderizado (Hijo 2):</strong>
            <p>Como el estado <code>ordenes</code> cambió, React vuelve a pintar la lista usando <code>.map()</code>. Cada pizza se convierte en un componente <code>PizzaItem</code>.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PizzaExplanation;