import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.displayName} - ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#e6dece",
          color: "#13110e",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4 }}>
          <span style={{ color: "#e63512" }}>TO</span>
          <span style={{ color: "#8a8276" }}>REMOTE / WORLDWIDE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 3, color: "#e63512", textTransform: "uppercase" }}>
            {site.title}
          </div>
          <div style={{ fontSize: 92, lineHeight: 0.9, marginTop: 18 }}>{site.displayName}</div>
          <div style={{ fontSize: 28, color: "#3a342c", marginTop: 28, maxWidth: 820 }}>
            Production software. AI systems. Automation. Built end to end.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#8a8276" }}>
          <span>200K+ users · 2,500+ companies · 6 years</span>
          <span>timiodusanya.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}
