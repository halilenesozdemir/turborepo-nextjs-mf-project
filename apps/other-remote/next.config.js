const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: ["ui"],
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "other_remote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./page": "./pages/index.tsx"
        },
        remotes: {},
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true
        }
      })
    );

    return config;
  }
};
