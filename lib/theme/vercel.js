import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { EditorView } from '@codemirror/view'
import { tags as t } from '@lezer/highlight'

const fern = '#62c073'
const frenchRose = '#f75f8f'
const gallery = '#ededed'
const jordyBlue = '#52a8ff'
const lavender = '#bf7af0'
const starDust = '#a1a1a1'
const vercelTheme = EditorView.theme({
  '&': {
    backgroundColor: 'var(--body-bg)',
    color: 'var(--body-color)'
  },
  '&.cm-focused': {
    outline: 'none'
  },
  '.cm-gutters': {
    backgroundColor: 'var(--body-bg)',
    border: 'none',
    color: 'var(--body-color)',
    fontFamily: 'var(--font-roboto-mono)',
    fontSize: '0.875rem'
  },
  '.cm-gutter': {
    paddingLeft: '0.75rem',
    paddingRight: '0.375rem'
  },
  '.cm-content': {
    fontFamily: 'var(--font-roboto-mono)',
    fontSize: '0.875rem'
  }
}, {
  dark: true
})
const vercelHighlightStyle = HighlightStyle.define([
  {
    tag: t.comment,
    color: starDust
  },
  {
    tag: t.name,
    color: gallery
  },
  {
    tag: [
      t.typeName,
      t.attributeName,
      t.className,
      t.definition(t.propertyName),
      t.function(t.variableName)
    ],
    color: lavender
  },
  {
    tag: [
      t.tagName,
      t.literal,
      t.string
    ],
    color: fern
  },
  {
    tag: [t.number, t.definition(t.variableName)],
    color: jordyBlue
  },
  {
    tag: [t.keyword, t.operator],
    color: frenchRose
  }
])
const vercel = [vercelTheme, syntaxHighlighting(vercelHighlightStyle)]

export default vercel