'use client'

import { css } from '@codemirror/lang-css'
import Editor from './Editor'

export default function CSSEditor({ extensions, ...props }) {
  return <Editor {...props} extensions={[css(), ...extensions]} />
}