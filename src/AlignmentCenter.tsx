import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignmentCenter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.75 2H1v1.5h14V2zM3.5 7.25h9v1.5h-9zm-1 5.25h11V14h-11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignmentCenter;
