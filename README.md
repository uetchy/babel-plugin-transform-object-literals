# Babel Plugin Transform Object Literals

> 🚀 Perf tip: if your web app ships large JSON-like configuration as JavaScript object literals, consider using JSON.parse instead. It’s much faster, especially for cold loads!
> https://twitter.com/mathias/status/1143551692732030979?s=20

## Install

```js
npm install --save-dev babel-plugin-transform-object-literals
```

```json
{
  "plugins": ["transform-object-literals"]
}
```

## Try

```
cd examples
npm install
npm run build
node ./output.js
```
