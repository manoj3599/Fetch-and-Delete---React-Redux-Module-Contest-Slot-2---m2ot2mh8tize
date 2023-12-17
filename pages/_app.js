import "@/styles/globals.css";
import React, { useState, useEffect } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run this effect only once on component mount

  const contextValue = {
    data,
    setData,
    msg,
    setMsg,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

