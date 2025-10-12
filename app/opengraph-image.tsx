/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1220",
          color: "#e2e8f0",
          fontSize: 72,
          fontWeight: 800
        }}
      >
        Timeless Quantity
      </div>
    ),
    size
  );
}
