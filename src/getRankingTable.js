import { tabelName } from "./rankingTableName";
import { supabase } from "./supabase";

/**
 * ランキングテーブルを取得します。（上位5人のみ取得。）
 * @returns ランキングテーブル
 */
export const getRankingTable = async () => {
  const blackJackTable = await supabase.from(tabelName).select("*").order("money", { ascending: false }).limit(5);
  return blackJackTable.data;
};
