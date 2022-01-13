# @coinset/currency.com

Universal Currency.com API client

:children_crossing: This is not official

## Public API

A request for an entry point that does not require authentication.

### fetchAssets

The assets endpoint is to provide a detailed summary for each cryptocurrency
available on the exchange.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/doAssetsUsingGET)

example:

```ts
import { fetchAssets } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchAssets();
```

returns:

```ts
type AssetsResponse = {
  [x: string]: {
    name: string;
    description: string | null;
    can_withdraw: boolean;
    can_deposit: boolean;
    min_withdraw: number | null;
    max_withdraw: number | null;
    maker_fee: number | null;
    taker_fee: number | null;
  };
};
```
