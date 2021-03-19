import React from 'react'
import Instructions from './Components/Instructions'
import Editor from './Components/Editor'
import Prompt from './Components/Prompt'
import Header from './Components/Header'
import ReportArea from './Components/ReportArea'
import ToggleButton from './Components/ToggleButton'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import About from './Components/About'

const countWords = (test: string) => {
  const matches = test.trim().match(/\b[-?'?(\w+)?]+\b/gi) || []
  return matches?.length ?? 0
}

const defaultState = JSON.stringify({ content: '', htmlContent: '', words: 0, prompt: '', drawer: false, force: false, transitioning: false, goal: 100 })

interface State {
  content: string,
  htmlContent: string,
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

  setContent (content: string, htmlContent: string) {
    const words = countWords(content)
    const state = { ...this.state, content, htmlContent, words }
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
    const editorContainer = React.createRef<HTMLDivElement>()
    return (
      <div className='align-content-center'>
        <header>
          <Header/>
        </header>
        <section>
          <Container ref={editorContainer} style={{ height: '75vh' }} className='mx-auto p-xs-3' fluid='md'>
            <Row>
              <Col style={{ height: '100%', maxWidth: 850 }} xs={12} lg={8}>
                <Row className='justify-content-center d-block'>
                  <ReportArea
                    words={this.state.words}
                    chars={this.state.content.length}
                    goal={this.state.goal}
                    onChange={this.setGoal}
                  />
                </Row>
                <Row style={{ height: '100%' }}className='d-flex'>
                  <Editor elementRef={editorContainer} content={this.state.htmlContent || this.state.content} onChange={this.setContent} countWords={countWords}/>
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
                          <Col xs={9} sm={10} md={11}>
                          {
                            showPrompt && <Prompt className='mx-auto' content={this.state.prompt} onChange={this.setPrompt} />
                          }
                          </Col>
                    </CSSTransition>
                  </SwitchTransition>
                  <Col className='mx-xs-0 mx-md-auto' xs={1}>
                    <ToggleButton right={showPrompt} onChange={this.openDrawer}/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className='mx-auto mt-5 pt-5 mb-4' fluid='md'>
          <Row xs={12} md={10} lg={8}>
            <Col xs={11} sm={4} lg={6}><About/></Col>
            <Col xs={11} sm={8} lg={6}><Instructions /></Col>
          </Row>
        </Container>
        </section>
        <footer>

        </footer>
      </div>
    )
  }
}

export default App
