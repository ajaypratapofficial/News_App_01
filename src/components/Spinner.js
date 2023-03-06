import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{width:"15vh" , height:"15vh"}} />
      </div>
    )
  }
}

export default Spinner