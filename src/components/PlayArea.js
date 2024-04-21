import React from "react";
import { Box, Grid, Chip } from "@mui/material";
import { useStyles } from "../hooks/useStyles";
import Card from "./Card";
import * as BJUtils from "../utils/BlackJackUtils";

/**
 * プレイエリアコンポーネント
 * -----
 *
 * @param {object} props
 * @return {JSX.Element} プレイエリアコンポーネント
 */
export default function PlayArea(props) {
  const classes = undefined;

  /**
   * ディーラー用チップ取得
   * -----
   * ディーラーがブラックジャックまたはバーストしたかを表示する Chip コンポーネントを返却する
   *
   * @return {Chip} Chip
   */
  function getDealersChip() {}

  /**
   * プレイヤー用チップ取得
   * -----
   * プレイヤーの勝敗、ブラックジャックまたはバーストしたかどうかを表示するチップを返却する
   *
   * @return {Chip} Chip
   */
  function getPlayersChip() {}
  return (
    <Box className={classes.playArea}>
      <Grid container direction="column" spacing={5} alignItems="center" justifyContent="center">
        <Box className="arrow_box_common arrow_box_dealer" visibility="">
          {/* Task 1 */}
        </Box>
        <Grid item className={classes.cardArea}>
          <Grid container direction="row">
            {/* Task 2 */}
          </Grid>
          <Box className={classes.winOrLoseContainer}>{getDealersChip()}</Box>
        </Grid>
        <Grid item className={classes.cardArea}>
          <Grid container direction="row">
            {/* Task 3 */}
          </Grid>
          <Box className={classes.winOrLoseContainer}>{getPlayersChip()}</Box>
        </Grid>
        <Box className="arrow_box_common arrow_box_player">{/* Task 4 */}</Box>
      </Grid>
    </Box>
  );
}
