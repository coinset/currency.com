import {
  anyArray,
  anyBoolean,
  anyNumber,
  anyOf,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import { fetchTicker } from "./ticker.ts";

test("fetchTicker", async () => {
  const result = await fetchTicker();
  expect(Object.values(result)).toEqual(anyArray({
    base_currency: anyString(),
    base_volume: anyNumber(),
    description: anyOf([anyString(), null]),
    highest_bid_price: anyNumber(),
    isFrozen: anyBoolean(),
    last_price: anyNumber(),
    lowest_ask_price: anyNumber(),
    past_24hrs_high_price: anyNumber(),
    past_24hrs_low_price: anyNumber(),
    past_24hrs_price_change: anyNumber(),
    quote_currency: anyString(),
    quote_volume: anyNumber(),
  }));

  expect(Object.keys(result)).toEqual(
    anyArray(anyString((v) => /\w\/\w/.test(v))),
  );
});
