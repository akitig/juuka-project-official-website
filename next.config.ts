import type { NextConfig } from "next";

const is_dev_deploy = process.env.DEPLOY_TARGET === "dev";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: is_dev_deploy ? "/work/ju-pro" : "",
  assetPrefix: is_dev_deploy ? "/work/ju-pro" : "",
};

export default nextConfig;
