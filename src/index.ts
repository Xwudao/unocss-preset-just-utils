import type { Preset } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { rules } from "./_rules/default";

export interface PresetTheme {}

export const presetTheme = (options: PresetTheme): Preset<Theme> => {
  const {} = options || {};

  return {
    name: "@unocss/preset-just-utils",
    preflights: [],
    rules,
    theme: {},
  };
};

export default presetTheme;
