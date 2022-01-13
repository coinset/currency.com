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

### fetchCryptoTrades

The trades endpoint is to return data on all recently completed trades for a
given cryptocurrency market pair.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/tradesUsingGET)

example:

```ts
import { fetchCryptoTrades } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchCryptoTrades({ symbol: "BTC/USD" });
```

parameters:

```ts
type CryptoTradesOptions = {
  symbol: `${string}/${string}`;
  type?: Type | undefined;
};
```

returns:

```ts
type TradesResponse = {
  tradeID: number;
  price: number;
  base_volume: number;
  quote_volume: number;
  trade_timestamp: number;
  type: "sell" | "buy";
}[];
```

### fetchCryptoTrades

The trades endpoint is to return data on all recently completed trades for a
given cryptocurrency market pair.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/tradesUsingGET)

example:

```ts
import { fetchCryptoTrades } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchCryptoTrades({ symbol: "BTC/USD" });
```

parameters:

```ts
type CryptoTradesOptions = {
  symbol: `${string}/${string}`;
  type?: "sell" | "buy" | undefined;
};
```

returns:

```ts
type TradesResponse = {
  tradeID: number;
  price: number;
  base_volume: number;
  quote_volume: number;
  trade_timestamp: number;
  type: "sell" | "buy";
}[];
```

### fetchTokenTrades

The trades endpoint is to return data on all recently completed trades for a
given token market pair.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/tradesUsingGET_2)

example:

```ts
import { fetchTokenTrades } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchTokenTrades({ symbol: "AAPL" });
```

parameters:

```ts
type TokenTradesOptions = {
  symbol: string;
  type?: "sell" | "buy" | undefined;
};
```

returns:

```ts
type TradesResponse = {
  tradeID: number;
  price: number;
  base_volume: number;
  quote_volume: number;
  trade_timestamp: number;
  type: "sell" | "buy";
}[];
```

### fetchTokenCryptoTrades

The trades endpoint is to return data on all recently completed trades for a
given market pair.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/token-crypto-rest-controller/tradesUsingGET_1)

example:

```ts
import { fetchTokenCryptoTrades } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchTokenCryptoTrades({ symbol: "BTC/USD" });
await fetchTokenCryptoTrades({ symbol: "AAPL" });
```

parameters:

```ts
type TokenTradesOptions = {
  symbol: string;
  type?: "sell" | "buy" | undefined;
};
```

returns:

```ts
type TradesResponse = {
  tradeID: number;
  price: number;
  base_volume: number;
  quote_volume: number;
  trade_timestamp: number;
  type: "sell" | "buy";
}[];
```

### fetchCryptoSummary

Overview of market data.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/rest-controller/statusUsingGET)

example:

```ts
import { fetchCryptoSummary } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchCryptoSummary();
```

returns:

```ts
type CryptoSummaryResponse = {
  msg: string | null;
  data: Record<`${string}/${string}`, {
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
  }>;
};
```

### fetchTokenSummary

Overview of market data.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/token-rest-controller/statusUsingGET_2)

example:

```ts
import { fetchTokenSummary } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchTokenSummary();
```

returns:

```ts
type CryptoSummaryResponse = {
  msg: string | null;
  data: Record<string, {
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
  }>;
};
```

### fetchTokenCryptoSummary

Overview of market data.
[Docs](https://apimarketdoc.currency.com/swagger-ui.html#/token-crypto-rest-controller/tradesUsingGET_1)

example:

```ts
import { fetchTokenCryptoSummary } from "https://deno.land/x/currency_com@$VERSION/mod.ts";
await fetchTokenCryptoSummary();
```

returns:

```ts
type CryptoSummaryResponse = {
  msg: string | null;
  data: Record<string, {
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
  }>;
};
```
