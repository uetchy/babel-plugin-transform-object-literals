function convert(node, t) {
  if (node.type === 'ObjectExpression') {
    return Object.fromEntries(
      node.properties.map((prop) => {
        const key = t.isIdentifier(prop.key) ? prop.key.name : prop.key.value
        const value = prop.value
        return [key, convert(value, t)]
      })
    )
  } else if (node.type === 'ArrayExpression') {
    return node.elements.map((itemNode) => {
      return convert(itemNode, t)
    })
  } else {
    return node.value
  }
}

module.exports = function({ types: t }) {
  return {
    name: 'babel-plugin-transfrom-object-literals',
    visitor: {
      ObjectExpression(path) {
        const obj = convert(path.node, t)
        const parsed = JSON.stringify(obj)
        path.replaceWith(
          t.callExpression(
            t.memberExpression(t.identifier('JSON'), t.identifier('parse')),
            [t.stringLiteral(parsed)]
          )
        )
      },
    },
  }
}
