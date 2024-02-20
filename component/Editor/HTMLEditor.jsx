'use client'

import { html } from '@codemirror/lang-html'
import Editor from './Editor'

export default function HTMLEditor({ extensions, ...props }) {
  return <Editor {...props} extensions={[html(), ...extensions]} />
}