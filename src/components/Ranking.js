import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ValueBox from "./ValueBox";
import Papa from "papaparse";

/**
 * ランキングを表示する画面のコンポーネント。
 * @returns
 */
const Ranking = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // CSVファイルを読み込む
    Papa.parse("/rankingData.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results);
        const limitedData = results.data.slice(0, 5);
        setData(limitedData);
      }
    });
  }, []);

  return (
    <Box className="App">
      <Typography variant="h1">
        <Box className={"h1-header"}>スコアランキング</Box>
      </Typography>
      <Box id="table">
        <Box mt={10}>
          <Typography variant="h1">
            <Box style={{ color: "#f8f4e6", fontSize: "30px", fontWeight: "bold" }}>RANK : NAME / SCORE</Box>
          </Typography>
        </Box>
        <Box mt={2} mx={30} style={{ fontSize: "25px" }}>
          {data.map((item, index) => (
            <ValueBox key={index} text={`${index + 1}位 : ${item.user} / ￥${Number(item.money).toLocaleString()}`} />
          ))}
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
      </Box>
    </Box>
  );
};

export default Ranking;
