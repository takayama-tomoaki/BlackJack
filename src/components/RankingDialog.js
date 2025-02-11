import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRankingTable } from "../addRankingTable";

/**
 * ランキングダイアログのコンポーネント。
 * @param {boolean} open ダイアログが開いているかどうか。
 * @param {function} onClose ダイアログを閉じるための関数。
 * @param {number} money 所持金。
 * @returns {JSX.Element} ランキングダイアログのコンポーネント。
 */
const RankingDialog = ({ open, onClose, money }) => {
  const [openInput, setOpenInput] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleConfirmClose = (shouldRecord) => {
    onClose();
    if (shouldRecord) {
      setOpenInput(true);
    } else {
      navigate(`/`);
    }
  };

  const handleInputClose = async () => {
    if (name.trim() === "") {
      alert("ニックネームを入力してください。");
      return;
    }
    setOpenInput(false);
    await addRankingTable(name, money);
    navigate(`/Ranking`);
  };

  return (
    <>
      <Dialog open={open} onClose={() => handleConfirmClose(false)}>
        <DialogTitle>スコアの記録</DialogTitle>
        <DialogContent>
          <DialogContentText>今回のスコアを記録しますか？</DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button onClick={() => handleConfirmClose(true)} color="primary" autoFocus>
            はい
          </Button>
          <Button onClick={() => handleConfirmClose(false)} color="primary">
            いいえ
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openInput} onClose={handleInputClose}>
        <DialogTitle>ニックネーム入力</DialogTitle>
        <DialogContent>
          <DialogContentText>スコアを記録するためにニックネームを入力してください。</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="10文字まで入力できます。"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputProps={{ maxLength: 10 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInputClose} color="primary">
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RankingDialog;
