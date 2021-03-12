import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import Editor from './Components/Editor'
import Header from './Components/Header'
import ReportArea from './Components/ReportArea'

// String Cleaning
const tags = ['p', 'h1', 'h2', 'h3'].flatMap(tag => {
  return [`<${tag}>`, `</${tag}>`]
})

const specials = ['&nbsp;', '<br>']

const cleanString = (raw: string) => {
  let cleaned = raw
  tags.forEach(tag => {
    cleaned = cleaned.replaceAll(tag, '')
  })
  specials.forEach(special => {
    cleaned = cleaned.replaceAll(special, ' ')
  })
  return cleaned
}

const defaultState = JSON.stringify({ content: '', words: 0 })

class App extends React.Component<{}, { content: string, words: number }> {
  constructor (props: any) {
    super(props)
    this.state = JSON.parse(localStorage.getItem('state') || defaultState)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value: string) {
    const test = cleanString(value)
    const matches = test.trim().match(/\S+/g)
    if (matches && tags.includes(matches[matches?.length - 1])) {
      matches.pop()
    }
    const state = { content: value, words: matches?.length ?? 0 }
    localStorage.setItem('state', JSON.stringify(state))
    this.setState(state)
  }

  render () {
    return (
      <div className='align-content-center'>
        <div>
          <Header></Header>
        </div>
        <Container className=''>
          <Row>
            <Col style={{ maxWidth: 850 }}>
              <Row className='justify-content-center d-block'>
                <ReportArea words={this.state.words} chars={cleanString(this.state.content).length}/>
              </Row>
              <Row>
                <Editor content={this.state.content} onChange={this.handleChange}/>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
