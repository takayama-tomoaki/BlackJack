import { suits, ranks } from "./Trump";

/**
 * デッキを作成します。
 * @param numberOfDeck セット数。
 * @return 初期のデッキ
 */
export function getDeck(numberOfDeck = 1) {
  const deck = [];

  Array.from({ length: numberOfDeck }, () => {
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        deck.push({ suit, rank });
      });
    });
  });

  return deck;
}

/**
 * デッキの最少枚数取得します。
 * @param initialDeck デッキ。
 * @param penetration デッキ使用量。
 * @return デッキの最小枚数。
 */
export function getMinimumNumber(initialDeck, penetration) {
  return initialDeck.length - Math.floor(initialDeck.length * penetration);
}

/**
 * 引数のランクに対応する数値を返却します。
 * @param rank カードのランク。
 * @return ランクに対応する数値。
 */
export function getRankNum(rank) {
  if (rank === "A") {
    return 1;
  } else if (["10", "J", "Q", "K"].includes(rank)) {
    return 10;
  } else {
    return parseInt(rank, 10);
  }
}

/**
 * 引数のハンドの合計数値を返却します。
 * @param  hand ランクの合計を計算するカードの配列。
 * @return ハンドのランクの合計値。
 */
export function getTotal(hand) {
  var total = 0;
  for (var card of hand) {
    total += getRankNum(card.rank);
  }
  return total;
}

/**
 * 山札からカードを一枚引いて、ハンドに加えます。
 * @param deck 山札。各要素はカード（スートとランク）を表すオブジェクト。
 * @param  hand ハンド（プレイヤーが持っているカード）。各要素はカード（スートとランク）を表すオブジェクト。
 * @returns 新しい山札と新しいハンド。山札から一枚カードを引いてハンドに加えた結果。
 */
export function deal(deck, hand) {
  // 定数宣言
  const newDeck = deck.slice(); // slice() メソッドを使って引数 deck のコピーで初期化する
  const newHand = hand.slice(); // slice() メソッドを使って引数 hand のコピーで初期化する
  const index = Math.floor(Math.random() * newDeck.length); // 0 ~ newDeck.length の範囲のランダムな整数で初期化する

  // 処理詳細
  const card = newDeck[index]; // 定数 newDeck からランダムに要素を取得する
  newHand.push(card); // 取得した要素を定数 newHand に push する
  newDeck.splice(index, 1); // 定数 newDeck から取得した要素を削除する

  return [newDeck, newHand]; // 定数 newDeck, newHand を呼び出し元に返却する
}

/**
 * Ace 所持確認
 * -----
 * ハンドの中に Ace が含まれているかどうかを判定する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {boolean} Ace を持っているかどうか
 */
export function hasAce(hand) {}

/**
 * ディーラーが HIT するべきかどうかを判定します。
 * @param hand ディーラーの現在のハンド。
 * @return ディーラーが HIT を選択すべきかどうかの判定。
 */
export function shouldHitForDealer(hand) {
  let total = getTotal(hand);

  if (isSoftHand(hand)) {
    total += 10;
  }
  if (total < 17) {
    return true;
  }
  return false;
}

/**
 * 引数のカードが Ace かどうかを判定します。
 * @param card カードオブジェクト。
 * @return カードが Ace かどうか。Ace であれば true。
 */
export function isAce(card) {
  if (card.rank === "A") {
    return true;
  }
  return false;
}

/**
 * 引数のカードがフェイスガード（絵札）か 10 カードかどうかを判定します。
 * @param card カードオブジェクト。
 * @return フェイスカードか 10 カードかどうか。フェイスカードまたは10カードであれば true。
 */
export function isFaceCardOrTen(card) {
  return getRankNum(card.rank) === 10;
}

/**
 * 引数のハンドがソフトハンドかどうかを判定します。
 * @param hand チェックするハンド。
 * @return ハンドがソフトハンドであるかどうか。ソフトハンドであれば true。
 */
export function isSoftHand(hand) {
  if (isBlackJack(hand)) {
    return false;
  }
  if (!hasAce(hand)) {
    return false;
  }
  if (getTotal(hand) + 10 < 21) {
    return true;
  }
  return false;
}

/**
 * 引数のハンドがブラックジャックかどうか判定します。
 * @param hand ブラックジャックかどうかを判定するハンド。
 * @return ハンドがブラックジャックであるかどうか。ブラックジャックであれば true。
 */
export function isBlackJack(hand) {
  if (hand.length !== 2) {
    return false;
  }

  const firstCard = hand[0];
  const secondCard = hand[1];

  if ((isAce(firstCard) && isFaceCardOrTen(secondCard)) || (isFaceCardOrTen(firstCard) && isAce(secondCard))) {
    return true;
  }
  return false;
}

/**
 * ハンドのスコア取得
 * -----
 * 引数のハンドのスコアを返却する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {Array<number>} ハンドのスコア
 */
export function getScore(hand) {}

/**
 * ハンドのスコア（表示用）取得
 * -----
 * 画面に表示するためのハンドのスコアを返却する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {string}
 */
export function getScoreForDisplay(hand) {}

/**
 * ハンドの最終スコア取得
 * -----
 * 引数のハンドの最終的なスコアを返却する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {number} score
 */
export function getLastScore(hand) {}

/**
 * 勝敗判定
 * -----
 * プレイヤーとディーラーの勝敗を判定する
 *
 * @param {Array<{suit: string, rank: string}>} dealersHand
 * @param {Array<{suit: string, rank: string}>} playersHand
 * @return {string} 勝敗文字列
 */
export function judge(dealersHand, playersHand) {}
