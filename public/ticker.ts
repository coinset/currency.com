import { jsonFetch } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";

type TickerData = {
  /** Defines the base pair. */
  base_currency: string;

  /** Is a 24 hour trading volume in base pair volume. */
  base_volume: null | number;

  /** Description */
  description: null | string;

  /** Highest bid price */
  highest_bid_price: null | number;

  /** Indicates if the market is currently enabled (`false`) or disabled (`true`). */
  isFrozen: boolean;

  /** Is a price of the last executed order. */
  last_price: null | number;

  /** Lowest ask price */
  lowest_ask_price: null | number;

  /** 24 hour high price */
  past_24hrs_high_price: null | number;

  /** 24 hour low price */
  past_24hrs_low_price: null | number;

  /** 24 hour price change */
  past_24hrs_price_change: null | number;

  /** Defines the quote pair. */
  quote_currency: string;

  /** Is a 24 hour trading volume in quote pair volume. */
  quote_volume: null | number;
};

export type CryptoTickerResponse = Record<`${string}/${string}`, TickerData>;
export type TokenTickerResponse = Record<string, TickerData>;

/** The ticker endpoint is to provide a 24-hour pricing and volume summary for each cryptocurrency market pair available on the exchange.
 * ```ts
 * import { fetchTicker } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTicker();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/tickerUsingGET
 */
export function fetchCryptoTicker(): Promise<CryptoTickerResponse> {
  const url = new URL("ticker", BASE_URL);

  return jsonFetch(url);
}

/** The ticker endpoint is to provide a 24-hour pricing and volume summary for each market pair available on the exchange.
 * ```ts
 * import { fetchTokenTicker } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenTicker();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/tickerUsingGET_2
 */
export function fetchTokenTicker(): Promise<TokenTickerResponse> {
  const url = new URL("token/ticker", BASE_URL);

  return jsonFetch(url);
}

/** The ticker endpoint is to provide a 24-hour pricing and volume summary for each token market pair available on the exchange.
 * ```ts
 * import { fetchTokenCryptoTicker } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenCryptoTicker();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-crypto-rest-controller/tickerUsingGET_1
 */
export function fetchTokenCryptoTicker(): Promise<TokenTickerResponse> {
  const url = new URL("token_crypto/ticker", BASE_URL);

  return jsonFetch(url);
}
