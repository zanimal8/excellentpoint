import React from 'react'
import { Container } from 'react-bootstrap'

function Header (props: any) {
  return (
    <Container className='d-flex pb-4 pt-5'>
      <img className='mx-1' src='/logo192.png' height={25}/>
      <a className='link' rel='noreferrer' target='_blank' href='https://github.com/ecuber/excellentpoint'><h1 className='mx-2'>excellent point!</h1></a>
    </Container>
  )
}

export default Header
