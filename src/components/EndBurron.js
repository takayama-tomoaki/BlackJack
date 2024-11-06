import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * 終了ボタンのコンポーネント。
 * @returns
 */
const EndButton = ({ money }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          navigate(`/Result/${money}`);
        }}
      >
        終了
      </Button>
    </>
  );
};

export default EndButton;
