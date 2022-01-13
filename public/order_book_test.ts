import { anyArray, anyNumber, expect, test } from "../dev_deps.ts";
import {
  fetchCryptoOrderBook,
  fetchTokenCryptoOrderBook,
  fetchTokenOrderBook,
} from "./order_book.ts";

const equality = {
  timestamp: anyNumber(),
  asks: anyArray([anyNumber(), anyNumber()]),
  bids: anyArray([anyNumber(), anyNumber()]),
};

test("fetchCryptoOrderBook", async () => {
  await expect(fetchCryptoOrderBook({ symbol: "BTC/USD" })).resolves
    .toEqual(equality);
});

test("fetchTokenOrderBook", async () => {
  await expect(fetchTokenOrderBook({ symbol: "AAPL" })).resolves
    .toEqual(equality);
});

test("fetchTokenCryptoOrderBook", async () => {
  await expect(fetchTokenCryptoOrderBook({ symbol: "BTC/USD" })).resolves
    .toEqual(equality);
  await expect(fetchTokenCryptoOrderBook({ symbol: "AAPL" })).resolves
    .toEqual(equality);
});
