import React, { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ data, deleteRow }) {
  const { } = useContext(AuthContext);

  const handleDelete = () => {
    // Call the deleteRow function with the id of the current data item
    deleteRow(data.id);
  };

  return (
    <div className="data">
      <div>ID: {data.id}</div>
      <div>Bus Name: {data.busName}</div>
      <div>Ticket Price: {data.ticketPrice}</div>
      <div>From: {data.source}</div>
      <div>To: {data.destination}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DataItem;
