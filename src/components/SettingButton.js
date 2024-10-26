import { Button } from "@mui/material";
import React, { useState } from "react";
import SettingDialog from "./SettingDialog";

/**
 * 掛け金設定のダイアログのコンポーネント。
 * @param isOpen 開いているかどうか。
 * @param onClose 閉じるための関数。
 * @param betAmount 掛け金。
 * @param onChange 掛け金変更する関数。
 * @returns
 */
const SettingButton = ({ betAmount, handleBetAmountChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        設定
      </Button>
      <SettingDialog
        isOpen={isOpen}
        onClose={handleDialogClose}
        betAmount={betAmount}
        onChange={handleBetAmountChange}
      />
    </>
  );
};

export default SettingButton;
