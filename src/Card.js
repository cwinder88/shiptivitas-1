import React from 'react';
import './Card.css';

export default function Card({ client }) {
  return (
    <div className={`Card ${client.status}`} data-id={client.id}>
      <h4>{client.name}</h4>
      <p>{client.description}</p>
    </div>
  );
}
