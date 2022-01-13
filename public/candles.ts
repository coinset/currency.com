import { jsonFetch } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";
import { isNumber } from "../deps.ts";
export type CandlesOptions = {
  /** such as `“BTC/USD”`. */
  symbol: `${string}/${string}`;

  interval:
    | "M1"
    | "M3"
    | "M5"
    | "M10"
    | "M15"
    | "M30"
    | "H1"
    | "H4"
    | "D1"
    | "W1";

  /** Limit */
  limit?: number;

  /** In milliseconds. */
  startTime?: number;

  /** In milliseconds. */
  endTime?: number;
};

export type CandlesResponse = {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}[];

/** The assets endpoint is to provide a detailed summary for each cryptocurrency available on the exchange.
 * ```ts
 * import { fetchCryptoCandles } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchCryptoCandles({ symbol: "BTC/USD", interval: "M1" });
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/candlesUsingGET
 */
export async function fetchCryptoCandles(
  { symbol, interval, startTime, endTime, limit }: CandlesOptions,
): Promise<CandlesResponse> {
  const url = new URL("candles", BASE_URL);

  url.searchParams.set("symbol", symbol);
  url.searchParams.set("interval", interval);

  if (isNumber(startTime)) {
    url.searchParams.set("startTime", String(startTime));
  }

  if (isNumber(endTime)) {
    url.searchParams.set("endTime", String(endTime));
  }

  if (isNumber(limit)) {
    url.searchParams.set("limit", String(limit));
  }

  const res = await jsonFetch<[number, string, string, string, string][]>(url);

  return res.map(([timestamp, open, high, low, close]) => {
    return {
      timestamp,
      open: Number(open),
      high: Number(high),
      low: Number(low),
      close: Number(close),
    };
  });
}
