import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";

/**
 * 結果を表示する画面のコンポーネント。
 * @returns
 */
const Result = () => {
  const { money } = useParams();
  return (
    <Box className="App">
      <Typography variant="h1">
        <Box className={"h1-header"}>BlackJack</Box>
      </Typography>
      <Box id="table">{money}</Box>
    </Box>
  );
};

export default Result;
