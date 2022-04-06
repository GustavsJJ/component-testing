import React from "react";
import { Box, Lorem } from "../../components";

export default function DisplayBoxHeader() {
  const header = <p>Header</p>;

  return (
    <div>
      <Box>
        <p style={{ textAlign: "left", fontWeight: "bold" }}>Header</p>
        <Lorem />
      </Box>
      <Box header={header}>
        <Lorem />
      </Box>
    </div>
  );
}
