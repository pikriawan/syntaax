import style from './style.module.css'

export default function Editor ({ onInput, value }) {
  return <textarea onInput={onInput} value={value}></textarea>
}