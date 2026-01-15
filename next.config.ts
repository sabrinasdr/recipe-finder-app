import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    globalNotFound:true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader:'@svgr/webpack', options:{icon:true}}],
    });
    return config;
  },
  images: {
    remotePatterns: [{protocol:"https",
                    hostname:"**"
    }],
    qualities: [25, 50, 75]
    
  },
};

export default nextConfig;
