import React from "react";
import { COLOR } from "../../lib/theme";

export default function EyebrowLabel({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs uppercase"
      style={{ color: COLOR.gold, letterSpacing: "0.2em" }}
    >
      <span style={{ width: 24, height: 1, background: COLOR.gold, display: "inline-block" }} />
      {children}
    </span>
  );
}
