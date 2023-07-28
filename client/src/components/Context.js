import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const Context = createContext();

const object = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "male",
  avatar: "",
  domain: "sales",
  available: false,
};

export default function ContextProvider({ children }) {
  const [filterValue, setfilterValue] = useState("");
  const [formData, setformData] = useState(object);
  const [loading, setloading] = useState(false);
  const [searchValue, setsearchValue] = useState("");
  const [page, setpage] = useState(1);
  const [data, setData] = useState({});
  const limit = 20;
  const timer = useRef("");

  const handleFilter = (e) => {
    setfilterValue((pre) => e.target.value);
    console.log(filterValue);
  };

  // for grab the user Details
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    return axios({
      method: "post",
      url: "http://localhost:8080/users",
      headers: { "Content-Type": "application/json" },
      data: formData,
    })
      .then((res) => res)
      .catch((err) => err)
      .finally(() => {
        setloading(false);
        setformData(object);
      });
  };

  // for Search input Value
  const handleSearch = (e) => {
    setsearchValue((pre) => e.target.value);
    debounce(searchValue);
  };

  const handleSetPage = (number) => {
    setpage((pre) => pre + number);
  };

  const getData = () => {
    setloading(true);
    axios
      .get(`http://localhost:8080/users?page=${page}&limit=${limit}`)
      .then((res) => {
        setData((pre) => res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setloading(false);
      });
  };

  const debounce = (searchValue) => {
    setloading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      searchValue.length > 1
        ? axios
            .get(`http://localhost:8080/users?search=${searchValue}`)
            .then((res) => {
              setData((pre) => res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => {
              setloading(false);
            })
        : axios
            .get(`http://localhost:8080/users?page=${page}&limit=${limit}`)
            .then((res) => {
              setData((pre) => res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => {
              setloading(false);
            });
    }, 1000);
  };

  // http://localhost:8080/users?{searchValue.length<=1?:`page=${page}&limit=${limit}`:`search=${searchValue}`}

  // Handle Deletee

  const handleDelete = (id) => {
    return axios({
      method: "delete",
      url: `http://localhost:8080/users/${id}`,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res)
      .catch((err) => err)
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page
  ]);

  return (
    <Context.Provider
      value={{
        data,
        handleSetPage,
        page,
        loading,
        handleSearch,
        searchValue,
        formData,
        setformData,
        handleSubmit,
        handleDelete,
        filterValue,
        handleFilter,
      }}>
      {children}
    </Context.Provider>
  );
}
