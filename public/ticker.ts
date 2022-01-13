import { jsonFetch } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";

export type TickerResponse = Record<`${string}/${string}`, {
  /** Defines the base pair. */
  base_currency: string;

  /** Is a 24 hour trading volume in base pair volume. */
  base_volume: number;

  /** Description */
  description: null | string;

  /** Highest bid price */
  highest_bid_price: number;

  /** Indicates if the market is currently enabled (`false`) or disabled (`true`). */
  isFrozen: boolean;

  /** Is a price of the last executed order. */
  last_price: number;

  /** Lowest ask price */
  lowest_ask_price: number;

  /** 24 hour high price */
  past_24hrs_high_price: number;

  /** 24 hour low price */
  past_24hrs_low_price: number;

  /** 24 hour price change */
  past_24hrs_price_change: number;

  /** Defines the quote pair. */
  quote_currency: string;

  /** Is a 24 hour trading volume in quote pair volume. */
  quote_volume: number;
}>;

/** The ticker endpoint is to provide a 24-hour pricing and volume summary for each cryptocurrency market pair available on the exchange.
 * ```ts
 * import { fetchTicker } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTicker();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/tickerUsingGET
 */
export function fetchTicker(): Promise<TickerResponse> {
  const url = new URL("ticker", BASE_URL);

  return jsonFetch(url);
}
