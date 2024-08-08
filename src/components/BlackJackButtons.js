import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";

/**
 * ブラックジャックボタンコンポーネント
 * -----
 * @param {object} props
 * @return {JSX.Element} ブラックジャックボタン
 */
export default function BlackJackButtons(props) {
  useEffect(() => {
    // 関数 click を宣言
    function click(event) {
      if (event.key === "h") {
        props.onClickHit();
      } else if (event.key === "s") {
        props.onClickStand();
      }
    }

    document.addEventListener("keydown", click, { passive: true });
    return () => {
      document.removeEventListener("keydown", click);
    };
  }, []);

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" mt={1}>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickHit}>
          HIT
        </Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickStand}>
          STAND
        </Button>
      </Box>
    </Box>
  );
}
