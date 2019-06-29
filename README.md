# Babel Plugin Transform Object Literals

Replace serializable object literals with JSON.parse().

> 🚀 Perf tip: if your web app ships large JSON-like configuration as JavaScript object literals, consider using JSON.parse instead. It’s much faster, especially for cold loads!
> https://twitter.com/mathias/status/1143551692732030979?s=20

## Install

```js
npm install --save-dev babel-plugin-transform-object-literals
```

Then add `transform-object-literals` to your `.babelrc`:

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

## Contribute

PRs welcome! Make sure `npm test` before making pull-request.

```
git clone https://github.com/uetchy/babel-plugin-transform-object-literals
cd babel-plugin-transform-object-literals
npm install
npm test
```
