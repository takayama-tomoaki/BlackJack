import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import ValueBox from "./ValueBox";

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
    <>
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
      <Box mt={1} display="flex" flexDirection="row" justifyContent="space-around" style={{ marginTop: -100 }}>
        <Box mx={1}>
          <ValueBox text={`掛け金：${props.betAmount}`} />
        </Box>
        <Box mx={1}>
          <ValueBox text={`所持金：${props.money}`} />
        </Box>
      </Box>
    </>
  );
}
