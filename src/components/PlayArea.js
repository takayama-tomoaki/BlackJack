import { Box, Chip, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../hooks/useStyles";
import * as BJUtils from "../utils/BlackJackUtils";
import Card from "./Card";

/**
 * プレイエリアコンポーネント
 * -----
 *
 * @param {object} props
 * @return {JSX.Element} プレイエリアコンポーネント
 */
export default function PlayArea(props) {
  const classes = useStyles();

  /**
   * ディーラーがブラックジャックまたはバーストしたかを表示する Chip コンポーネントを返却します。
   * @return ディーラーの状態を表示するチップコンポーネント。
   */
  function getDealersChip() {
    if (BJUtils.isBlackJack(props.dealersHand)) {
      return <Chip label="BLACK JACK!!" className={classes.winOrLose} />;
    } else if (BJUtils.getTotal(props.dealersHand) > 21) {
      return <Chip label="バースト!!" className={classes.winOrLose} />;
    } else {
      return <></>;
    }
  }

  /**
   * プレイヤーの勝敗、ブラックジャックまたはバーストしたかどうかを表示するチップを返却します。
   * @return プレイヤーの状態とゲームの結果を表示するチップコンポーネント。
   */
  function getPlayersChip() {
    if (BJUtils.getTotal(props.playersHand) > 21) {
      return <Chip label="バースト!!" className={classes.winOrLose} />;
    } else if (props.isPlayersTurnEnd) {
      return <Chip label={BJUtils.judge(props.dealersHand, props.playersHand)} className={classes.winOrLose} />;
    } else {
      return <></>;
    }
  }
  return (
    <Box className={classes.playArea}>
      <Grid container direction="column" spacing={5} alignItems="center" justifyContent="center">
        <Box className="arrow_box_common arrow_box_dealer" visibility={props.isPlayersTurnEnd ? "visible" : "hidden"}>
          {props.dealersHand.length >= 2 && BJUtils.getScoreForDisplay(props.dealersHand)}
        </Box>
        <Grid item className={classes.cardArea}>
          <Grid container direction="row">
            {props.dealersHand.map((card, index) => {
              const marginLeft = index === 0 ? "0px" : "-50px";
              const hide = index === 1 && !props.isDealersTurnEnd ? true : false;
              return (
                <Grid item key={index} style={{ marginLeft: marginLeft }}>
                  <Card card={card} hide={hide} />
                </Grid>
              );
            })}
          </Grid>
          <Box className={classes.winOrLoseContainer}>{getDealersChip()}</Box>
        </Grid>
        <Grid item className={classes.cardArea}>
          <Grid container direction="row">
            {props.playersHand.map((card, index) => {
              let marginLeft = index === 0 ? "0px" : "-50px";
              return (
                <Grid item key={index} style={{ marginLeft: marginLeft }}>
                  <Card card={card} />
                </Grid>
              );
            })}
          </Grid>
          <Box className={classes.winOrLoseContainer}>{getPlayersChip()}</Box>
        </Grid>
        <Box className="arrow_box_common arrow_box_player">
          {props.isDealersTurnEnd && props.isPlayersTurnEnd
            ? BJUtils.getPayOutMoneyString(props.dealersHand, props.playersHand, props.betAmount)
            : props.playersHand.length >= 2 && BJUtils.getScoreForDisplay(props.playersHand)}
        </Box>
      </Grid>
    </Box>
  );
}
