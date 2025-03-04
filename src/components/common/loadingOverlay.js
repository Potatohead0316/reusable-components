import React from 'react'
import './styles.css'

const LoadingOverlay = () => {
  return (
    <div className='spinner-overlay'>
      <div className='spinner'></div>
      &nbsp;&nbsp;Loading, please wait...
    </div>
  )
}

export default LoadingOverlay
