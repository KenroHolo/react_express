import React from 'react';
import './Reg.css';
class Reg extends React.Component {
   constructor(props) {
      super(props);
      this.state = { apipost: "" ,
                     name: "" ,
                     pwd: "" ,
                     pwd2: "" ,
                     api4:""    
                    };
      this.logg2=this.logg.bind(this)

  }
  callAPI() {


   fetch("http://localhost:9000/testAPI")
       .then(res => res.text())
       .then(res => this.setState({ api2: res }));
 
 
   let formData = new FormData();
   formData.append("file_name","hello");
   formData.append("password","1111aaaa");
 

   var opts3= {
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
   fetch("http://localhost:9000/api4",opts3)
       .then(res => res.text())
       .then(res => {this.setState({ api4: res });
                           //    if(this.state.api4=="注册成功") 
                           //   this.props.history.push('/Home');
                           });} 
 
   render() { 
      return (
         <div className="Reg">      
              <body>  
                 <div id="login">  
                     <h1>注册</h1>      
                         <input type="text" required="required" placeholder="用户名" name="u" ref={(node)=>this.txt1=node} onKeyUp={this.name_input.bind(this)}></input>  
                         <input type="password" required="required" placeholder="密码" name="p" ref={(node)=>this.txt=node} onKeyUp={this.pwd_input.bind(this)}></input>
                         <input type="password" required="required" placeholder="再次输入密码" name="p" ref={(node)=>this.txt2=node} onKeyUp={this.pwd2_input.bind(this)}></input>  
                         <button className="but" type="submit" onClick={this.myreg.bind(this)}>确定</button><br></br>
                         <button className="but" type="submit" onClick={this.logg2}>返回登陆</button>
                     <h3>通过post返回的数据: {this.state.api4}</h3>
                 </div>  
               </body>  
           </div>
      )
   }
   myreg() {
      console.log("name="+  this.state.name);
      console.log("pwd="+  this.state.pwd);
      if(this.state.pwd==this.state.pwd2)
      {this.callAPI();}
      else{alert("两次输入的密码不一致");}
  }
  logg(){
   this.props.history.push('/')
  }
   name_input() {
   this.state.name=this.txt1.value;
  }
   pwd_input() {
   this.state.pwd=this.txt.value;
  }
  pwd2_input() {
    this.state.pwd2=this.txt2.value;
   }
}
export default Reg;
