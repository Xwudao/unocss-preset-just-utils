import type { Preset } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { rules } from "./_rules/default";
import { variants } from "./_variants/default";

export interface PresetTheme {}

export const presetTheme = (options: PresetTheme): Preset<Theme> => {
  const {} = options || {};

  return {
    name: "@unocss/preset-just-utils",
    preflights: [],
    rules,
    variants: [...variants()],
    theme: {},
  };
};

export default presetTheme;
