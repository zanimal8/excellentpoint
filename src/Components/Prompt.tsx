import React from 'react'
import ReactQuill from 'react-quill'

const styles: React.CSSProperties = {
  height: 'auto',
  minHeight: 90,
  maxHeight: 445,
  overflow: 'scroll',
  border: '0.5px solid #CCC',
  padding: '6px 10px',
  borderRadius: 10,
  margin: '15px 0',
  fontFamily: 'Source Sans Pro'
}

interface PropTypes { content: string, onChange: (value: string) => void, className?: string }

const Prompt: React.FC<PropTypes> = (props: PropTypes) => {
  const modules = { toolbar: false }
  return (
    <ReactQuill
      placeholder={'paste your discussion prompt here'}
      className='shadow-sm'
      style={styles}
      theme='bubble'
      defaultValue={props.content}
      onChange={props.onChange}
      modules={modules} />
  )
}

export default Prompt
