/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { BlockSvg } from "../../block_svg.js";
import type { BlockStyle } from "../../theme.js";
import { PathObject as BasePathObject } from "../common/path_object.js";
import type { ConstantProvider } from "./constants.js";
/**
 * An object that handles creating and setting each of the SVG elements
 * used by the renderer.
 */
export declare class PathObject extends BasePathObject {
  constants: ConstantProvider;
  svgPathDark: SVGElement;
  svgPathLight: SVGElement;
  /**
   * The colour of the dark path on the block in '#RRGGBB' format.
   */
  colourDark: string;
  /**
   * @param root The root SVG element.
   * @param style The style object to use for colouring.
   * @param constants The renderer's constants.
   */
  constructor(root: SVGElement, style: BlockStyle, constants: ConstantProvider);
  setPath(mainPath: string): void;
  /**
   * Set the highlight path generated by the renderer onto the SVG element.
   *
   * @param highlightPath The highlight path.
   */
  setHighlightPath(highlightPath: string): void;
  flipRTL(): void;
  applyColour(block: BlockSvg): void;
  setStyle(blockStyle: BlockStyle): void;
  updateHighlighted(highlighted: boolean): void;
  updateShadow_(shadow: boolean): void;
  updateDisabled_(disabled: boolean): void;
}
//# sourceMappingURL=path_object.d.ts.map
