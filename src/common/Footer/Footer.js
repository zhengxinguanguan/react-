import React from 'react';
import style from './footbar.module.css';
import {NavLink} from "react-router-dom";

class FootBar extends React.Component{
    render(){
        return (
            <div>
                <div className={style.sub}>
                    <div>
                        <NavLink className={style.a_1} activeStyle={{'background':'url(/data/img/sub1.png) no-repeat 20px -10px', 'color':'#f16925'}} to='/home'>首页</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.a_2} activeStyle={{'background':'url(/data/img/sub2.png) no-repeat 20px -10px', 'color':'#f16925'}} to='/open'>开奖</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.a_3} activeStyle={{'background':'url(/data/img/sub3.png) no-repeat 20px -10px', 'color':'#f16925'}} to='/day'>排行</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.a_4} activeStyle={{'background':'url(/data/img/sub4.png) no-repeat 20px -10px', 'color':'#f16925'}} to='/user'>我的</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default FootBar;