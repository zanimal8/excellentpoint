import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import EditableField from './EditableField'

interface PropTypes {
  words: number,
  chars: number,
  goal: number,
  onChange: (goal: string) => void
}

const ReportArea = (props: PropTypes) => (
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
      <ProgressBar
        id='progress'
        className={`${props.words / props.goal >= 1 ? 'green' : 'purp'} mt-1 w-100`}
        style={{
          height: '45%'
        }}
        max={1}
        now={props.words / props.goal}
        label={`${Math.trunc(100 * props.words / props.goal)}%`}
      />
      </div>
  </div>
)

export default ReportArea
