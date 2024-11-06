import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slider,
  Typography
} from "@mui/material";
import React from "react";

/**
 * 掛け金設定のダイアログのコンポーネント。
 * @param isOpen 開いているかどうか。
 * @param onClose 閉じるための関数。
 * @param betAmount 掛け金。
 * @param onChange 掛け金変更する関数。
 * @returns
 */
const SettingDialog = ({ isOpen, onClose, betAmount, onChange }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>掛け金設定</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography id="bet_amount">掛け金: {betAmount}</Typography>
        </DialogContentText>
        <Slider value={betAmount} min={100} max={10000} step={100} onChange={onChange} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          決定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingDialog;
