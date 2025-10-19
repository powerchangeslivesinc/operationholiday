import React from "react";
//import AppLayout from "../layout/AppLayout"; // adjust the import path based on your project structure

const Tickets: React.FC = () => {
  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Tickets</h1>
        <p className="text-gray-700 leading-relaxed">
          The Ticket Page lists all available service and resource “tickets” that organizations can provide at Santa’s Village.
          Each ticket represents a type of support (e.g., healthcare, childcare, career training, financial planning, food services)
          that attendees can access during the event. Partners and vendors may browse the full list and select the ticket categories
          they will cover. When you select a ticket type, you are pledging to provide that service or resource during Santa’s Village.
          This ensures a diverse, well-organized offering of assistance for families who attend. Please choose carefully, as tickets
          help us coordinate booth assignments and service availability.
        </p>
      </div>
  );
};

export default Tickets;