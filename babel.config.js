module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "chrome": 41,
        "ie": 11
      }
    }]
  ],
  "plugins": [],
  "env": {
    "testing": {
      "presets": ["@babel/preset-env"],
      "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime"
      ]
    }
  }
}

