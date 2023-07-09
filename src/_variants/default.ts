import type { Variant } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { variantSpaceAndDivide } from "./misc";


export function variants(): Variant<Theme>[] {
  return [variantSpaceAndDivide];
}
