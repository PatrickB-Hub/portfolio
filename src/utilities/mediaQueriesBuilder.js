import { css } from "styled-components";
import { sizes } from "../atoms/variables";

// iterate through the sizes and create media templates
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
