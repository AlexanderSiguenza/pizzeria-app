// src/app/page.js
"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import PizzaForm from '../app/src/components/PizzaForm';
import PizzaItem from '../app/src/components/PizzaItem';
import PizzaExplanation from '../app/src/components/PizzaExplanation';

export default function Home() {
  const [ordenes, setOrdenes] = useState([
    { cliente: 'Juan Perez', sabor: 'Pepperoni', precio: '12' },
    { cliente: 'Maria Lopez', sabor: 'Hawaiana', precio: '14' },
  ]);

  const agregarOrden = (nuevaOrden) => {
    setOrdenes([...ordenes, nuevaOrden]);
  };

  const eliminarOrden = (index) => {
    const nuevasOrdenes = [...ordenes];
    nuevasOrdenes.splice(index, 1);
    setOrdenes(nuevasOrdenes);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>🍕 Pizzería Don React 🍕</h1>
      
      {/* 2. AGREGAR AQUÍ LA EXPLICACIÓN */}
      <PizzaExplanation />

      <PizzaForm agregarOrden={agregarOrden} />

      <div className={styles.grid_pedidos}>
        {ordenes.map((item, index) => (
            <PizzaItem 
                key={index} 
                index={index}
                orden={item} 
                eliminarOrden={eliminarOrden} 
            />
        ))}
      </div>

      {ordenes.length === 0 && <p style={{textAlign:'center'}}>No hay pedidos pendientes.</p>}
    </main>
  );
}