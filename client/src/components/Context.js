import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();
export default function ContextProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    (() => {
      axios
        .get(`http://localhost:8080/users`)
        .then((res) => {
          setData((pre) => res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
}
