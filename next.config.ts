import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Şablondan gelen eski adresler — bağış ve yardım talebi sayfaları kaldırıldı.
    return [
      { source: "/yardim-talepleri", destination: "/projelerimiz", permanent: true },
      { source: "/yardim-talepleri/:slug", destination: "/projelerimiz", permanent: true },
      { source: "/yardim-talebi-olustur", destination: "/iletisim", permanent: true },
      { source: "/bagis", destination: "/gonullu-ol", permanent: true },
      { source: "/gonulluler", destination: "/hakkimizda", permanent: true },
    ];
  },
};

export default nextConfig;
