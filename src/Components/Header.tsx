import React from 'react'
import { Container } from 'react-bootstrap'

function Header (props: any) {
  return (
    <Container className='d-flex pb-4 pt-5'>
      <img className='mx-1' src='/logo192.png' height={25}/>
      <h1 className='mx-2'>excellent point!</h1>
    </Container>
  )
}

export default Header
