import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#toggle-on_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.43 11.5A4.98 4.98 0 0 1 6 8a4.98 4.98 0 0 1 1.43-3.5H5a3.5 3.5 0 1 0 0 7zM0 8a5 5 0 0 1 5-5h6a5 5 0 1 1 0 10H5a5 5 0 0 1-5-5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="toggle-on_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToggleOn;
