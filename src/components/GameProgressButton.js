import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";

/**
 * ゲーム進行ボタンコンポーネント
 * -----
 *
 * @param {object} props
 * @return {JSX.Element} ゲーム進行ボタン
 */
export default function GameProgressButton(props) {
  return (
    <Box mt={1}>
      <Button variant="contained" onClick={props.onClickNext}>
        NEXT
      </Button>
    </Box>
  );
}
