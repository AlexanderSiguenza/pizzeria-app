// src/components/PizzaForm.jsx
import React, { useState } from 'react';
import styles from '../../page.module.css';

const PizzaForm = ({ agregarOrden }) => {
  // Estado local para los inputs del formulario
  const [pedido, setPedido] = useState({
    cliente: '',
    sabor: '',
    precio: ''
  });

  const handleChange = (e) => {
    /* Concepto de Guía 3: [e.target.name]
       Usamos computed property names para actualizar el campo correcto
    */
    setPedido({
      ...pedido,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar recarga
    // Validar campos vacíos
    if(!pedido.cliente.trim() || !pedido.sabor.trim() || !pedido.precio.trim()) {
        alert("Por favor completa todos los campos de la orden");
        return;
    }
    // Enviar datos al padre
    agregarOrden(pedido);
    // Limpiar formulario
    setPedido({ cliente: '', sabor: '', precio: '' });
  };

  return (
    <div className={styles.form_container}>
      <h3>Nueva Orden</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_group}>
            <input 
                type="text" name="cliente" placeholder="Nombre Cliente" 
                className={styles.input} 
                onChange={handleChange} value={pedido.cliente}
            />
        </div>
        <div className={styles.input_group}>
            <select name="sabor" className={styles.input} onChange={handleChange} value={pedido.sabor}>
                <option value="">Selecciona Sabor</option>
                <option value="Pepperoni">Pepperoni</option>
                <option value="Hawaiana">Hawaiana</option>
                <option value="Vegetariana">Vegetariana</option>
                <option value="4 Quesos">4 Quesos</option>
            </select>
        </div>
        <div className={styles.input_group}>
            <input 
                type="number" name="precio" placeholder="Precio ($)" 
                className={styles.input} 
                onChange={handleChange} value={pedido.precio}
            />
        </div>
        <button className={styles.btn_add}>Agregar Orden</button>
      </form>
    </div>
  );
};

export default PizzaForm;