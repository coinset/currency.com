import { jsonFetch } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";
import { isNumber } from "../deps.ts";

type BaseOptions = {
  /** Not defined or `0` = full order book */
  depth?: 0 | 5 | 10 | 20 | 50 | 100 | 500;

  /** Complete order book, no aggregation. */
  level?: number;
};

export type CryptoOrderBookOptions = BaseOptions & {
  /** such as `“BTC/USD”`. */
  symbol: `${string}/${string}`;
};

export type TokenOrderBookOptions = BaseOptions & {
  /** such as `“AAPL”`. */
  symbol: string;
};

export type OrderBookResponse = {
  timestamp: number;

  /** list of asks [price, amount] */
  asks: [number, number][];

  /** list of bids [price, amount] */
  bids: [number, number][];
};

/** The order book endpoint is to provide a complete order book with full depth returned for a given cryptocurrency market pair.
 * ```ts
 * import { fetchCryptoOrderBook } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchCryptoOrderBook({ symbol: "BTC/USD" });
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/depthUsingGET
 */
export function fetchCryptoOrderBook(
  { symbol, depth, level }: CryptoOrderBookOptions,
  init?: RequestInit,
): Promise<OrderBookResponse> {
  const url = new URL("orderbook", BASE_URL);

  if (isNumber(depth)) {
    url.searchParams.set("depth", String(depth));
  }

  if (isNumber(level)) {
    url.searchParams.set("level", String(level));
  }

  url.searchParams.set("symbol", symbol);

  return jsonFetch(url, init);
}

/** The order book endpoint is to provide a complete order book with full depth returned for a given token market pair.
 * ```ts
 * import { fetchTokenOrderBook } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenOrderBook({ symbol: "AAPL" });
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/depthUsingGET_2
 */
export function fetchTokenOrderBook(
  { symbol, depth, level }: TokenOrderBookOptions,
  init?: RequestInit,
): Promise<OrderBookResponse> {
  const url = new URL("token/orderbook", BASE_URL);

  if (isNumber(depth)) {
    url.searchParams.set("depth", String(depth));
  }

  if (isNumber(level)) {
    url.searchParams.set("level", String(level));
  }

  url.searchParams.set("symbol", symbol);

  return jsonFetch(url, init);
}

/** The order book endpoint is to provide a complete order book with full depth returned for a given market pair.
 * ```ts
 * import { fetchTokenCryptoOrderBook } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenCryptoOrderBook({ symbol: "BTC/USD" });
 * await fetchTokenCryptoOrderBook({ symbol: "AAPL" });
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-crypto-rest-controller/depthUsingGET_1
 */
export function fetchTokenCryptoOrderBook(
  { symbol, depth, level }: TokenOrderBookOptions,
  init?: RequestInit,
): Promise<OrderBookResponse> {
  const url = new URL("token_crypto/orderbook", BASE_URL);

  if (isNumber(depth)) {
    url.searchParams.set("depth", String(depth));
  }

  if (isNumber(level)) {
    url.searchParams.set("level", String(level));
  }

  url.searchParams.set("symbol", symbol);

  return jsonFetch(url, init);
}
