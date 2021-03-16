import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { useMediaQuery } from 'react-responsive'
import { Popover } from 'react-text-selection-popover'
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
      onChange={setVal}
      modules={{ toolbar: false }} />
      <Popover render={({ clientRect, isCollapsed, textContent }) => {
        if (clientRect == null || isCollapsed) { return null }
        const Tooltip = styled.div`
          position: absolute;
          left: ${clientRect.left + clientRect.width / 2}px;
          top: ${clientRect.top - 40}px;
          margin-left: -75px;
          width: 170px;
          height: 1.4em;
          background: #5dd9b2;
          font-size: 1em;
          pointer-events: none;
          text-align: center;
          color: white;
          border-radius: 3px;
        `
        return <Tooltip>selected <strong>{props.countWords(textContent || '')}</strong> words</Tooltip>
      }}/>
    </>
  )
}

export default Editor
