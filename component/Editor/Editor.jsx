'use client'

import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete'
import { defaultKeymap } from '@codemirror/commands'
import {
  EditorView,
  lineNumbers,
  keymap
} from '@codemirror/view'
import { useEffect, useRef } from 'react'

export default function Editor({
  extensions = [],
  onInput = () => {},
  value = ''
}) {
  const parentRef = useRef(null)

  useEffect(() => {
    const view = new EditorView({
      extensions: [
        lineNumbers(),
        closeBrackets(),
        keymap.of([
          ...closeBracketsKeymap,
          ...defaultKeymap
        ]),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onInput(update.view.state.doc.toString())
          }
        }),
        ...extensions
      ],
      parent: parentRef.current
    })
    view.dispatch({
      changes: {
        from: 0,
        to: view.state.doc.length,
        insert: value
      }
    })

    return () => {
      view.destroy()
    }
  }, [])

  return <div ref={parentRef}></div>
}