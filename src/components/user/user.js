import React from 'react';
import './user.css';
import {NavLink} from "react-router-dom";

class User extends React.Component {
    render(){
        return (
            <div>
                <div className='login'>
                    <img src="/data/img/default.jpg" alt=''/>
                    <p>未登录</p>
                </div>
                <div className='userInfo'>
                    <div>
                        <p>累计获胜</p>
                        <p>0</p>
                    </div>
                    <div>
                        <p>佣金</p>
                        <p>0</p>
                    </div>
                    <div>
                        <p>余额</p>
                        <p>0</p>
                    </div>
                </div>
                <div className='money'>
                    <div>充值</div>
                    <div>提现</div>
                </div>
                <div className='today'>
                    <p>今日参与：<span>0</span></p>
                    <p>今日获胜：<span>0</span></p>
                    <p>今日失败：<span>0</span></p>
                </div>
                <ul className='userNav'>
                    <li>
                        <img src="/data/img/gico1.png" alt=""/>
                        <NavLink to='/order' style={{'lineHeight': '50px','fontSize': '14px','color': '#999'}}>我的订单</NavLink>
                    </li>
                    <li>
                        <img src="/data/img/gico2.png" alt=""/>
                        <p>兑换记录</p>
                    </li>
                    <li>
                        <img src="/data/img/gico3.png" alt=""/>
                        <p>收获地址</p>
                    </li>
                    <li>
                        <img src="/data/img/gico4.png" alt=""/>
                        <p>我的钱包</p>
                    </li>
                    <li>
                        <img src="/data/img/gico5.png" alt=""/>
                        <p>我要赚钱</p>
                    </li>
                    <li>
                        <img src="/data/img/gico6.png" alt=""/>
                        <NavLink to='/rule' style={{'lineHeight': '50px','fontSize': '14px','color': '#999'}}>玩法介绍</NavLink>
                    </li>
                </ul>

            </div>
        )
    }
}

export default User;