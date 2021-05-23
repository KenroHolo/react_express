import React, { Component } from "react";

export default class update extends Component{
    constructor(props){
        super(props)
    }
    callAPI() {
        var opts2= {
          method: 'POST',
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
              'id':this.id.value,
              'wendu': this.wendu.value,
              'shidu': this.shidu.value        
          })
      };
        fetch("http://localhost:9000/demo_c",opts2)
            .then(res => res.text())
            .then(res => {});   
    } 
    componentDidMount () {
        const getAllUsersUrl="http://localhost:9000/demo"
        fetch(getAllUsersUrl,{method:"GET"})
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })
    }

    updateUser(){
        this.callAPI();
        alert("修改成功")
        this.props.history.push('/Home')
    }
    render(){
        return (
            <div>
                <fieldset className="layui-elem-field">
                    <legend>修改节点信息</legend>
                    <div className="layui-field-box">
                        <div className="layui-row layui-col-space2">
                            <div>{console.log(this.props.i)}</div>

                            <div>
                                <input type="text" id="id" name="id" required lay-verify="required" placeholder="id" className="layui-input" ref={id=>this.id=id}  />
                            </div>

                            <hr/>

                            <div>
                                <input type="text" id="wendu" name="wendu" required lay-verify="required" placeholder="温度" className="layui-input" ref={wendu=>this.wendu=wendu} />
                            </div>

                            <hr/>

                            <div>
                                <input type="text" id="shidu" name="shidu" required lay-verify="required" placeholder="湿度" className="layui-input" ref={shidu=>this.shidu=shidu} />
                            </div>

                            <hr/>

                            <div>
                                <button className="bt1" onClick={this.updateUser.bind(this)}>
                                    <i></i>修改
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        )
    }
}