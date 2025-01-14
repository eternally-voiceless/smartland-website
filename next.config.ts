///** @type {import('next').NextConfig} */
//const nextConfig = {
//  output: 'export',
//  images: {
//    unoptimized: true,
//  },
//  basePath: '/smartland-website',
//  assetPrefix: '/smartland-website/',
//}

//module.exports = nextConfig

//import type { NextConfig } from "next";

//const nextConfig: NextConfig = {
  /* config options here */
  //reactStrictMode: true,
//};

//export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? "/smartland-website" : "",
  assetPrefix: isGithubPages ? "/smartland-website/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;