import { suits, ranks } from "./Trump";

/**
 * デッキを作成します。
 * @param numberOfDeck　セット数。
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
 * @param initialDeck　デッキ。
 * @param penetration　デッキ使用量。
 * @return デッキの最小枚数。
 */
export function getMinimumNumber(initialDeck, penetration) {
  return initialDeck.length - Math.floor(initialDeck.length * penetration);
}

/**
 * ランクの数値取得
 * -----
 * 引数のランクに対応する数値を返却する
 *
 * @param {string} rank
 * @return {number} rankNum
 */
export function getRankNum(rank) {}

/**
 * ハンドのランクの合計取得
 * -----
 * 引数のハンドの合計数値を返却する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {number} total
 */
export function getTotal(hand) {}

/**
 * ディール（カードを配る）
 * -----
 * 山札からカードを一枚引いて、ハンドに加える。
 *
 * @param {Array<{suit: string, rank: string}>} deck
 * @param {Array<{suit: string, rank: string}>} hand
 * @returns {[Array<{suit: string, rank: string}>, Array<{suit: string, rank: string}>]} [newDeck, newHand]
 */
export function deal(deck, hand) {}

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
 * ディーラー用アクション判定
 * -----
 * ディーラーが HIT するべきかどうかを判定する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {boolean} ディーラーが HIT するかどうか
 */
export function shouldHitForDealer(hand) {}

/**
 * Ace カード判定
 * -----
 * 引数のカードが Ace かどうかを判定する
 *
 * @param {{suit: string, rank: string}} card
 * @return {boolean} カードが Ace かどうか
 */
export function isAce(card) {}

/**
 * フェイスカード or 10 カード判定
 * -----
 * 引数のカードがフェイスガード（絵札）か 10 カードかどうかを判定する
 *
 * @param {{suit: string, rank: string}} card
 * @return {boolean} フェイスカードか 10 カードかどうか
 */
export function isFaceCardOrTen(card) {}

/**
 * ソフトハンド判定
 * -----
 * 引数のハンドがソフトハンドかどうかを判定する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {boolean} ソフトハンドかどうか
 */
export function isSoftHand(hand) {}

/**
 * ブラックジャック判定
 * -----
 * 引数のハンドがブラックジャックかどうか判定する
 *
 * @param {Array<{suit: string, rank: string}>} hand
 * @return {boolean} ブラックジャックかどうか
 */
export function isBlackJack(hand) {}

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
