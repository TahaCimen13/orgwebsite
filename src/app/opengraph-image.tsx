import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f9f4ea",
          color: "#1a1713",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, letterSpacing: 2 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#b05334",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#fff" }} />
          </div>
          {site.name}
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            maxWidth: 920,
          }}
        >
          {site.tagline}
        </div>

        <div style={{ marginTop: 34, fontSize: 27, color: "#665e52", maxWidth: 880, lineHeight: 1.5 }}>
          İhtiyaç sahiplerini gönüllü destekçilerle aracısız buluşturan dayanışma platformu.
        </div>

        <div style={{ marginTop: 60, fontSize: 22, color: "#a69e91", letterSpacing: 2 }}>
          {site.domain}
        </div>
      </div>
    ),
    size
  );
}
