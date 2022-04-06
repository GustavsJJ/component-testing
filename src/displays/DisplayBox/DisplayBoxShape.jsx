import React from "react";
import { Box, Lorem } from "../../components";

export default function DisplayBoxShape() {
  return (
    <div>
      <Box x>
        <Lorem />
      </Box>
      <Box x round>
        <Lorem />
      </Box>
    </div>
  );
}
