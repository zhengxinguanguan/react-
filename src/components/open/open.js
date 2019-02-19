import React from 'react';
import './open.css';
import {asyncAction} from "../../store/asyncAction";
import * as types from "../../store/types";
import {connect} from "react-redux";


class Open extends React.Component{
    constructor(props){
        super();

        let url=`/data/json/open.json`;
        props.update(url);
    }
    render(){
        return (
            <div>
                <div className='top'>
                    <p>重庆时时彩</p>
                    <a href="https://www.cqcp.net">www.cqcp.net</a>
                    <p className='next'>下次开奖时间:<span>00:00:00</span></p>
                </div>
                <div className='tmdgp'>
                    <div className='tmdLeft'>
                        <img src="/data/img/cx.png" alt="cx"/>
                        <div>
                            <p>公平公正</p>
                            <p>无法作弊</p>
                        </div>
                    </div>
                    <div className='tenMin'>
                        <p>10:00-22:00</p>
                        <p style={{"fontSize":"14px"}}>十分钟开奖</p>
                    </div>
                    <div className='fiveMin'>
                        <p>22:00-02:00</p>
                        <p style={{"fontSize":"14px"}}>五分钟开奖</p>
                    </div>
                </div>
                <div className='kjt'>
                    <div className='kjtLeft'>
                        <p>开奖号码</p>
                    </div>
                    <div className='kjtMidLeft'>
                        <p>双人</p>
                        <span>（个位）</span>
                    </div>
                    <div className='kjtMidRight'>
                        <p>四人</p>
                        <span>（后两位）</span>
                    </div>
                    <div className='kjtRight'>
                        <p>十人</p>
                        <span>（个位）</span>
                    </div>
                </div>
                <div>
                    <ul className='openList'>
                        {
                            this.props.list.map((item,index)=>(
                                <li key={index}>
                                    <div className='openLeft'>
                                        <p>{item.qi}  期</p>
                                        <div>
                                            <p className='s1'>{item.num1}</p>
                                            <p className='s1'>{item.num2}</p>
                                            <p className='s1'>{item.num3}</p>
                                            <p className='s2'>{item.num4}</p>
                                            <p className='s2'>{item.num5}</p>
                                        </div>
                                    </div>
                                    <div className='openMidLeft'>
                                        <div className='s1'>
                                            {item.two1}
                                        </div>
                                        <span>|</span>
                                        <div className='s2'>
                                            {item.two2}
                                        </div>
                                    </div>
                                    <div className='openMidRight'>
                                        {item.four}
                                    </div>
                                    <div className='openRight'>
                                        {item.ten}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='openMore'>
                        <p>加载更多....</p>
                    </div>
                </div>

            </div>
        )
    }
}

let initMapStateToProps = state => ({
    list:state.open
});
let initMapDispatchToProps = dispatch =>({
    update:(url)=>dispatch(asyncAction({
        url:url,
        type:types.VIEW_OPEN
    }))
});
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Open);