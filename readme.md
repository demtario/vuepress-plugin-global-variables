<h1 align="center">vuepress-plugin-global-variables</h1>
<div align="center">

Plugin that add a global variables for VuePress.

![Version](https://img.shields.io/github/package-json/v/demtario/vuepress-plugin-global-variables?style=flat-square)
![NPM](https://img.shields.io/npm/l/vuepress-plugin-global-variables?style=flat-square)

</div>

## Install

```sh
yarn add -D vuepress-plugin-global-variables
# OR npm install -D vuepress-plugin-global-variables
```

## Use

Register plugin, all `variables` keys will be registred as a global variables in your vuepress app

```js
module.exports = {
  plugins: [['vuepress-plugin-global-variables', { variables: { example: 'foo' } }]],
}
```

Now, you can simply use `$var[key]` or `this.$page.global[key]` to get your variable in any template or component.

Example:

```vue
{{ $var.example }}

// or

{{ $page.global.example }}
```

will render:

```md
foo
```
