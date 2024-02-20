'use client'

import { javascript } from '@codemirror/lang-javascript'
import Editor from './Editor'

export default function JavaScriptEditor({ extensions, ...props }) {
  return <Editor {...props} extensions={[javascript({
    jsx: true
  }), ...extensions]} />
}