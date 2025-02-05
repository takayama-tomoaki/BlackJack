import { Box, Button } from "@mui/material";
import React from "react";
import EndButton from "./EndButton";
import SettingButton from "./SettingButton";
import ValueBox from "./ValueBox";

/**
 * ゲーム進行ボタンコンポーネント
 * -----
 *
 * @param {object} props
 * @return {JSX.Element} ゲーム進行ボタン
 */
export default function GameProgressButton(props) {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="center" mt={1}>
        <Box mx={1}>
          <EndButton money={props.money} />
        </Box>
        <Box mx={1}>
          <SettingButton betAmount={props.betAmount} handleBetAmountChange={props.handleBetAmountChange} />
        </Box>
        <Box mx={1}>
          <Button variant="contained" onClick={props.onClickNext}>
            NEXT
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
