import React, { Component } from "react";
//import update from './update.js';
import './App.css';
let timer1 = undefined;
export default class root extends Component {
    constructor(props){
        super(props)
        this.state={
          users:[],
          i:"0",
          find:"0"
      }
      this.componentDidMount = this.componentDidMount.bind(this);

    }
    callAPI() {

      let formData = new FormData();
      formData.append("file_name","hello");
      formData.append("shidu","1111aaaa");
    
      var opts2= {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            'filename': '2.txt',
            'wendu': this.wendu.value,
            'shidu': this.shidu.value
            
        })
    };
    
    
      fetch("http://localhost:9000/croot",opts2)
          .then(res => res.text())
          .then(res => {this.setState({ demo_add: res });});
          
    
    
  } 
//     componentDidMount () {
//       const getAllUsersUrl="http://localhost:9000/demo"
//       fetch(getAllUsersUrl,{method:"GET"})
//           .then(res=>res.json())
//           .then(res=>{
//               console.log(res)
//               this.setState({
//                   users:res
//               })
//               console.log(this.state.users)
//           })
//   }
    componentDidMount(){
    this.timerStart1();
  }
    componentWillUnmount() {
    // clearInterval(this.interval);
    clearInterval(timer1);
  }
    componentDidUpdate(){

}
    timerStart1 = () =>  {
    timer1 = setInterval(() => this.record1(), 750);
  }
    record1 = () => {
        const getAllUsersUrl="http://localhost:9000/croot"
        fetch(getAllUsersUrl,{method:"GET"})
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                this.setState({
                    users:res
                })
                console.log(this.state.users)
            })
}
    getUserByID(text1){

        let formData = new FormData();
        formData.append("file_name","hello");
        formData.append("shidu","1111aaaa");
        var opts3= {
          method: 'POST',
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
              'id': text1      
          })
      };   
        fetch("http://localhost:9000/demo_f",opts3)
            .then(res => res.text())
            .then(res => {this.setState({ find: res });
            if(this.state.find=="1") 
           alert("查找到ID符合的传感器。");});
  }
    deleteUserById(name){
      if(window.confirm("确定要删除吗？")){
        let formData = new FormData();
        formData.append("file_name","hello");
        formData.append("shidu","1111aaaa");
        var opts3= {
          method: 'POST',
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
              'id': name      
          })
      };   
        fetch("http://localhost:9000/duser",opts3)
            .then(res => res.text())
            .then();
        //   const getUserById=""
        //   fetch(getUserById,{method:"DELETE"})
        //       .then(response=>response.json())
        //       .then(data=>{
        //           console.log(data)
        //           this.setState({
        //               users:data
        //           })
        //       })
      }
     
  }
    addUser(){
      this.props.history.push('/add')
  }
    updateUser(name,root){

            if(window.confirm("确定要修改吗？")){
              let formData = new FormData();
              formData.append("file_name","hello");
              formData.append("shidu","1111aaaa");
              var opts3= {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    'id': name ,
                    'root':root   
                })
            };   
              fetch("http://localhost:9000/root",opts3)
                  .then(res => res.text())
                  .then();

            }
           
        
      
  }
    random(){
        this.props.history.push('/random')
    }

    render(){
    return(
        <div>
            <br></br>
            <div className = "broder1">
            <table>
                <thead>
                <tr>
                    <th>用户名</th>
                    <th>密码</th>
                    <th>是否管理员</th>
                    
                </tr>
                </thead>
                <tbody>
                {   
                    this.state.users.map(
                        (user,index) => {
                          return(
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.pwd}</td>
                            <td>{user.root}</td>
                            <td>
                                <button className="bt2" onClick={this.updateUser.bind(this,user.name,user.root)}>
                                    <i></i>设为ROOT
                                </button>
                            </td>
                            <td>
                                <button className="bt2" onClick={this.updateUser.bind(this,user.name,user.root)}>
                                    <i></i>取消ROOT
                                </button>
                            </td>
                            <td>
                                <button className="bt2" onClick={this.deleteUserById.bind(this,user.name)}>
                                    <i></i>删除用户
                                </button>
                            </td>
                        </tr>)})
                }
                </tbody>
            </table>
            </div>

        </div>


        )}
    
}
