import {
  anyArray,
  anyBoolean,
  anyNumber,
  anyOf,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import { fetchAssets } from "./assets.ts";

test("fetchAssets", async () => {
  const result = await fetchAssets();
  expect(Object.values(result)).toEqual(anyArray({
    name: anyString(),
    description: anyOf([anyString(), null]),
    can_withdraw: anyBoolean(),
    can_deposit: anyBoolean(),
    min_withdraw: anyOf([anyNumber(), null]),
    max_withdraw: anyOf([anyNumber(), null]),
    maker_fee: anyOf([anyNumber(), null]),
    taker_fee: anyOf([anyNumber(), null]),
  }));
});
