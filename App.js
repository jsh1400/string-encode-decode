import React from 'react';
import ReactDOM from 'react-dom';
import Demo1 from './Demo/Demo1'
import Demo2 from './Demo/Demo2'

class App extends React.Component{
  state={
    en: '',
    de: '',
  }
  render(){
    return(
      <div>
        <style>
          {`
      html,body, input{padding:0; margin: 0; font-family: sans,tahoma}
      h1{text-align: center}
      .main{margin: 20px auto; max-width: 95%; width: 800px;
        min-height: 250px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;}
      .header{background: #333; padding: 50px; color:#fff; text-align: center;}
      .footer{background: #333; padding: 50px; color:#ccc; text-align: center;}
      .demo-box{display:flex;width:100%; padding: 10px; border-top: 1px solid #ccc}
      .demo{align-items: center;justify-content: center;display: flex;}
      .demo{ width: 30%;}
      .code{ width: 70%;}
      pre{
            background: #2B2B2B;
            color: #fff;
            padding: 10px;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: normal;
        }
      `}
        </style>
        <div className="header">
          <h1>Demo String Encode Decode</h1>
          <em>React String Encode Decode</em>
          <pre style={{width: '300px', margin: '20px auto'}}>npm i string-encode-decode</pre>
        </div>
        <div className={"main"}>
          <Demo1/>
          <Demo2/>
        </div>
        <div className="footer">
          <em>Copyright By Javad Shariati</em>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
