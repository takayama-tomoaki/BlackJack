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
 * @param {boolean} isOpen 開いているかどうか。
 * @param {function} onClose 閉じるための関数。
 * @param {number} betAmount 掛け金。
 * @param {function} onChange 掛け金変更する関数。
 * @returns {JSX.Element} 掛け金設定のダイアログのコンポーネント。
 */
const SettingDialog = ({ isOpen, onClose, betAmount, onChange }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>掛け金設定</DialogTitle>
      <DialogContent>
        <DialogContentText component="span">
          <Typography id="bet_amount" component="span">
            掛け金: {betAmount}
          </Typography>
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
