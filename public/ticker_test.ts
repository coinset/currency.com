import {
  anyArray,
  anyBoolean,
  anyNumber,
  anyOf,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import {
  fetchCryptoTicker,
  fetchTokenCryptoTicker,
  fetchTokenTicker,
} from "./ticker.ts";

const arrayEquality = {
  base_currency: anyString(),
  base_volume: anyOf([anyNumber(), null]),
  description: anyOf([anyString(), null]),
  highest_bid_price: anyOf([anyNumber(), null]),
  isFrozen: anyBoolean(),
  last_price: anyOf([anyNumber(), null]),
  lowest_ask_price: anyOf([anyNumber(), null]),
  past_24hrs_high_price: anyOf([anyNumber(), null]),
  past_24hrs_low_price: anyOf([anyNumber(), null]),
  past_24hrs_price_change: anyOf([anyNumber(), null]),
  quote_currency: anyString(),
  quote_volume: anyOf([anyNumber(), null]),
};

test("fetchCryptoTicker", async () => {
  const result = await fetchCryptoTicker();
  expect(Object.values(result)).toEqual(anyArray(arrayEquality));

  expect(Object.keys(result)).toEqual(
    anyArray(anyString((v) => /\w\/\w/.test(v))),
  );
});

test("fetchTokenTicker", async () => {
  const result = await fetchTokenTicker();
  expect(Object.values(result)).toEqual(anyArray(arrayEquality));

  expect(Object.keys(result)).toEqual(
    anyArray(anyString()),
  );
});

test("fetchTokenCryptoTicker", async () => {
  const result = await fetchTokenCryptoTicker();
  expect(Object.values(result)).toEqual(anyArray(arrayEquality));

  expect(Object.keys(result)).toEqual(
    anyArray(anyString()),
  );
});
