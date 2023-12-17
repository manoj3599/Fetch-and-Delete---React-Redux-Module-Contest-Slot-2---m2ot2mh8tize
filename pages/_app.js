import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");

  const API = "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";

  useEffect(() => {
    // Fetch data when the component mounts
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const deleteRow = (id) => {
    // Filter out the row with the specified id
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setMsg("Data Deleted");

    // Reset the message after 3 seconds
    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

  const contextValue = {
    data,
    deleteRow,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

