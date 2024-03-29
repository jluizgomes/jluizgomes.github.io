module.exports = {
  presets: [
    "next/babel",
  ],
  plugins: [
    ["styled-components", { "ssr": true }],
    ["babel-plugin-root-import", {
      "rootPathPrefix": "~",
      "rootPathSuffix": "src"
    }],
    "inline-react-svg"
  ]
}
