import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tim Digdaya X | Portfolio Hackathon Nasional 2026",
  description: "Tim pengembang lintas disiplin – Cybersecurity, AI Integration, Frontend Engineering, Backend Architecture. Digdaya X National Hackathon 2026.",
  openGraph: {
    title: "Tim Digdaya X | Portfolio Hackathon Nasional 2026",
    description: "Inovasi, Keamanan, & Skalabilitas dari Universitas Kuningan",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body style={{ margin: 0, padding: 0, background: "#050508" }}>{children}</body>
    </html>
  );
}
