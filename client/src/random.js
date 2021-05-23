import React, { Component } from "react";
import * as echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import ReactDOM from 'react-dom'
//引入echarts的主题样式
// import echartTheme from './echartTheme'
//引入样式
let timer1 = undefined;
let aa = [];
let ab = [];
let aa2 = [];
let ab2 = [];
let aa3 = [];
let ab3 = [];
let aa4 = [];
let ab4 = [];
let bb = [1,2,3,4,5,6,7,8];
let cc = [1,2,3,4,5,6,7,8];
export default class random extends Component{
    constructor(props){
        super(props)
        this.state = {
            secondsElapsed: 0,
            wen:0,
            shi:0,
            id:0,
            wen2:0,
            shi2:0,
            wen3:0,
            shi3:0,
            wen4:0,
            shi4:0,
            data:[1, 2, 3, 4, 5, 6,7,8],
            data2:[1, 2, 3, 4, 5, 6,7,8],
            data3:[1, 2, 3, 4, 5, 6,7,8],
            data4:[1, 2, 3, 4, 5, 6,7,8],
            seriesData:[],
            seriesData2:[],
            seriesData3:[],
            seriesData4:[],
            seriesDataa:[],
            seriesDataa2:[],
            seriesDataa3:[],
            seriesDataa4:[],
          };
        this.changeData  = this.changeData.bind(this);
        this.initBarEcharts  = this.initBarEcharts.bind(this);
        this.initBarEcharts2  = this.initBarEcharts.bind(this);
        this.initBarEcharts3  = this.initBarEcharts.bind(this);
        this.initBarEcharts4  = this.initBarEcharts.bind(this);
    }
    changeData(){
        this.setState({
            seriesData: aa,
            seriesData2: aa2,
            seriesData3: aa3,
            seriesData4: aa4,
        });
        this.setState({
            seriesDataa: ab,
            seriesDataa2: ab2,
            seriesDataa3: ab3,
            seriesDataa4: ab4,
        });
        this.setState({
            data: bb
        });
    }
    initBarEcharts(){
        let myChart = echarts.init(document.getElementById('main'));
        let myChart2 = echarts.init(document.getElementById('main2'));
        let myChart3 = echarts.init(document.getElementById('main3'));
        let myChart4 = echarts.init(document.getElementById('main4'));
        let options = {
            title: { text: '节点1', x: 'center',},
            tooltip: {trigger: 'axis'},
            xAxis: {
                data: this.state.data
            },
            yAxis: [              
            {
              type: 'value',
              position: 'left',
              name: '温度',
              min: 0,
              max: 100,
              axisLabel : {
                formatter: '{value}℃',
            },
            },
            {
              type: 'value',
              position: 'right',
              name: '湿度',
              min: 0,
              max: 100,
              interval: 50,
              axisLabel : {
                formatter: '{value}%RH',
            },
            }
          ],
            series: [
              {
                name: '温度℃',
                type: 'line',
                data: this.state.seriesData
              },
              {
                name: '湿度%RH',
                type: 'line',
                yAxisIndex:1,
                data: this.state.seriesDataa
              }
          ]
        };
        let options2 = {
            title: { text: '节点2', x: 'center',},
            tooltip: {trigger: 'axis'},
            xAxis: {
                data: this.state.data
            },
            yAxis: [              
            {
              type: 'value',
              position: 'left',
              name: '温度',
              min: 0,
              max: 100,
              axisLabel : {
                formatter: '{value}℃',
            },
            },
            {
              type: 'value',
              position: 'right',
              name: '湿度',
              min: 0,
              max: 100,
              interval: 50,
              axisLabel : {
                formatter: '{value}%RH',
            },
            }
          ],
            series: [
              {
                name: '温度℃',
                type: 'line',
                data: this.state.seriesData2
              },
              {
                name: '湿度%RH',
                type: 'line',
                yAxisIndex:1,
                data: this.state.seriesDataa2
              }
          ]
        };
        let options3 = {
          title: { text: '节点3', x: 'center',},
          tooltip: {trigger: 'axis'},
          xAxis: {
              data: this.state.data
          },
          yAxis: [              
          {
            type: 'value',
            position: 'left',
            name: '温度',
            min: 0,
            max: 100,
            axisLabel : {
              formatter: '{value}℃',
          },
          },
          {
            type: 'value',
            position: 'right',
            name: '湿度',
            min: 0,
            max: 100,
            interval: 50,
            axisLabel : {
              formatter: '{value}%RH',
          },
          }
        ],
          series: [
            {
              name: '温度℃',
              type: 'line',
              data: this.state.seriesData3
            },
            {
              name: '湿度%RH',
              type: 'line',
              yAxisIndex:1,
              data: this.state.seriesDataa3
            }
        ]
      };
      let options4 = {
        title: { text: '节点4', x: 'center',},
        tooltip: {trigger: 'axis'},
        xAxis: {
            data: this.state.data
        },
        yAxis: [              
        {
          type: 'value',
          position: 'left',
          name: '温度',
          min: 0,
          max: 100,
          axisLabel : {
            formatter: '{value}℃',
        },
        },
        {
          type: 'value',
          position: 'right',
          name: '湿度',
          min: 0,
          max: 100,
          interval: 50,
          axisLabel : {
            formatter: '{value}%RH',
        },
        }
      ],
        series: [
          {
            name: '温度℃',
            type: 'line',
            data: this.state.seriesData4
          },
          {
            name: '湿度%RH',
            type: 'line',
            yAxisIndex:1,
            data: this.state.seriesDataa4
          }
      ]
    };
        myChart.setOption(options,true);
        myChart2.setOption(options2,true);
        myChart3.setOption(options3,true);
        myChart4.setOption(options4,true);
    }
    tick() {
        var a1 = Math.round(Math.random()*100);
        var b1 = Math.round(Math.random()*100);
        var a2 = Math.round(Math.random()*100);
        var b2 = Math.round(Math.random()*100);
        var a3 = Math.round(Math.random()*100);
        var b3 = Math.round(Math.random()*100);
        var a4 = Math.round(Math.random()*100);
        var b4 = Math.round(Math.random()*100);
        this.setState({
            wen: a1+'',
            wen2: a2+'',
            wen3: a3+'',
            wen4: a4+'',
        });
        this.setState({
            shi: b1+'',
            shi2: b2+'',
            shi3: b3+'',
            shi4: b4+'',
        });
        aa.push(a1);
        ab.push(b1);
        aa2.push(a2);
        ab2.push(b2);
        aa3.push(a3);
        ab3.push(b3);
        aa4.push(a4);
        ab4.push(b4);
        if(aa.length>8)
        {
          aa.shift();
          ab.shift();
          aa2.shift();
          ab2.shift();
          aa3.shift();
          ab3.shift();
          aa4.shift();
          ab4.shift();
          cc.push(1);
          bb.push(cc.length);
          bb.shift();          
        }
        this.callAPI();
        this.callAPI2();
        this.callAPI3();
        this.callAPI4();
        console.log(aa);
      }
      timerStart= () => {
        this.interval = setInterval(() => this.tick(), 1500);
      }
      timerStart1 = () =>  {
        timer1 = setInterval(() => this.record1(), 750);
      }
      record1 = () => {
          this.changeData();
      }    
      timerStop= () => {
        clearInterval(this.interval);
      }   
    componentDidMount(){
        this.initBarEcharts();
        this.timerStart1();
      }
    componentWillUnmount() {
        clearInterval(timer1);
      }
      componentDidUpdate(){
        this.initBarEcharts();
    }
    callAPI() {
        var opts2= {
          method: 'POST',
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
              'id':"1",
              'wendu': this.state.wen,
              'shidu': this.state.shi        
          })
      };
        fetch("http://localhost:9000/history",opts2)
        fetch("http://localhost:9000/demo_c",opts2)
            // .then(res => res.text())
            // .then(res => {});   
    } 
    callAPI2() {
      var opts2= {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            'id':"2",
            'wendu': this.state.wen2,
            'shidu': this.state.shi2        
        })
    };
      fetch("http://localhost:9000/history",opts2)
      fetch("http://localhost:9000/demo_c",opts2)
          // .then(res => res.text())
          // .then(res => {});   
  } 
    callAPI3() {
      var opts2= {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            'id':"3",
            'wendu': this.state.wen3,
            'shidu': this.state.shi3        
        })
    };
      fetch("http://localhost:9000/history",opts2)
      fetch("http://localhost:9000/demo_c",opts2)
          // .then(res => res.text())
          // .then(res => {});   
  } 
    callAPI4() {
      var opts2= {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            'id':"4",
            'wendu': this.state.wen4,
            'shidu': this.state.shi4        
        })
    };
      fetch("http://localhost:9000/history",opts2)
      fetch("http://localhost:9000/demo_c",opts2)
          // .then(res => res.text())
          // .then(res => {});   
    } 
    id_input() {
      this.state.id=this.txt1.value+'';
    }
    render(){
        return (
        <div>
             {/* <div>
                <input type="text" id="wendu" name="wendu" required lay-verify="required" placeholder="请输入传感器ID" ref={(node)=>this.txt1=node} onKeyUp={this.id_input.bind(this)} />
            </div>
        <div>温度：{this.state.wen}</div><br></br>
        <div>湿度：{this.state.shi}</div> */}
        <div>
          <button onClick={this.timerStart}>开始生成数据</button>
          <button onClick={this.timerStop}>停止生成数据</button>
        </div><br></br>
        <div id="main" style={{float:'left',width:500,height: 280 }}></div><div style={{float:'left'}}>{"    "}</div>
        <div id="main2" style={{float:'left',width:500,height: 280 }}></div><br></br> 
        <div id="main3" style={{ float:'left',width: 500,height: 280 }}></div> 
        <div id="main4" style={{float:'left', width: 500,height: 280 }}></div>
        </div>             
            )
    }
}
