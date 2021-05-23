import React, { Component } from "react";
import App3 from "./App3.js"
export default class App2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            wen:"0",
            shi:"0",
          };


    }
    wendu_input() {
        this.state.wen=this.txt1.value+'';
      }

    shidu_input() {
        this.state.shi=this.txt2.value+'';
      }
    cwen(){
        this.callAPI();
    }
    cshi(){
        this.callAPI();
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
              'wendu': this.state.wen,
              'shidu': this.state.shi        
          })
      };
        fetch("http://localhost:9000/demo1",opts2)
            .then(res => res.text())
            .then(res => {});   
    } 
  
    render(){
        
        return(
        <div>
            <div>
               <input type="text" id="wendu" name="wendu" required lay-verify="required" placeholder="请输入目标温度" ref={(node)=>this.txt1=node} onKeyUp={this.wendu_input.bind(this)} />
            </div><button onClick={this.cwen.bind(this)}>调节温度</button>
            <div>
               <input type="text" id="shidu" name="shidu" required lay-verify="required" placeholder="请输入目标湿度" ref={(node)=>this.txt2=node} onKeyUp={this.shidu_input.bind(this)} />
            </div><button onClick={this.cshi.bind(this)}>调节湿度</button>
                <br></br>     
 
     
        </div>  
        )
    
    
    
    
    
    
    
    
    }
        
   
    
















}