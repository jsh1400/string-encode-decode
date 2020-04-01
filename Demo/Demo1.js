import React from 'react'
import { encode } from 'string-encode-decode'

export default class Demo1 extends React.PureComponent {
  state={
    en: '',
  }
  render(){
    return(
      <div className="demo-box">
        <b>Encoder:</b>
        <div className="demo">
          <input placeholder="text" onChange={(e)=> this.setState({en: e.target.value})}/>
        </div>
        <div className="code">result = {`${encode(this.state.en)}`}</div>
      </div>
    )
  }
}
