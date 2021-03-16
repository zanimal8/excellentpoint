import React from 'react'
import Editor from './Components/Editor'
import Prompt from './Components/Prompt'
import Header from './Components/Header'
import ReportArea from './Components/ReportArea'
import ToggleButton from './Components/ToggleButton'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

// String Cleaning
const tags = ['p', 'h1', 'h2', 'h3', 'em', 'strong'].flatMap(tag => {
  return [`<${tag}>`, `</${tag}>`]
})

const specials = ['&nbsp;', '<br>', ...',./;<>?:"[]\\{}|-=_+!@#$%^*()'.split('')]

const cleanString = (raw: string) => {
  let cleaned = raw
  if (cleaned) {
    tags.forEach(tag => {
      cleaned = cleaned.replaceAll(tag, '')
    })
    specials.forEach(special => {
      cleaned = cleaned.replaceAll(special, ' ')
    })
  }
  return cleaned || ''
}

const defaultState = JSON.stringify({ content: '', words: 0, prompt: '', drawer: false, force: false, transitioning: false, goal: 100 })

interface State {
  content: string,
  words: number,
  prompt: string,
  drawer: boolean,
  force: boolean,
  transitioning: boolean
  goal: number
}

class App extends React.Component<{}, State> {
  constructor (props: any) {
    super(props)
    this.state = JSON.parse(localStorage.getItem('state') || defaultState)
    this.state = { ...this.state, drawer: true, transitioning: false }

    this.setContent = this.setContent.bind(this)
    this.setPrompt = this.setPrompt.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
    this.setGoal = this.setGoal.bind(this)
  }

  setContent (content: string) {
    const test = cleanString(content)
    const matches = test.trim().match(/\S+/g) || []
    if (matches && tags.includes(matches[matches?.length - 1])) {
      matches.pop()
    }
    const words = matches?.length ?? 0
    const state = { ...this.state, content, words }
    localStorage.setItem('state', JSON.stringify(state))
    this.setState(state)
  }

  setPrompt (value: string) {
    const state = { ...this.state, prompt: value, drawer: true }
    localStorage.setItem('state', JSON.stringify(state))
    this.setState(state)
  }

  openDrawer () {
    this.setState({ drawer: !this.state.drawer })
  }

  setGoal (goal: string) {
    this.setState({ goal: parseInt(goal) })
    const state = { ...this.state, goal: parseInt(goal) }
    localStorage.setItem('state', JSON.stringify(state))
  }

  // toggleTrans () {
  //   this.setState({ transitioning: !this.state.transitioning })
  // }

  render () {
    const showPrompt = this.state.drawer
    return (
      <div className='align-content-center'>
        <div>
          <Header/>
        </div>
        <Container className=''>
          <Row>
            <Col style={{ maxWidth: 850 }} xs={12} lg={8}>
              <Row className='justify-content-center d-block'>
                <ReportArea
                  words={this.state.words}
                  chars={cleanString(this.state.content).length}
                  goal={this.state.goal}
                  onChange={this.setGoal}
                />
              </Row>
              <Row className='d-flex'>
                <Editor content={this.state.content} onChange={this.setContent}/>
              </Row>
            </Col>
            <Col xs={12} lg={4} className='mt-xs-0 pt-2 mt-lg-5'>
              <Row>
                <SwitchTransition>
                  <CSSTransition
                    key={showPrompt ? 'prompt' : 'button'}
                    addEndListener={(node, done) => {
                      node.addEventListener('transitionend', done, false)
                    }}
                    classNames='fade'
                    >
                        <Col xs={11}>
                        {
                          showPrompt && <Prompt className='mx-auto' content={this.state.prompt} onChange={this.setPrompt} />
                        }
                        </Col>
                  </CSSTransition>
                </SwitchTransition>
                <Col xs={1}>
                  <ToggleButton right={showPrompt} className='mx-auto' onChange={this.openDrawer}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
