import React from 'react';
import './order.css';

class Order extends React.Component {
    render(){
        return (
            <div>
                <div className='orderTit'>
                    <p className='active'>所有订单</p>
                    <p>获胜订单</p>
                    <p>失败订单</p>
                </div>
                <ul className='orderCon'>
                    <li>
                        <p>
                            <span className='orderConTitLeft'>订单编号：43591504881530</span>
                            <span className='orderConTitRight'>2017-09-08 22:38:50</span>
                        </p>
                        <div className='orderConCon'>
                            <img src="/data/img/sk1.png" alt="订单" className='orderConConImg'/>
                            <div className='orderConConInfo'>
                                <h3>100元移动充值卡</h3>
                                <p>参与玩法：<span>【尾号:双数】× 2</span></p>
                                <p>购买金额：<span>￥110</span></p>
                                <p>开奖期号：<span>170909024</span></p>
                                <p>开奖号码：<span>53763</span></p>
                            </div>
                        </div>
                        <div className='orderConBot'>
                            <p className='win'>00:05:33:76</p>
                            <span>再次购买</span>
                        </div>
                    </li><li>
                        <p>
                            <span className='orderConTitLeft'>订单编号：43591504881530</span>
                            <span className='orderConTitRight'>2017-09-08 22:38:50</span>
                        </p>
                        <div className='orderConCon'>
                            <img src="/data/img/sk1.png" alt="订单" className='orderConConImg'/>
                            <div className='orderConConInfo'>
                                <h3>100元移动充值卡</h3>
                                <p>参与玩法：<span>【尾号:双数】× 2</span></p>
                                <p>购买金额：<span>￥110</span></p>
                                <p>开奖期号：<span>170909024</span></p>
                                <p>开奖号码：<span>53763</span></p>
                            </div>
                        </div>
                        <div className='orderConBot'>
                            <p className='lose'>00:05:33:76</p>
                            <span>再次购买</span>
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Order;