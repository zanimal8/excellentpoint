import React from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'

interface PropTypes { value: string, onChange: (goal: string) => void, className?: string }

class EditableField extends React.Component<PropTypes, { html: string }> {
  constructor (props: PropTypes) {
    super(props)
    this.state = { html: props.value || '0' }
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  myRef = React.createRef<HTMLDivElement>()

  handleChange (evt: ContentEditableEvent) {
    const trimmed = evt.target.value.replace(/[^0-9]/g, '')
    if (parseInt(trimmed)) {
      this.setState({ html: `${parseInt(trimmed)}` })
      this.props.onChange(trimmed)
    }
  }

  handleBlur () {
    if (this.state.html === '') {
      this.setState({ html: '1' })
      this.props.onChange('1')
    }
  }

  render () {
    return <ContentEditable
              innerRef={this.myRef}
              html={this.state.html}
              onChange={this.handleChange}
              className={this.props.className}
              onBlur={this.handleBlur}
            />
  }
}

export default EditableField
