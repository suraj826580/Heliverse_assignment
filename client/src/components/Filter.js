import { Select, Stack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Context } from "./Context";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const filterObject = {
  domain: "",
  gender: "",
  available: "",
};

export default function Filter() {
  // const { filterValue, handleFilter } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setfilterValue] = useState(searchParams);
  const params = useLocation();

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setSearchParams({ [name]: value });
    // console.log(searchParams.getAll());
  };

  return (
    <Stack
      position={"sticky"}
      top={"20px"}
      mt={10}
      gap={5}
      direction={["row", "row", "column", "column"]}>
      <Select name="domain" value={filterValue.domain} onChange={handleFilter}>
        <option value="">Filter By Domain</option>
        <option value="Sales">Sales</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="IT">IT</option>
      </Select>
      <Select name="gender" value={filterValue.gender} onChange={handleFilter}>
        <option value="">Filter By Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Select
        name="available"
        value={filterValue.available}
        onChange={handleFilter}>
        <option value="">Filter By Availability</option>
        <option value={true}>Yes</option>
        <option value={false}>False</option>
      </Select>
    </Stack>
  );
}
