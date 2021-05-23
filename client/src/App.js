import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apipost: "" ,
                   name: "" ,
                   pwd: "" ,
                   api3:"" ,
                   api2:""    
                  };
    this.reg2=this.reg1.bind(this)
}
 
 
callAPI() {


  fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ api2: res }));


  let formData = new FormData();
  formData.append("file_name","hello");
  formData.append("password","1111aaaa");

  var opts = {
      method:"POST",   //请求方法
      body:formData,   //请求体
　　　　　headers: {
 　　　　 'Accept': 'text/plain',
 　　　　 'Content-Type': 'text/plain',
　　　　 },

  };
  var opts2= {
    method: 'POST',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
        'filename': '2.txt',
        'name': this.state.name,
        'pwd': this.state.pwd
        
    })
};

  fetch("http://localhost:9000/second",opts2)
      .then(res => res.text())
      .then(res => this.setState({ apipost: res }));

  fetch("http://localhost:9000/api3",opts2)
      .then(res => res.text())
      .then(res => {this.setState({ api3: res });
                             console.log(this.state.api3);if(this.state.api3=="1") 
                            this.props.history.push('/Home');
                          else if(this.state.api3=="0") this.props.history.push('/Home2');});


} 

   render() { 
      return (
    <div className="App">      
         <body>  
            <div id="login">  
                <h1>欢迎登录</h1>      
                    <input type="text" required="required" placeholder="用户名" name="u" ref={(node)=>this.txt1=node} onKeyUp={this.name_input.bind(this)}></input>  
                    <input type="password" required="required" placeholder="密码" name="p" ref={(node)=>this.txt=node} onKeyUp={this.pwd_input.bind(this)}></input>  
                    <button className="but" type="submit" onClick={this.mylogin.bind(this)}>登录</button><br></br>
                    <button className="but" type="submit" onClick={this.reg2}>注册</button>     
                <h3>通过post返回的数据: {this.state.api3}</h3>
            </div>  
          </body>  
      </div>
  );
   }
   reg1(){
    this.props.history.push('/Reg')
   }
   mylogin() {
    console.log("name="+  this.state.name);
    console.log("pwd="+  this.state.pwd);
    this.callAPI();
}

name_input() {
  this.state.name=this.txt1.value;
}
pwd_input() {
  this.state.pwd=this.txt.value;
}
}
export default App;
