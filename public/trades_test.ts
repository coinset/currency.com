import { anyArray, anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import {
  fetchCryptoTrades,
  fetchTokenCryptoTrades,
  fetchTokenTrades,
} from "./trades.ts";

const equality = anyArray({
  tradeID: anyNumber(),
  price: anyNumber(),
  base_volume: anyNumber(),
  quote_volume: anyNumber(),
  trade_timestamp: anyNumber(),
  type: anyOf(["buy", "sell"]),
});

test("fetchCryptoTrades", async () => {
  await expect(fetchCryptoTrades({ symbol: "BTC/USD" })).resolves.toEqual(
    equality,
  );

  await expect(fetchCryptoTrades({ symbol: "ETH/USD", type: "sell" })).resolves
    .toEqual(
      anyArray({
        tradeID: anyNumber(),
        price: anyNumber(),
        base_volume: anyNumber(),
        quote_volume: anyNumber(),
        trade_timestamp: anyNumber(),
        type: "sell",
      }),
    );
});

test("fetchTokenTrades", async () => {
  await expect(fetchTokenTrades({ symbol: "AAPL" })).resolves.toEqual(
    equality,
  );
});

test("fetchTokenCryptoTrades", async () => {
  await expect(fetchTokenCryptoTrades({ symbol: "AAPL" })).resolves.toEqual(
    equality,
  );
  await expect(fetchTokenCryptoTrades({ symbol: "BTC/USD" })).resolves.toEqual(
    equality,
  );
});
