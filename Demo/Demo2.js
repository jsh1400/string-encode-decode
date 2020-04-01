import React from 'react'
import { decode, encode } from 'string-encode-decode'

export default class Demo2 extends React.PureComponent {
  state={
    en: '',
  }
  render(){
    return(
      <div className="demo-box">
        <b>Decoder:</b>
        <div className="demo">
          <input placeholder="text" onChange={(e)=> this.setState({de: e.target.value})}/>
        </div>
        <div className="code">result = {`${decode(this.state.de)}`}</div>
      </div>
    )
  }
}
