import { jsonFetch, Reviver } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";
import { isString } from "../deps.ts";

type SummaryData = {
  id: number;
  last: number;
  lowestAsk: number;
  highestBid: number;
  percentChange: number;
  baseVolume: number;
  quoteVolume: number;
  isFrozen: null | boolean;
  high24hr: number;
  low24hr: number;
};

export type CryptoSummaryResponse = {
  msg: string | null;
  data: Record<`${string}/${string}`, SummaryData>;
};

export type TokenSummaryResponse = {
  msg: string | null;
  data: Record<string, SummaryData>;
};

const reviver: Reviver = (key, value) => {
  if (
    [
      "last",
      "lowestAsk",
      "highestBid",
      "percentChange",
      "baseVolume",
      "quoteVolume",
      "high24hr",
      "low24hr",
    ].includes(key) && isString(value)
  ) {
    return Number(value);
  }
  return value;
};

/** Overview of market data.
 * ```ts
 * import { fetchCryptoSummary } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchCryptoSummary();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/statusUsingGET
 */
export function fetchCryptoSummary(
  init?: RequestInit,
): Promise<CryptoSummaryResponse> {
  const url = new URL("summary", BASE_URL);

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}

/** Overview of market data.
 * ```ts
 * import { fetchTokenSummary } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenSummary();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/statusUsingGET_2
 */
export function fetchTokenSummary(
  init?: RequestInit,
): Promise<TokenSummaryResponse> {
  const url = new URL("token/summary", BASE_URL);

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}

/** Overview of market data.
 * ```ts
 * import { fetchTokenCryptoSummary } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenCryptoSummary();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-crypto-rest-controller/tradesUsingGET_1
 */
export function fetchTokenCryptoSummary(
  init?: RequestInit,
): Promise<TokenSummaryResponse> {
  const url = new URL("token_crypto/summary", BASE_URL);

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}
