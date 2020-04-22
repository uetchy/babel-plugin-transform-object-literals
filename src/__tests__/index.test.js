import plugin from '..'
import pluginTester from 'babel-plugin-tester'
import path from 'path'

pluginTester({
  plugin,
  snapshot: true,
  tests: [
    `const json = {
      items: {
        name: "Sun",
        where: 'Solar sytem',
      },
    }`,
    `const json = {
      items: {
        1: 5,
        100: 500,
      },
    }`,
    ,
    `const json = {
      items: [1,2,3]
    }`,
    ,
    `const json = [1, '1', 'a']`,
  ],
})
