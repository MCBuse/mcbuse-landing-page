import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "webmail.mcbuse.com" }],
        destination: "https://giowm1302.siteground.biz/webmail/",
        permanent: false,
      },
      {
        source: "/webmail",
        destination: "https://giowm1302.siteground.biz/webmail/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
