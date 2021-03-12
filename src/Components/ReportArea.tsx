import React from 'react'

const ReportArea = (props: { words: number, chars: number }) => (
  <div className='d-flex'>
    <div className='mx-3'>
      <label htmlFor='word'><em>words</em></label>
      <p id='words' className='number'>{props.words}</p>
    </div>
    <div className='mx-3'>
      <label htmlFor='pages'><em>pages</em></label>
      <p id='pages' className='number'>{(props.words / 250).toFixed(props.words / 250 < 0.01 ? 0 : 2)}</p>
    </div>
    <div className='mx-3'>
      <label htmlFor='characters'><em>characters</em></label>
      <p id='characters' className='number'>{props.words > 0 ? props.chars : 0}</p>
    </div>
  </div>
)

export default ReportArea
