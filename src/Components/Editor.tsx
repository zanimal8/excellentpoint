import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { useMediaQuery } from 'react-responsive'
import toPlainText from 'quill-delta-to-plaintext'

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

interface PropTypes { content: string, onChange: (value: string, htmlContent: string) => void, countWords: (content: string) => number, setSelection: (count: number) => void }

const Editor: React.FC<PropTypes> = (props: PropTypes) => {
  const [value, setValue] = useState(props.content)

  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })
  const height = isMobile ? 300 : 445

  return (
    <>
      <ReactQuill
      placeholder={`start typing your ${adjs[Math.floor(Math.random() * adjs.length)]} response here...`}
      className='shadow'
      style={{ ...styles, height }}
      theme='bubble'
      defaultValue={value || ''}
      onChange={(val, delta, source, editor) => {
        const content = editor.getContents()
        const plaintext: string = toPlainText(content)
        setValue(plaintext)
        props.onChange(plaintext, val)
      }}
      onChangeSelection={(range, source, editor) => {
        if (!range) { props.setSelection(0) } else {
          props.setSelection(props.countWords(editor.getText(range.index, range.length)))
        }
      }}
      modules={{ toolbar: false }}/>
    </>
  )
}

export default Editor
