import React from "react";
import { Box, CustomButton, Lorem } from "../../components";

export default function DisplayBoxClose() {
  const header = <p>Header</p>;

  return (
    <div>
      <Box header={header}>
        <Lorem />
        <CustomButton>Close</CustomButton>
      </Box>
      <Box header={header} x>
        <Lorem />
      </Box>
    </div>
  );
}
