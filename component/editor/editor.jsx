'use client'

import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete'
import { defaultKeymap } from '@codemirror/commands'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { EditorState } from '@codemirror/state'
import {
  EditorView,
  lineNumbers,
  keymap
} from '@codemirror/view'
import { githubDark } from '@uiw/codemirror-theme-github'
import cn from 'classnames'
import {
  useEffect,
  useRef,
  useState
} from 'react'
import './style.css'
import { roboto_mono } from '../../app/font'

function Editor ({
  onInput,
  language,
  value
}) {
  const editorParentRef = useRef({})
  const state = EditorState.create({
    extensions: [
      lineNumbers(),
      closeBrackets(),
      githubDark,
      keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
      ]),
      language === 'html' ? html() : language === 'css' ? css() : javascript(),
      EditorView.lineWrapping,
      EditorView.updateListener.of((v) => {
        if (v.docChanged) {
          onInput(v.view.state.doc.toString())
        }
      })
    ]
  })

  useEffect(() => {
    const view = new EditorView({
      state,
      parent: editorParentRef.current
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

  return <div className={cn('editor__parent', roboto_mono.className)} ref={editorParentRef}></div>
}

export default Editor