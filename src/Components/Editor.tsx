import React, { useState } from 'react'
import ReactQuill from 'react-quill'

const styles: React.CSSProperties = {
  height: 400,
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

interface PropTypes { content: string, onChange: (value: string) => void }

const Editor: React.FC<PropTypes> = (props: PropTypes) => {
  const [value, setValue] = useState(props.content)
  const setVal = (val: string) => {
    setValue(val)
    props.onChange(val)
  }
  return (
    <ReactQuill
      placeholder={`start typing your ${adjs[Math.floor(Math.random() * adjs.length)]} response here...`}
      className='shadow'
      style={styles}
      theme='bubble'
      value={value || ''}
      onChange={setVal}
      modules={{ toolbar: false }} />
  )
}

export default Editor
