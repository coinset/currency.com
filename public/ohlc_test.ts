import { anyArray, anyNumber, expect, test } from "../dev_deps.ts";
import { fetchTokenCryptoOhlc } from "./ohlc.ts";

test("fetchTokenCryptoOhlc", async () => {
  await expect(fetchTokenCryptoOhlc({ symbol: "BTC/USD", interval: "15m" }))
    .resolves
    .toEqual(
      {
        last: anyNumber(),
        error: anyArray(),
        result: anyArray({
          timestamp: anyNumber(),
          open: anyNumber(),
          high: anyNumber(),
          low: anyNumber(),
          close: anyNumber(),
        }),
      },
    );
});
