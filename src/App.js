import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BlackJack from "./BlackJack";
import SettingButton from "./components/SettingButton";
import ValueBox from "./components/ValueBox";
import "./styles.css";

export default function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [betAmount, setBetAmount] = useState(1000);
  const [money, setMoney] = useState(100000);

  const handleBetAmountChange = (event, value) => {
    setBetAmount(value);
  };

  return (
    <Box className="App">
      <Typography variant="h1">
        <Box className={"h1-header"}>BlackJack</Box>
      </Typography>
      <Box id="table">
        {isGameStart ? (
          <BlackJack betAmount={betAmount} handleBetAmountChange={handleBetAmountChange} />
        ) : (
          <>
            <Box className="center-button" display="flex" flexDirection="row" justifyContent="center" mt={1}>
              <Box mx={1}>
                <SettingButton betAmount={betAmount} handleBetAmountChange={handleBetAmountChange} />
              </Box>
              <Box mx={1}>
                <Button variant="contained" onClick={() => setIsGameStart(true)}>
                  START
                </Button>
              </Box>
            </Box>
            <Box mt={1} display="flex" flexDirection="row" justifyContent="space-around" style={{ marginTop: -200 }}>
              <ValueBox text={`掛け金：${betAmount}`} />
              <Box mx={1}>
                <ValueBox text={`所持金：${money}`} />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
