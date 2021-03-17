import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const styles: React.CSSProperties = {
  height: 445,
  backgroundColor: '#F8F8F8',
  border: '1px solid #CCC',
  padding: '6px 10px',
  borderRadius: 10,
  margin: '15px 0',
  fontFamily: 'Source Sans Pro'
}

const adjs = [
  'audacious', 'compelling', 'insightful', 'quirky',
  'controversial', 'humorous', 'articulate', 'witty',
  'confounding', 'crisp', 'eloquent', 'emphatic', 'formal',
  'ornate', 'rhetorical', 'succinct', 'concise', 'wordy'
]

interface PropTypes { content: string, onChange: (value: string) => void, countWords: (content: string) => number }

const Editor: React.FC<PropTypes> = (props: PropTypes) => {
  const [value, setValue] = useState(props.content)
  const setVal = (val: string, delta: any, source: string, editor: any) => {
    setValue(val)
    props.onChange(val)
  }
  const [bounds, setBounds] = useState({ left: 0, top: 0, height: 0, width: 0 })
  const [text, setText] = useState('')

  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })
  const height = isMobile ? 300 : 445

  const Popover: React.FC = () => {
    if (!text) { return null }
    const Tooltip = styled.div`
      position: absolute;
      left: ${bounds.left + bounds.width / 2}px;
      top: ${140 + bounds.top}px;
      margin-left: -75px;
      width: auto;
      height: 1.4em;
      background: #5dd9b2;
      font-size: 1em;
      pointer-events: none;
      text-align: center;
      color: white;
      border-radius: 3px;
    `
    return <Tooltip>selected <strong>{props.countWords(text || '')}</strong> words</Tooltip>
  }

  return (
    <>
      <ReactQuill
      placeholder={`start typing your ${adjs[Math.floor(Math.random() * adjs.length)]} response here...`}
      className='shadow'
      style={{ ...styles, height }}
      theme='bubble'
      defaultValue={value || ''}
      onChange={setVal}
      onChangeSelection={(range, source, editor) => {
        if (!range) { setBounds({ left: 0, top: 0, height: 0, width: 0 }) } else {
          setBounds(editor.getBounds(range.index, range.length))
          setText(editor.getText(range.index, range.length))
        }
      }}
      modules={{ toolbar: false }}/>
      <Popover/>
    </>
  )
}

export default Editor
