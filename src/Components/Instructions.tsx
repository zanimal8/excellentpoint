import React from 'react'
import styled from 'styled-components'

const CardH5 = styled.p`
  font-size: 1.2rem
`

const Code = styled.code`
  margin-left: 0.25rem
`

const Color = styled.u`
  background-color: ${props => props.color};
  color: white;
  text-decoration: none;
  padding: 0.2rem 0.35rem;
  border-radius: 5px;
`

const Instructions: React.FC = (props: any) => (
  <div style={{
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontFamily: 'Source Sans Pro',
    borderRadius: 10,
    marginLeft: 0,
    fontSize: '1rem'
  }} className='px-4 pt-3 pb-1'>
    <CardH5><strong>how to use this site</strong></CardH5>
      <ol className='mt-2'>
        <li>Paste your writing prompt in the prompt box on the right.
          <ul>
            <li>You can collapse the prompt area by clicking the arrow.</li>
            <li>This is also a great place to organize thoughts!</li>
          </ul>
        </li>
        <li>Set your word goal by clicking on the &quot;goal&quot; value in the progress area.
          <ul>
            <li>The progress bar will fill up as you start writing!</li>
            <li>When you reach your goal, the bar turns <Color color='#4bb44b'>green</Color> (it&apos;s amazingly satisfying!).</li>
          </ul>
        </li>
        <li>
          Text formatting is available with <Code>Ctrl/Cmd + <strong>B</strong> / <u>U</u> / <em>I</em></Code>
        </li>
      </ol>
  </div>
)

export default Instructions
