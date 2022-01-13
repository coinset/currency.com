import { jsonFetch } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";
import { isNumber } from "../deps.ts";
export type OhlcOptions<T extends string> = {
  /** such as `“LTC/BTC”` or `“SESG”`. */
  symbol: T;

  interval: "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "4h" | "1d" | "1w";

  /** Return committed OHLC data since given timestamp */
  since?: number;
};

export type OhlcResponse = {
  result: {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
  last: number;
  error: string[];
};

/** Get OHLC data
 * ```ts
 * import { fetchTokenCryptoOhlc } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenCryptoOhlc({ symbol: "BTC/USD", interval: "15m" });
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-crypto-rest-controller/ohlcUsingGET
 */
export async function fetchTokenCryptoOhlc<T extends string>(
  { symbol, interval, since }: OhlcOptions<T>,
): Promise<OhlcResponse> {
  const url = new URL("token_crypto/OHLC", BASE_URL);

  url.searchParams.set("symbol", symbol);
  url.searchParams.set("interval", interval);

  if (isNumber(since)) {
    url.searchParams.set("since", String(since));
  }

  const { result, error } = await jsonFetch<{
    result:
      & {
        [x in T]: [number, string, string, string, string][];
      }
      & { last: number };
    error: string[];
  }>(url);

  const data = result[symbol].map(([timestamp, open, high, low, close]) => {
    return {
      timestamp,
      open: Number(open),
      high: Number(high),
      low: Number(low),
      close: Number(close),
    };
  });

  return {
    result: data,
    last: result.last,
    error,
  };
}
