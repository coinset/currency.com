import { jsonFetch } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";
import { isString } from "../deps.ts";

type Type = "sell" | "buy";

export type CryptoTradesOptions = {
  /** such as `LTC/BTC`. */
  symbol: `${string}/${string}`;

  /** buy side or sell side only. */
  type?: Type;
};

export type TokenTradesOptions = {
  /** such as `AAPL`. */
  symbol: string;

  /** buy side or sell side only. */
  type?: Type;
};

export type TradesResponse = {
  tradeID: number;
  price: number;
  base_volume: number;
  quote_volume: number;
  trade_timestamp: number;
  type: Type;
}[];

/** The trades endpoint is to return data on all recently completed trades for a given cryptocurrency market pair.
 * ```ts
 * import { fetchCryptoTrades } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchCryptoTrades({ symbol: "BTC/USD" });
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/tradesUsingGET
 */
export function fetchCryptoTrades(
  { symbol, type }: CryptoTradesOptions,
  init?: RequestInit,
): Promise<TradesResponse> {
  const url = new URL("trades", BASE_URL);

  url.searchParams.set("symbol", symbol);

  if (isString(type)) {
    url.searchParams.set("type", type);
  }

  return jsonFetch(url, init);
}

/** The trades endpoint is to return data on all recently completed trades for a given token market pair.
 * ```ts
 * import { fetchTokenTrades } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenTrades({ symbol: "AAPL" });
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/tradesUsingGET_2
 */
export function fetchTokenTrades(
  { symbol, type }: TokenTradesOptions,
  init?: RequestInit,
): Promise<TradesResponse> {
  const url = new URL("token/trades", BASE_URL);

  url.searchParams.set("symbol", symbol);

  if (isString(type)) {
    url.searchParams.set("type", type);
  }

  return jsonFetch(url, init);
}

/** The trades endpoint is to return data on all recently completed trades for a given market pair.
 * ```ts
 * import { fetchTokenCryptoTrades } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenCryptoTrades({ symbol: "BTC/USD" });
 * await fetchTokenCryptoTrades({ symbol: "AAPL" });
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-crypto-rest-controller/tradesUsingGET_1
 */
export function fetchTokenCryptoTrades(
  { symbol, type }: TokenTradesOptions,
  init?: RequestInit,
): Promise<TradesResponse> {
  const url = new URL("token_crypto/trades", BASE_URL);

  url.searchParams.set("symbol", symbol);

  if (isString(type)) {
    url.searchParams.set("type", type);
  }

  return jsonFetch(url, init);
}
