import type { NextConfig } from "next";

// Supabase Storage'daki görseller next/image ile sunulabilsin diye
// alan adı ortam değişkeninden türetilir.
const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : null;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: supabaseHost
      ? [
          {
            protocol: "https",
            hostname: supabaseHost,
            pathname: "/storage/v1/object/public/**",
          },
        ]
      : [],
  },

  async redirects() {
    // Şablondan gelen eski adresler — bağış ve yardım talebi sayfaları kaldırıldı.
    return [
      { source: "/yardim-talepleri", destination: "/projelerimiz", permanent: true },
      { source: "/yardim-talepleri/:slug", destination: "/projelerimiz", permanent: true },
      { source: "/yardim-talebi-olustur", destination: "/iletisim", permanent: true },
      { source: "/bagis", destination: "/gonullu-ol", permanent: true },
      { source: "/gonulluler", destination: "/hakkimizda", permanent: true },
      { source: "/duyurular", destination: "/", permanent: true },
      { source: "/duyurular/:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
