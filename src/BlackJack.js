import { Box } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Toaster, toast } from "react-hot-toast";
import BlackJackButtons from "./components/BlackJackButtons";
import GameProgressButton from "./components/GameProgressButton";
import PlayArea from "./components/PlayArea";
import * as BJUtils from "./utils/BlackJackUtils";

/** デッキ初期値 */
const initialDeck = BJUtils.getDeck(3);

/** デッキ使用量 */
const penetration = 0.6;

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
 * @param state ゲームの現在の状態を表すオブジェクト。各要素はカード（スートとランク）を表す。
 * @param action プレイヤーの行動を表すオブジェクト。行動の種類（例： “hit”, "stand"など）。
 * @return  更新後のゲームの状態を表すオブジェクト。
 */
function reducer(state, action) {
  switch (action.type) {
    case "init": {
      // プレイヤーのハンドの枚数が 2枚より少なければ、以下の処理を行う
      if (state.playersHand.length < 2) {
        const [newDeck, newHand] = BJUtils.deal(state.deck, state.playersHand);
        state = { ...state, deck: newDeck, playersHand: newHand };
      }
      // ディーラーのハンドの枚数が 2枚より少なければ、以下の処理を行う
      if (state.dealersHand.length < 2) {
        const [newDeck, newHand] = BJUtils.deal(state.deck, state.dealersHand);
        state = { ...state, deck: newDeck, dealersHand: newHand };
      }
      return state;
    }
    case "hit": {
      const [newDeck, newHand] = BJUtils.deal(state.deck, state.playersHand);
      return { ...state, deck: newDeck, playersHand: newHand };
    }
    case "stand": {
      return { ...state, isPlayersTurnEnd: true };
    }
    case "checkPlayersHand": {
      const total = BJUtils.getTotal(state.playersHand);
      if (total > 21) {
        return { ...state, isDealersTurnEnd: true, isPlayersTurnEnd: true };
      } else if (total === 21) {
        return { ...state, isPlayersTurnEnd: true };
      } else {
        return { ...state };
      }
    }
    case "dealersAction": {
      if (BJUtils.shouldHitForDealer(state.dealersHand)) {
        const [newDeck, newHand] = BJUtils.deal(state.deck, state.dealersHand);
        return { ...state, deck: newDeck, dealersHand: newHand };
      } else {
        return { ...state, isDealersTurnEnd: true };
      }
    }
    case "next": {
      return { ...state, playersHand: [], dealersHand: [], isDealersTurnEnd: false, isPlayersTurnEnd: false };
    }
    case "shuffle": {
      const newDeck = BJUtils.getDeck(3);
      return { ...state, deck: newDeck };
    }
    case "checkBlackJack": {
      if (BJUtils.isBlackJack(state.playersHand) || BJUtils.isBlackJack(state.dealersHand)) {
        return { ...state, isDealersTurnEnd: true, isPlayersTurnEnd: true };
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
}

/**
 * BlackJack コンポーネント
 */
export default function BlackJack({ betAmount, handleBetAmountChange }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // カードを初期化します。
  useEffect(() => {
    if (state.dealersHand.length < 2 || state.playersHand.length < 2) {
      dispatch({ type: "init" });
    }
  }, [state.dealersHand, state.playersHand]);

  // ブラックジャックかどうかをチェックします。
  useEffect(() => {
    if (state.dealersHand.length === 2 && state.playersHand.length === 2) {
      dispatch({ type: "checkBlackJack" });
    }
  }, [state.dealersHand, state.playersHand]);

  // プレイヤーのターンが終わったら、ディーラーのアクションを実行します。
  useEffect(() => {
    if (state.isPlayersTurnEnd && !state.isDealersTurnEnd) {
      dispatch({ type: "dealersAction" });
    }
  }, [state.isPlayersTurnEnd, state.isDealersTurnEnd, state.dealersHand]);

  // シャッフルタイム。
  useEffect(() => {
    if (state.deck.length <= state.minimumNumber) {
      dispatch({ type: "shuffle" });
      toast("Shuffled!!", {
        style: {
          borderRadius: "10px",
          background: "#737373",
          color: "#ffffff"
        }
      });
    }
  }, [state.deck, state.minimumNumber]);

  /**
   * HIT して、ハンドのスコアをチェックします。
   */
  function doHit() {
    dispatch({ type: "hit" });
    dispatch({ type: "checkPlayersHand" });
  }

  /**
   * STAND します。
   */
  function doStand() {
    dispatch({ type: "stand" });
  }

  /**
   * 次のターンに進みます。
   */
  function next() {
    dispatch({ type: "next" });
  }

  /**
   * 現在のターンに従って、ゲーム進行ボタンまたはブラックジャックボタンを返却します。
   * @return {JSX.Element} ゲーム進行ボタンまたはブラックジャックボタン
   */
  // TODO: 戻り値 undefind でいいのか TS 変更後に確認。
  function getButtons() {
    if (state.isDealersTurnEnd && state.isPlayersTurnEnd) {
      return (
        <GameProgressButton onClickNext={next} betAmount={betAmount} handleBetAmountChange={handleBetAmountChange} />
      );
    } else if (!state.isPlayersTurnEnd) {
      return <BlackJackButtons onClickHit={doHit} onClickStand={doStand} betAmount={betAmount} />;
    }
  }

  return (
    <Box>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <PlayArea
        dealersHand={state.dealersHand}
        playersHand={state.playersHand}
        isPlayersTurnEnd={state.isPlayersTurnEnd}
        isDealersTurnEnd={state.isDealersTurnEnd}
      />
      <Box>{getButtons()}</Box>
    </Box>
  );
}
