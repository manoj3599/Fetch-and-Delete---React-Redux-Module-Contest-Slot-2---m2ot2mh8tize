import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./_app";
import DataItem from "./dataItem";

function Dashboard() {
  const { data, setData, msg, setMsg } = useContext(AuthContext);

  const handleDelete = (id) => {
    // Check if a message is currently being displayed
    if (!msg) {
      // Filter out the data with the given id
      const updatedData = data.filter((item) => item.id !== id);
      // Update the data
      setData(updatedData);
      // Display the "Data Deleted" message for 3 seconds
      setMsg("Data Deleted");
      setTimeout(() => {
        setMsg("");
      }, 3000);
    }
  };

  return (
    <div id="dashboardPage">
      <div id="message">{msg}</div>

      {data.map((item) => (
        <DataItem key={item.id} {...item} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Dashboard;
