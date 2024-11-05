import React from "react";

/**
 * 結果を表示する画面のコンポーネント。
 * @returns
 */
const Result = ({ money }) => {
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
