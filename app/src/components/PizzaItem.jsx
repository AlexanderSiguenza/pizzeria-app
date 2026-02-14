// src/components/PizzaItem.jsx
import React from 'react';
import styles from '../../page.module.css';

const PizzaItem = ({ orden, index, eliminarOrden }) => {
  return (
    <div className={styles.card_pedido}>
      <h3>🍕 {orden.sabor}</h3>
      <p><strong>Cliente:</strong> {orden.cliente}</p>
      <p><strong>Precio:</strong> ${orden.precio}</p>
      
      {/* Botón para eliminar (Comunicación Hijo -> Padre) */}
      <button 
        className={styles.btn_delete} 
        onClick={() => eliminarOrden(index)}
      >
        Cancelar Pedido
      </button>
    </div>
  );
};

export default PizzaItem;