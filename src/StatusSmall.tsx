import * as React from "react";
import type { SVGProps } from "react";
const SvgStatusSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="currentColor" d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </svg>
);
export default SvgStatusSmall;
