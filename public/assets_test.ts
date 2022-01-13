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
  fetchCryptoAssets,
  fetchTokenAssets,
  fetchTokenCryptoAssets,
} from "./assets.ts";

const equality = anyArray({
  name: anyString(),
  description: anyOf([anyString(), null]),
  can_withdraw: anyBoolean(),
  can_deposit: anyBoolean(),
  min_withdraw: anyOf([anyNumber(), null]),
  max_withdraw: anyOf([anyNumber(), null]),
  maker_fee: anyOf([anyNumber(), null]),
  taker_fee: anyOf([anyNumber(), null]),
});

test("fetchCryptoAssets", async () => {
  const result = await fetchCryptoAssets();
  expect(Object.values(result)).toEqual(equality);
});

test("fetchTokenAssets", async () => {
  const result = await fetchTokenAssets();
  expect(Object.values(result)).toEqual(equality);
});

test("fetchTokenCryptoAssets", async () => {
  const result = await fetchTokenCryptoAssets();
  expect(Object.values(result)).toEqual(equality);
});
