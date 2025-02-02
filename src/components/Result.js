import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RankingDialog from "./RankingDialog";
import ValueBox from "./ValueBox";

/**
 * 結果を表示する画面のコンポーネント。
 * @returns
 */
const Result = () => {
  const { money } = useParams();
  const navigate = useNavigate();
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <Box className="App">
      <Typography variant="h1">
        <Box className={"h1-header"}>BlackJack</Box>
      </Typography>
      <Box id="table">
        <Box mt={10}>
          <Typography variant="h1">
            <Box style={{ color: "#f8f4e6", fontSize: "70px" }}>結果</Box>
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="h4">
            <Box style={{ color: "#f8f4e6" }}>{money > 100000 ? "WIN!!" : "LOSE..."}</Box>
          </Typography>
        </Box>
        <Box mt={5} mx={60}>
          <ValueBox text={`収支：${money - 100000}`} />
          <ValueBox text={`所持金：${money}`} />
        </Box>
        <Box mt={5}>
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/`);
            }}
          >
            スタートへ
          </Button>
        </Box>
        <Box mt={5}>
          <Button variant="contained" onClick={handleClickOpenConfirm}>
            ランキング
          </Button>
        </Box>
      </Box>
      <RankingDialog open={openConfirm} onClose={handleCloseConfirm} money={money} />
    </Box>
  );
};

export default Result;
