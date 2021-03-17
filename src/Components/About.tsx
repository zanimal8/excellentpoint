import React from 'react'
import styled from 'styled-components'

const CardH5 = styled.p`
  font-size: 1.2rem
`

const About: React.FC = (props: any) => (
  <div style={{
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontFamily: 'Source Sans Pro',
    borderRadius: 10,
    marginLeft: 0
  }} className='px-4 py-3'>
    <CardH5 className='mb-2'><strong>about</strong></CardH5>
    <p style={{ fontSize: '1rem' }}>
      ExcellentPoint is a simple typing workspace made for students trying to hit a word
      count. The aesthetically pleasing combination of helpful visual tools and a healthy amount
      of  <a style={{ color: '#6d57ff' }} href='https://en.wikipedia.org/wiki/Gamification' target='_blank' rel='noopener noreferrer'>gamification</a> make
      the writing process just a little bit easier!
    </p>
    <p className='mt-3' style={{ fontSize: '1rem' }}>
      For more information on the project, visit the <a style={{ color: '#6d57ff' }} href='https://github.com/ecuber/excellentpoint' target='_blank' rel='noopener noreferrer'>Github repository</a>.
    </p>
  </div>
)

export default About
