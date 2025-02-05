import * as React from "react";
import type { SVGProps } from "react";
const SvgDataPoint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.5 5.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m0 5.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m2.75-1a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDataPoint;
