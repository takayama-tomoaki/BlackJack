import React from "react";
import { Card as MuiCard, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

/**
 * カードスタイルフック
 */
const useCardStyles = makeStyles({
  root: {
    width: "105px",
    height: "150px",
    color: (props) => {
      if (props.card === null || props.hide === true) {
        return "black";
      }
      return props.card.suit === "❤" || props.card.suit === "♦" ? "red" : "black";
    },
    border: "1px solid grey"
  },
  content: {
    width: "100%",
    height: "100%"
  },
  top: {
    height: "30px",
    marginLeft: "10px"
  },
  middle: {
    fontSize: "30px",
    height: "90px",
    lineHeight: "90px"
  },
  bottom: {
    height: "30px",
    marginRight: "10px"
  }
});

/**
 * カードコンポーネント
 * @param props 表示するカードの情報を含むオブジェクト。
 * @return カードのスートとランクを表示します。
 */
// TODO: props の型を定義する。
export default function Card(props) {
  const classes = useCardStyles(props);
  const topAndBottom = props.card === null || props.hide ? "?" : props.card.suit + props.card.rank;
  const middle = props.card === null || props.hide ? "?" : props.card.suit;

  return (
    <MuiCard className={classes.root}>
      <Box className={classes.content} display="flex" flexDirection="column">
        <Box className={classes.top} alignSelf="flex-start">
          {topAndBottom}
        </Box>
        <Box className={classes.middle}>{middle}</Box>
        <Box className={classes.bottom} alignSelf="flex-end">
          {topAndBottom}
        </Box>
      </Box>
    </MuiCard>
  );
}
