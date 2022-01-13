export {
  any,
  anyArray,
  anyBoolean,
  anyNumber,
  anyOf,
  anyString,
  test,
} from "https://deno.land/x/unitest@v1.0.0-beta.82/mod.ts";

import {
  defineExpect,
  jestExtendedMatcherMap,
  jestMatcherMap,
  jestModifierMap,
} from "https://deno.land/x/unitest@v1.0.0-beta.82/mod.ts";

export const expect = defineExpect({
  matcherMap: {
    ...jestMatcherMap,
    ...jestExtendedMatcherMap,
  },

  modifierMap: jestModifierMap,
});
