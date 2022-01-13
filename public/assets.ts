import { jsonFetch } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";

export type AssetsResponse = Record<string, {
  /** Name of cryptocurrency or token's ticker. */
  name: string;

  description: string | null;

  /** Identifies whether deposits are enabled or disabled. */
  can_withdraw: boolean;

  /** Identifies whether withdrawals are enabled or disabled. */
  can_deposit: boolean;

  /** Identifies the single minimum withdrawal amount of a cryptocurrency or token. */
  min_withdraw: number | null;

  /** Identifies the single maximum withdrawal amount of a cryptocurrency or token. */
  max_withdraw: number | null;

  /** Applied when liquidity is added to the order book. */
  maker_fee: number | null;

  /** Applied when liquidity is removed from the order book. */
  taker_fee: number | null;
}>;

/** The assets endpoint is to provide a detailed summary for each cryptocurrency available on the exchange.
 * ```ts
 * import { fetchCryptoAssets } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchCryptoAssets();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/doAssetsUsingGET
 */
export function fetchCryptoAssets(): Promise<AssetsResponse> {
  const url = new URL("assets", BASE_URL);

  return jsonFetch(url);
}

/** The assets endpoint is to provide a detailed summary for each token available on the exchange.
 * ```ts
 * import { fetchTokenAssets } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenAssets();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/doAssetsUsingGET_2
 */
export function fetchTokenAssets(): Promise<AssetsResponse> {
  const url = new URL("token/assets", BASE_URL);

  return jsonFetch(url);
}

/** The assets endpoint is to provide a detailed summary for each market pair available on the exchange.
 * ```ts
 * import { fetchTokenCryptoAssets } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
 * await fetchTokenCryptoAssets();
 * ```
 * @see https://apimarketdoc.currency.com/swagger-ui.html#/token-crypto-rest-controller/doAssetsUsingGET_1
 */
export function fetchTokenCryptoAssets(): Promise<AssetsResponse> {
  const url = new URL("token_crypto/assets", BASE_URL);

  return jsonFetch(url);
}
