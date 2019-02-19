import React from 'react';
import './home.css';
import {Link} from "react-router-dom";
import queryString from 'query-string';
import List from "./list";
import {asyncAction} from "../../store/asyncAction";
import {connect} from 'react-redux';
import * as types from '../../store/types';

class Home extends React.Component{
    constructor(props){
        super();

        let url=`/data/json/home.json`;
        props.update(url);
    }
    render(){
        return (
            <div>
                <div className="scrollLeftDiv">
                    <div className="ico">
                    </div>
                    <div className="scrollLeft" id="topScroll" style={{'overflow': 'hidden', 'position': 'relative'}}>
                        <ul style={{'margin': '0px', 'padding': '0px', 'overflow': 'hidden', 'position': 'relative', 'listStyle': 'none', 'width': '6138px', 'left': '-616px'}}>
                            <li style={{'position': 'relative', 'overflow': 'hidden', 'float': 'left'}}>欢迎您光临拼卡部落！</li>
                            <li style={{'position': 'relative', 'overflow': 'hidden', 'float': 'left'}}>恭喜[孙泽]获胜2单</li>
                            <li style={{'position': 'relative', 'overflow': 'hidden', 'float': 'left'}}>恭喜[猎奇]获胜1单</li>
                            <li style={{'position': 'relative', 'overflow': 'hidden', 'float': 'left'}}>恭喜[香香^ ^]获胜1单</li>
                            <li style={{'position': 'relative', 'overflow': 'hidden', 'float': 'left'}}>恭喜[暗里着迷]获胜2单</li>
                            <li style={{'position': 'relative', 'overflow': 'hidden', 'float': 'left'}}>恭喜[莂說丶対罘⑦り]获胜2单</li>
                            <li style={{'position': 'relative', 'overflow': 'hidden', 'float': 'left'}}>欢迎您光临拼卡部落！</li>
                        </ul>
                    </div>
                </div>
                <div className='topBanner'>
                    <img src="/data/img/topBanner.png" alt="topBanner"/>
                </div>
                <div className="nav">
                    <span className="n1">重庆时时彩</span>
                    <span className="n2">公平公正</span>
                    <span className="n3">全网最低</span>
                </div>
                <div className="wrapper">
                    {
                        this.props.list.map((item,index)=>(
                            <div className="main" key={index}>
                                <Link to={{pathname:'/goods/',search:queryString.stringify({a:item.src,b:item.tit,c:item.two,d:item.four,e:item.ten})}}>
                                    <dl>
                                        <dt><img src={item.src} alt=''/></dt>
                                        <dd>
                                            <h3>{item.tit}</h3>
                                            <h4>
                                                <span>双人：<i>¥{item.two}</i></span>
                                                <span>四人：<i>¥{item.four}</i></span>
                                                <span>十人：<i>¥{item.ten}</i></span>
                                            </h4>
                                            <h5>
                                                <div className="djs fnTimeCountDown fl">
                                                    <span className="hour">00</span>
                                                    <i>:</i>
                                                    <span className="mini">00</span>
                                                    <i>:</i>
                                                    <span className="sec">00</span>
                                                    <i>:</i>
                                                    <span className="hm">00</span>
                                                </div>
                                                <em>点击抢购</em>
                                            </h5>
                                        </dd>
                                    </dl>
                                </Link>
                            </div>
                        ))
                    }

                </div>
                <div className='tab'>
                    <span className='active'>最新参与记录</span>
                    <span>最新夺宝记录</span>
                </div>
                <List/>

            </div>

        )
    }
}
let initMapStateToProps = state => ({
    list:state.home
});
let initMapDispatchToProps = dispatch =>({
    update:(url)=>dispatch(asyncAction({
        url:url,
        type:types.VIEW_HOME
    }))
});
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home);