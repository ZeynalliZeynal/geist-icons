import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#shield-off_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.55 2.49.027-.007.138-.036c.928-.242 1.818-.475 2.502-.865C6.887 1.2 7.25.734 7.25 0h1.5c0 .467.145.797.372 1.061.242.282.608.523 1.092.736.482.212 1.032.375 1.608.529l.409.107c.432.113.874.228 1.256.355L14 2.96v6.567c0 .96-.262 1.882-.734 2.678l2.014 2.015.53.53-1.06 1.06-.53-.53L.72 1.78l-.53-.53L1.25.19l.53.53zm8.606 8.606a3.75 3.75 0 0 0 .344-1.569v-5.47q-.286-.079-.607-.162l-.459-.12c-.586-.157-1.23-.344-1.823-.605C9.026 2.913 8.443 2.565 8 2.057c-.298.332-.65.612-1.04.828-.665.38-1.455.632-2.182.832zM3.5 7.25V6.5H2v3.027a5.25 5.25 0 0 0 2.814 4.65l2.838 1.487.348.183.348-.183 1.16-.608.665-.348-.696-1.328-.664.348-.813.425-2.49-1.304A3.75 3.75 0 0 1 3.5 9.527z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="shield-off_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldOff;
