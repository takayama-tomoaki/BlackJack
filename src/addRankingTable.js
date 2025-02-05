import { tabelName } from "./rankingTableName";
import { supabase } from "./supabase";

/**
 * ランキングテーブルにスコアを追加します。
 * @param {string} name ユーザ名
 * @param {number} money 所持金
 */
export const addRankingTable = async (name, money) => {
  await supabase.from(tabelName).insert({ username: name, money: money });
};
