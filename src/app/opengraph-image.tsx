import { ImageResponse } from "next/og";

export const alt = "AJ Creationz: websites, brand, SEO, ads and CRM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#120f1d",
          color: "#f6f2ff",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 2, color: "#b9a4ff" }}>AJ CREATIONZ</div>
        <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 600, maxWidth: 940 }}>
          Websites, brand, SEO, ads and CRM from one team.
        </div>
        <div style={{ fontSize: 30, color: "#b9a4ff" }}>ajcreationz.co.uk</div>
      </div>
    ),
    size,
  );
}
