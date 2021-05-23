import React, { Component } from "react";
let timer1 = undefined;
export default class App3 extends Component{
    constructor(props){
        super(props)
        this.state={
            wen:"0",
            shi:"0"
        }


    }
    componentDidMount(){
        this.timerStart1();

       
      }
      componentWillUnmount() {
        // clearInterval(this.interval);
        clearInterval(timer1);
      }
      timerStart1 = () =>  {
        timer1 = setInterval(() => this.record1(), 750);
      }
      record1 = () => {
        const getAllUsersUrl="http://localhost:9000/demo2"
        fetch(getAllUsersUrl,{method:"GET"})
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                this.setState({
                    wen:res.wendu
                })
                this.setState({
                    shi:res.shidu
                })
            })


      }

  
    render(){
        
        return(
        <div>
            <div>当前温度：{this.state.wen}</div><br></br>
            <div>当前湿度：{this.state.shi}</div>
            <div></div>

 
        </div>  
        )
    
    
    
    
    
    
    
    
    }
        
   
    
















}