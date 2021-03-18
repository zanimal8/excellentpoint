import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import EditableField from './EditableField'

interface PropTypes {
  words: number,
  chars: number,
  goal: number,
  selected: number,
  onChange: (goal: string) => void
}

const ReportArea = (props: PropTypes) => {
  const selectRatio = props.selected / props.goal
  const padding = selectRatio < 15 && selectRatio > 0 ? 0.15 * props.goal : selectRatio
  return (
  <div className='d-flex'>
    <div className='mx-3'>
      <label htmlFor='word'><em>words</em></label>
      <p id='words' className='number'>{props.words}</p>
    </div>
    <div className='mx-3'>
      <label htmlFor='goal'><em>goal</em></label>
      <EditableField value={`${props.goal || 1}`} onChange={props.onChange} className='number number-editable'/>
    </div>
    <div className='w-100 mx-3 d-flex-col align-items-end'>
      <label htmlFor='progress'><em>progress</em></label>
      <ProgressBar id='progress' className='mt-1 w-100' style={{ height: '45%' }}>
        <ProgressBar
          style={{ backgroundColor: '#5dd9b2' }}
          max={props.goal}
          now={padding}
          label={<p><strong>{props.selected}</strong> words</p>}
          key={1}
        />
        <ProgressBar
          style={{ backgroundColor: `${props.words >= props.goal ? '#4bb44b' : '#6d57ff'}` }}
          max={props.goal}
          now={props.words - (padding)}
          label={`${Math.trunc(100 * props.words / props.goal)}%`}
          key={2}
        />
      </ProgressBar>
      </div>
  </div>
  )
}

export default ReportArea
