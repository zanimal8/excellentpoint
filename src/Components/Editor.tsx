import React from 'react'
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

class Editor extends React.Component<{ content: string, onChange: (value: string) => void }> {
  modules = { toolbar: false }

  render () {
    return (
      <div>
        <ReactQuill
          placeholder={`start typing your ${adjs[Math.floor(Math.random() * adjs.length)]} response here...`}
          className='shadow'
          style={styles}
          theme='bubble'
          value={this.props.content}
          onChange={this.props.onChange}
          modules={this.modules} />
      </div>
    )
  }
}

export default Editor
