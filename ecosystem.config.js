module.exports = {
  apps: [
    {
      name: "Portfolio",
      port: "5073",
      exec_mode: "cluster",
      script: "./.output/server/index.mjs",
      env: {
        NODE_ENV: "production",
        PORT: 5073,
      },
    },
  ],
};
