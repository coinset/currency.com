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

### fetchCryptoTicker

The ticker endpoint is to provide a 24-hour pricing and volume summary for each
cryptocurrency market pair available on the exchange.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/tickerUsingGET)

example:

```ts
import { fetchCryptoTicker } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchCryptoTicker();
```

returns:

```ts
type CryptoTickerResponse = {
  [x: `${string}/${string}`]: {
    base_currency: string;
    base_volume: null | number;
    description: null | string;
    highest_bid_price: null | number;
    isFrozen: boolean;
    last_price: null | number;
    lowest_ask_price: null | number;
    past_24hrs_high_price: null | number;
    past_24hrs_low_price: null | number;
    past_24hrs_price_change: null | number;
    quote_currency: string;
    quote_volume: null | number;
  };
};
```

### fetchTokenTicker

The ticker endpoint is to provide a 24-hour pricing and volume summary for each
market pair available on the exchange.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/tickerUsingGET_2)

example:

```ts
import { fetchTokenTicker } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchTokenTicker();
```

returns:

```ts
type TokenTickerResponse = {
  [x: `${string}/${string}`]: {
    base_currency: string;
    base_volume: null | number;
    description: null | string;
    highest_bid_price: null | number;
    isFrozen: boolean;
    last_price: null | number;
    lowest_ask_price: null | number;
    past_24hrs_high_price: null | number;
    past_24hrs_low_price: null | number;
    past_24hrs_price_change: null | number;
    quote_currency: string;
    quote_volume: null | number;
  };
};
```

### fetchTokenCryptoTicker

The ticker endpoint is to provide a 24-hour pricing and volume summary for each
token market pair available on the exchange.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/tickerUsingGET_2)

example:

```ts
import { fetchTokenCryptoTicker } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchTokenCryptoTicker();
```

returns:

```ts
type TokenTickerResponse = {
  [x: `${string}/${string}`]: {
    base_currency: string;
    base_volume: null | number;
    description: null | string;
    highest_bid_price: null | number;
    isFrozen: boolean;
    last_price: null | number;
    lowest_ask_price: null | number;
    past_24hrs_high_price: null | number;
    past_24hrs_low_price: null | number;
    past_24hrs_price_change: null | number;
    quote_currency: string;
    quote_volume: null | number;
  };
};
```
