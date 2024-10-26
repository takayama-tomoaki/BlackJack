import { Box, Typography } from "@mui/material";
import React from "react";

/**
 * 値表示用のコンポーネントを表します。
 * @param text 表示する値。
 */
const ValueBox = ({ text }) => {
  return (
    <Box className="boxColor" mx={1} p={2}>
      <Typography variant="h7" color={"#dcdcdc"}>
        {text}
      </Typography>
    </Box>
  );
};

export default ValueBox;
