import { Select, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";

export default function Filter() {
  return (
    <Stack
      position={"sticky"}
      top={"20px"}
      mt={10}
      gap={5}
      direction={["row", "row", "column", "column"]}>
      <Select name="domain">
        <option value="">Filter By Domain</option>
        <option value="Sales">Sales</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="IT">IT</option>
      </Select>
      <Select name="gender">
        <option value="">Filter By Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Select name="available">
        <option value="">Filter By Availability</option>
        <option value={true}>Yes</option>
        <option value={false}>False</option>
      </Select>
    </Stack>
  );
}
