import React, { useContext } from "react";
import { AuthContext } from "./_app";
import DataItem from "./DataItem";

export default function Dashboard() {
  const { data, deleteRow } = useContext(AuthContext);

  return (
    <div id="dashboard">
      {data.map((item) => (
        <DataItem key={item.id} data={item} deleteRow={deleteRow} />
      ))}
    </div>
  );
}
