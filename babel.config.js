const path = require("path");

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@components": "./src/components",
          "@store": "./src/store",
          "@utils": "./src/utils/utils",
          "@icons": path.resolve(
            __dirname,
            "node_modules/vue-material-design-icons"
          ),
        },
      },
    ],
  ],
};
