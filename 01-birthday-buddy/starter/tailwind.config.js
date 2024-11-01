module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
