import React from 'react';
import style from './list.module.css';
import {asyncAction} from "../../store/asyncAction";
import * as types from "../../store/types";
import {connect} from "react-redux";

class List extends React.Component{
    constructor(props){
        super();
        let url=`/data/json/list.json`;
        props.update(url);
    }

    render(){
        // console.log('zzz');
        return (
            <div>
                <ul className={style.list}>
                    {
                        this.props.list.map((item,index)=>(
                            <li key={index}>
                                <dl>
                                    <dt>
                                        <img src={item.src} alt='z'/>
                                    </dt>
                                    <dd>
                                        <p>
                                            <span>{item.name}</span>
                                        </p>
                                        <p style={{'color':'#999'}} className={style.buyType}>
                                            <span style={{'color':'#999'}}>抢购</span><span style={{'color':'red'}}>{item.num}</span> 张 {item.type}
                                        </p>
                                    </dd>
                                </dl>
                                <i>{item.time}</i>
                            </li>
                        ))
                    }
                </ul>
                <div className={style.more}>
                    <p>加载更多</p>
                </div>
            </div>
        )
    }
}

let initMapStateToProps = state => ({
    list:state.list
});
let initMapDispatchToProps = dispatch =>({
    update:(url)=>dispatch(asyncAction({
        url:url,
        type:types.VIEW_LIST
    }))
});
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(List);