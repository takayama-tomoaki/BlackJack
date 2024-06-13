import React, { useEffect, useReducer } from "react";
import { Box } from "@mui/material";
import PlayArea from "./components/PlayArea";
import BlackJackButtons from "./components/BlackJackButtons";
import GameProgressButton from "./components/GameProgressButton";
import * as BJUtils from "./utils/BlackJackUtils";

/** デッキ初期値 */
const initialDeck = BJUtils.getDeck(3);

/** デッキ使用量 */
const penetration = 0.6;
console.log(BJUtils.getMinimumNumber(initialDeck, penetration));

/** 初期 state */
const initialState = {
  deck: initialDeck,
  minimumNumber: BJUtils.getMinimumNumber(initialDeck, penetration),
  dealersHand: [],
  playersHand: [],
  isPlayersTurnEnd: false,
  isDealersTurnEnd: false
};

/**
 * レデューサー
 * -----
 * ゲームを進行するための処理を行う
 *
 * @param {object} state
 * @param {object} action
 * @return {object} state
 */
function reducer(state, action) {
  switch (action.type) {
    case "init": {
      return { ...state };
    }
    case "hit": {
      return { ...state };
    }
    case "stand": {
      return { ...state };
    }
    case "checkPlayersHand": {
      return { ...state };
    }
    case "dealersAction": {
      return { ...state };
    }
    case "next": {
      return { ...state };
    }
    case "shuffle": {
      return { ...state };
    }
    case "checkBlackJack": {
      return { ...state };
    }
    case "try_reducer": {
      console.log("new case now!");
      return { ...state };
    }
    default:
      return { ...state };
  }
}

/**
 * BlackJack コンポーネント
 * -----
 */
export default function BlackJack() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // カード初期化
  useEffect(() => {
    // ディーラーとプレイヤー、いずれかのハンドが 2枚より少なければ、以下の処理を行う
    if (state.dealersHand.length < 2 || state.playersHand.length < 2) {
      // 関数 dispatch() を、引数に {type: "init"} を渡して呼び出す
      dispatch({ type: "init" });
    }
  }, [state.dealersHand, state.playersHand]);

  // #7
  useEffect(() => {
    dispatch({ type: "try_reducer" });
  }, []);

  // ブラックジャックかどうかをチェック
  useEffect(() => {}, []);

  // プレイヤーのターンが終わったら、ディーラーのアクションを実行
  useEffect(() => {}, []);

  // シャッフルタイム
  useEffect(() => {}, []);

  /**
   * HITする
   * -----
   * HIT して、ハンドのスコアをチェックする
   */
  function doHit() {}

  /**
   * STAND する
   * -----
   * STAND する
   */
  function doStand() {}

  /**
   * 次のターンに進む
   * -----
   * 次のターンに進む
   */
  function next() {}

  /**
   * ボタン取得
   * -----
   * 現在のターンに従って、ゲーム進行ボタンまたはブラックジャックボタンを返却する
   *
   * @return {JSX.Element} ゲーム進行ボタンまたはブラックジャックボタン
   */
  function getButtons() {}

  return (
    <Box>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <PlayArea />
      <Box>{getButtons()}</Box>
    </Box>
  );
}
