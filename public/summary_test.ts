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
  fetchCryptoSummary,
  fetchTokenCryptoSummary,
  fetchTokenSummary,
} from "./summary.ts";

const dataEquality = {
  id: anyNumber(),
  last: anyNumber(),
  lowestAsk: anyNumber(),
  highestBid: anyNumber(),
  percentChange: anyNumber(),
  baseVolume: anyNumber(),
  quoteVolume: anyNumber(),
  isFrozen: anyOf([null, anyBoolean()]),
  high24hr: anyNumber(),
  low24hr: anyNumber(),
};

test("fetchCryptoSummary", async () => {
  const result = await fetchCryptoSummary();
  expect(result.msg).toBeOneOf([null, anyString()]);
  expect(result.data).toContainValue(dataEquality);

  expect(Object.keys(result.data)).toEqual(
    anyArray(anyString((v) => /\w\/\w/.test(v))),
  );
});

test("fetchTokenSummary", async () => {
  const result = await fetchTokenSummary();
  expect(result.msg).toBeOneOf([null, anyString()]);
  expect(result.data).toContainValue(dataEquality);

  expect(Object.keys(result.data)).toEqual(
    anyArray(anyString()),
  );
});

test("fetchTokenCryptoSummary", async () => {
  const result = await fetchTokenCryptoSummary();
  expect(result.msg).toBeOneOf([null, anyString()]);
  expect(result.data).toContainValue(dataEquality);

  expect(Object.keys(result.data)).toEqual(
    anyArray(anyString()),
  );
});
