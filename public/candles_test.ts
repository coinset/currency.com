import { anyArray, anyNumber, expect, test } from "../dev_deps.ts";
import { fetchCryptoCandles } from "./candles.ts";

test("fetchCryptoCandles", async () => {
  await expect(fetchCryptoCandles({ symbol: "BTC/USD", interval: "M1" }))
    .resolves
    .toEqual(
      anyArray({
        timestamp: anyNumber(),
        open: anyNumber(),
        high: anyNumber(),
        low: anyNumber(),
        close: anyNumber(),
      }),
    );
});
