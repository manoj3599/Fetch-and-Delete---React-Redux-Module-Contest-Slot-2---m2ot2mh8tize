import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ id, busName, ticketPrice, source, destination, onDelete }) {
  const { msg } = useContext(AuthContext);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="data">
      <div>ID: {id}</div>
      <div>Bus Name: {busName}</div>
      <div>Ticket Price: {ticketPrice}</div>
      <div>From: {source}</div>
      <div>To: {destination}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DataItem;
