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
    {/* <div className='mx-3'>
      <label htmlFor='pages'><em>pages</em></label>
      <p id='pages' className='number'>{(props.words / 250).toFixed(props.words / 250 < 0.01 ? 0 : 2)}</p>
    </div> */}
    {/* <div className='mx-3'>
      <label htmlFor='chars'><em>characters</em></label>
      <p id='chars' className='number'>{props.words > 0 ? props.chars : 0}</p>
    </div> */}
    <div className='mx-3'>
      <label htmlFor='goal'><em>goal</em></label>
      <EditableField value={`${props.goal || 1}`} onChange={props.onChange} className='number number-editable'/>
    </div>
    <div className='w-100 mx-3 d-flex-col align-items-end'>
      <label htmlFor='progress'><em>progress</em></label>
      <ProgressBar
        id='progress'
        animated={props.words / props.goal > 1}
        className={`${props.words / props.goal >= 1 ? 'green' : 'purp'} mt-1 w-100`}
        style={{
          height: '45%'
        }}
        max={1}
        now={props.words / props.goal}
        label={`${(100 * props.words / props.goal).toFixed(0)}%`}
      />
      </div>
  </div>
)

export default ReportArea
