import type { Rule } from "@unocss/core";
import { flex } from "./flex";
import {
  fonts,
  tabSizes,
  textIndents,
  textShadows,
  textStrokes,
} from "./typography";
import { gaps } from "./gap";
import { grids } from "./grid";
import { overflows } from "./layout";
import {
  alignments,
  boxSizing,
  flexGridJustifiesAlignments,
  floats,
  insets,
  justifies,
  orders,
  placements,
  positions,
  zIndexes,
} from "./position";
import { rings } from "./ring";
import { boxShadows } from "./shadow";
import { aspectRatio, sizes } from "./size";
import { margins, paddings, spaces } from "./spacing";
import {
  appearances,
  breaks,
  contains,
  contentVisibility,
  contents,
  cursors,
  displays,
  fontSmoothings,
  fontStyles,
  pointerEvents,
  resizes,
  textOverflows,
  textTransforms,
  textWraps,
  userSelects,
  whitespaces,
} from "./static";
import { cssProperty, cssVariables } from "./variables";
import { questionMark } from "./question-mark";
import { textAligns, verticalAligns } from "./align";
import { textDecorations } from "./decoration";
import { svgUtilities } from "./svg";

export const rules: Rule[] = [
  cssVariables,
  cssProperty,
  paddings,
  spaces,
  margins,
  displays,
  svgUtilities,
  contentVisibility,
  contents,
  fonts,
  tabSizes,
  textIndents,
  textOverflows,
  textDecorations,
  textStrokes,
  textShadows,
  textTransforms,
  textAligns,
  fontStyles,
  fontSmoothings,
  boxShadows,
  rings,
  flex,
  grids,
  gaps,
  positions,
  sizes,
  aspectRatio,
  cursors,
  appearances,
  pointerEvents,
  resizes,
  verticalAligns,
  userSelects,
  whitespaces,
  breaks,
  overflows,
  orders,
  justifies,
  alignments,
  placements,
  flexGridJustifiesAlignments,
  insets,
  floats,
  zIndexes,
  boxSizing,
  contains,
  textWraps,

  // should be the last
  questionMark,
].flat(1);
