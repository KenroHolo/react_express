import React, { Component } from "react";
export default class add extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
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
              'shidu': this.shidu.value,
              'id': this.id.value            
          })
      };  
        fetch("http://localhost:9000/demo_add",opts2)
            .then(res => res.text())
            .then(res => {this.setState({ demo_add: res });});
      
      
    } 
      addUser() {
        console.log("id="+  this.id.value);
        console.log("wendu="+  this.wendu.value);
        console.log("shidu="+  this.shidu.value);
        this.callAPI();
        alert("添加成功")
        this.props.history.push('/Home')
    }


    render(){
        return (
            <div>
                <fieldset className="layui-elem-field">
                    <legend>添加传感器节点</legend>
                    <div className="layui-field-box">
                        <div className="layui-row layui-col-space2">
                            

                            <div className="layui-col-md1">
                                <input type="text" id="shidu" name="shidu" required lay-verify="required" placeholder="ID" className="layui-input" ref={id=>this.id=id} />
                            </div>

                            <hr className="layui-bg-green" />

                            <div className="layui-col-md1">
                                <input type="text" id="wendu" name="wendu" required lay-verify="required" placeholder="温度" className="layui-input" ref={wendu=>this.wendu=wendu} />
                            </div>

                            <hr className="layui-bg-green" />

                            <div className="layui-col-md1">
                                <input type="text" id="shidu" name="shidu" required lay-verify="required" placeholder="湿度" className="layui-input" ref={shidu=>this.shidu=shidu} />
                            </div>

                            <hr className="layui-bg-green" />

                            <div className="layui-col-md1">
                                <button className="bt1" onClick={this.addUser.bind(this)}>
                                    <i></i>添加
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        )
    }




}