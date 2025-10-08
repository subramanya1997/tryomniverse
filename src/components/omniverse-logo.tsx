import * as React from "react";

import { cn } from "@/lib/utils";

type OmniverseLogoProps = React.ComponentPropsWithoutRef<"svg">;

export const OmniverseLogo = React.forwardRef<SVGSVGElement, OmniverseLogoProps>(
  ({ className, ...props }, ref) => {
    const titleId = React.useId();
    const descId = React.useId();

    return (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-6 w-6 text-primary", className)}
        {...props}
      >
        <title id={titleId}>Omniverse Icon</title>
        <desc id={descId}>
          A ring with a tilted orbit and two nodes, representing interconnected universes.
        </desc>
        <circle cx="12" cy="12" r="7.2" />
        <g transform="rotate(30 12 12)">
          <path d="M4.8 12a7.2 3.6 0 1 0 14.4 0a7.2 3.6 0 1 0 -14.4 0" />
          <circle cx="4.8" cy="12" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="19.2" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </g>
      </svg>
    );
  }
);

OmniverseLogo.displayName = "OmniverseLogo";
