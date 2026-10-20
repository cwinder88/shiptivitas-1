import React from 'react';
import Card from './Card';
import './Swimlane.css';

export default function Swimlane({ name, clients, dragulaRef, status }) {
  return (
    <div className="Swimlane">
      <h3>{name}</h3>

      <div
        className="Swimlane-column"
        ref={dragulaRef}
        data-status={status}
      >
        {clients.map(client => (
          <Card key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}
